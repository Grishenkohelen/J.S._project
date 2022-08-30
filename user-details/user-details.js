
let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let mainDiv = document.createElement('div');
mainDiv.classList.add('main1');
document.body.appendChild(mainDiv);



let usersDetails = document.createElement('div');
usersDetails.classList.add('user_details');
mainDiv.appendChild(usersDetails);


let details = document.getElementsByClassName('user_details')[0];

details.innerHTML =     `<h1>${user.id} - ${user.name}</h1>
                        <h3>username: ${user.username}</h3>
                        <h3>email: ${user.email}</h3>
                        <ul><h3>address:</h3>
                        <li>street: ${user.address.street};</li>
                        <li>suite: ${user.address.suite};</li>
                        <li>city: ${user.address.city};</li>
                        <li>zipcode: ${user.address.zipcode};</li>
                        <ul><h3>geo:</h3>
                        <li>lat: ${user.address.geo.lat}</li>
                        <li>lng: ${user.address.geo.lng}</li>
                        </ul>
                        </ul>
                        <p><h3>Phone:</h3> ${user.phone}</p>
                        <p><h3>website:</h3>  ${user.website}</p>
                        <ul><h3>company:</h3>
                        <li>${user.company.name};</li>
                        <li>catchPhrase: ${user.company.catchPhrase};</li>
                        <li>bs: ${user.company.bs};</li>
                        </ul>`

let detailBtn = document.createElement('button');
detailBtn.innerText = 'post of current user';

usersDetails.appendChild(detailBtn)
detailBtn.classList.add('post_button');

let postsDiv = document.createElement('div');
postsDiv.classList.add('posts')
document.body.appendChild(postsDiv);

detailBtn.onclick =(id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts=> {
            for (let post of posts) {

                let postDiv = document.createElement('div');
                postDiv.innerText = `${post.title}`;
                postDiv.classList.add('post_title');

                postsDiv.appendChild(postDiv);

                let postBtn = document.createElement('button');
                postBtn.innerText = 'post-details';
                postBtn.classList.add('button_details')
                postDiv.appendChild(postBtn);

                postBtn.onclick = () => {
                    console.log(post);
                    location.href = `../post-details/post-details.html?id=${JSON.stringify(post)}`
                }



            }
            detailBtn.disabled = true;

        })};













