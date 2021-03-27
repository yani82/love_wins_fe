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
            let newPost = new Post(post, post.attributes) 

            document.querySelector('#post-container').innerHTML += newPost.renderPostCard()

            // render(post)
          });
    });
};

function createFormHandler(e) {
  e.preventDefault()
  const titleInput = document.querySelector("#input-title").value
  const contentInput = document.querySelector("#input-content").value
  const imageInput = document.querySelector("#input-url").value
  const userId = parseInt(document.querySelector("#users").value) 
  postFetch(titleInput, contentInput, imageInput, userId)
}

function postFetch(title, content, image_url, user_id) {
    const bodyData = {title, content, image_url, user_id}
  
    fetch(endPoint, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
      //  same as listing down all attributes ie "({title: title, })"
    })
    .then(res => res.json())
    // .catch(err => console.log(err))
    .then(post => {
      console.log(post);
      const postData = post.data.attributes
      // can I remove .attributes? ^
      let newPost = new Post(post, postData) 

      document.querySelector('#post-container').innerHTML += newPost.renderPostCard()
    })  
}
