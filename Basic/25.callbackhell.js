function getUser(userId, callback) {
    setTimeout(() => {
      console.log("User data fetched for:", userId);
      callback(userId);
    }, 1000);
  }
  
  function getPosts(userId, callback) {
    setTimeout(() => {
      console.log("Posts fetched for user:", userId);
      callback(["Post 1", "Post 2"]);
    }, 1000);
  }
  
  function getComments(postId, callback) {
    setTimeout(() => {
      console.log("Comments fetched for post:", postId);
      callback(["Comment 1", "Comment 2"]);
    }, 1000);
  }
  
  // Callback hell structure
  getUser(1, (userId) => {
    getPosts(userId, (posts) => {
      getComments(posts[0], (comments) => {
        console.log("Comments:", comments);
      });
    });
  });
  


//   callback hell handle by promise
  function getUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("User data fetched for:", userId);
        resolve(userId);
      }, 1000);
    });
  }
  
  function getPosts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Posts fetched for user:", userId);
        resolve(["Post 1", "Post 2"]);
      }, 1000);
    });
  }
  
  function getComments(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Comments fetched for post:", postId);
        resolve(["Comment 1", "Comment 2"]);
      }, 1000);
    });
  }
  
  getUser(1)
    .then((userId) => getPosts(userId))
    .then((posts) => getComments(posts[0]))
    .then((comments) => console.log("Comments:", comments))
    .catch((err) => console.error(err));
  