const endPoint = “http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', () => {
    getPosts()
})

function getPosts() {
	fetch(endPoint)
	.then(res => res.json())
	.then(posts => {
		posts.data.forEach(post => {
            const postMarkup = `
              <div data-id=${post.id}>
                <img src=${post.attributes.image_url} height="200" width="250">
                <h3>${post.attributes.title}</h3>
                <p>${post.attributes.user.name}</p>
                <button data-id=${post.id}>edit</button>
              </div>
              <br><br>`;
    
              document.querySelector('#post-container').innerHTML += postMarkup
          })
    })
}