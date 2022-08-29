
let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));

let postsDiv = document.getElementsByClassName('post_details')[0];

postsDiv.innerHTML = `<h3>${post.id} - ${post.userId}</h3>
                      <h4>${post.title}</h4>
                      <p>${post.body}</p>`


let commentsBtn = document.createElement('button');
commentsBtn.innerText = 'Show comments'
postsDiv.appendChild(commentsBtn)


let commentsDiv = document.createElement('div');
commentsDiv.classList.add('comments');
document.body.appendChild(commentsDiv);

commentsBtn.onclick = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            for (let comment of comments) {
                let commentDiv = document.createElement('div');
                commentDiv.classList.add('comment')
                commentDiv.innerText = comment.body;

                commentsDiv.appendChild(commentDiv);
            }
            commentsBtn.disabled = true;
        })
};
