'use strict';
const url = 'https://neto-api.herokuapp.com/twitter/jsonp';
const wallpaper = document.querySelector('[data-wallpaper]');
const username = document.querySelector('[data-username]');
const description = document.querySelector('[data-description]');
const pic = document.querySelector('[data-pic]');
const tweets = document.querySelector('[data-tweets]');
const followers = document.querySelector('[data-followers]');
const following = document.querySelector('[data-following]');

function insertData(data) {
  username.innerText = data.username;
  description.innerText = data.description;
  tweets.innerText = data.tweets;
  followers.innerText = data.followers;
  following.innerText = data.following;
  wallpaper.src = data.wallpaper;
  pic.src = data.pic;
  // console.log(data);
}

function loadData(url) {
  
  return new Promise((done, fail) => {
    window.parseBook = done;
    // console.log(done);
    const script = document.createElement('script');
    script.src = `${url}?callback=parseBook`;
    document.body.appendChild(script);    
  });
}

loadData(url)
  .then(insertData);

