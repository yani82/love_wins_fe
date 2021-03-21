const endPoint = "http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', () => {
    getPosts()

    const createPostForm = document.querySelector("#create-post-form") 
    createPostForm.addEventListener("submit", (e) => createFormHandler(e))

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
                <p>"${post.attributes.content}"</p>
                <p>${post.attributes.user.name}</p>
                <button data-id=${post.id}>edit</button>
              </div>
              <br><br>`;
    
              document.querySelector('#post-container').innerHTML += postMarkup
          })
    })
}

function createFormHandler(e) {
  e.preventDefault()
  const titleInput = document.querySelector("#input-title").value
  const contentInput = document.querySelector("#input-content").value
  const imageInput = document.querySelector("#input-url").value
  const userId = parseInt(document.querySelector("#users").value) 
  postFetch(titleInput, contentInput, imageInput, userId)
}

function postFetch(title, content, image_url, user_id) {
  console.log(title, content, image_url, user_id)
}
