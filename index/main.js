
let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

let div = document.getElementsByClassName('wrap')[0];

fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json()).then(users => {
    for (let user of users) {
        let div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `<h5>${user.id} ${user.name}</h5>`
        document.body.appendChild(div);
        div.classList.add(`member`);

        let userDetailsBtn = document.createElement(`button`);
        userDetailsBtn.innerText = 'user details';

        div.appendChild(userDetailsBtn);
        userDetailsBtn.classList.add(`button`);
        div.appendChild(userDetailsBtn);
        wrap.appendChild(div);

        userDetailsBtn.onclick = function () {
            location.href = `../user-details/user-details.html?data=${JSON.stringify(user)}`

        }
    }
});
