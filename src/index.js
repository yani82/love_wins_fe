const endPoint = 'http://localhost:3000/api/v1/posts'; 

document.addEventListener('DOMContentLoaded', () => {
    getPosts();

    const createPostForm = document.querySelector('#create-post-form'); 
    createPostForm.addEventListener('submit', function(e) {
      createFormHandler(e); 
    });
  });   

function getPosts() {
	fetch(endPoint)
	.then(res => res.json())
	.then(posts => {
		posts.data.forEach(post => { 
            let newPost = new Post(post, post.attributes); 

            // document.querySelector('#post-container').innerHTML += newPost.renderPostCard()
            document.querySelector('#post-container').insertAdjacentHTML('beforeend', newPost.renderPostCard());
    });
  });
}

function createFormHandler(e) {
  e.preventDefault();
  const titleInput = document.querySelector('#input-title').value;
  const contentInput = document.querySelector('#input-content').value;
  const imageInput = document.querySelector('#input-url').value; 
  // const userId = parseInt(document.querySelector("#users").value) 
  const userId = document.querySelector('#users').value;
  postFetch(titleInput, contentInput, imageInput, userId);
  // titleInput.value = "" 
}

function postFetch(title, content, image_url, user_id) {
    const bodyData = {title, content, image_url, user_id};
  
    fetch(endPoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodyData),
      //  same as listing down all attributes ie "({title: title, })"
    })
    .then(res => res.json())
    // .catch(err => console.log(err))
    .then(post => {
      console.log(post);
      const postData = post.data.attributes;
      // can I remove .attributes? ^
      let newPost = new Post(post, postData); 

      document.querySelector('#post-container').innerHTML += newPost.renderPostCard();
    }); 
    
    // function postDelete(title, content, image_url, user_id) {
    //   const bodyData = {title, content, image_url, user_id};
    
    //   fetch(`${endPoint}/${id}`, {
    //     method: 'DELETE',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(bodyData),
    //     //  same as listing down all attributes ie "({title: title, })"
    //   })
    //   .then(res => res.json())
    //   // .catch(err => console.log(err))
    //   .then(post => {
    //     console.log(post);
    //     const postData = post.data.attributes;
    //     // can I remove .attributes? ^
    //     let newPost = new Post(post, postData); 
  
        document.querySelector('#post-container').innerHTML += newPost.renderPostCard();
      // });  
    // }

    const postPosts = document.querySelector('.posts_post');
    
    postPosts.addEventListener('click', e => {
    if (e.target.classList.contains('delete-post-button')) {
      e.target.parentElement.remove();
      // go through with querySelector every post and within post find delete button and add eventlistener on it (.parentElement.remove)
      // get all the posts, then get the delete button from each post
      // add eventlistener, then do the e.target.parent line in DOMContentLoaded function
    }
  });

}
