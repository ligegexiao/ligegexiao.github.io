var posts=["undefined/3eab.html","undefined/3eeb.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };