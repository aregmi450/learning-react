import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  /* importing a file into js */


//prop is short for property


//adding avatar function to show avatar of the user 
function Avatar(){
  return(
    <img 
      src= "https://www.gravatar.com/avatar/nothing"
      className = "avatar"
      alt ="avatar" />
  );
}

//adding message component to add message from the user
function Message(){
  return(
    <div className="message">
      The tweet must be less than 140 characters.
    </div>
  );
}

//author adds the username to the main app
function Author(){
  return(
    <span className="author">
     <span className="name">Your Name </span>
     <span className="handle"> Your Handle</span> 
    </span>
  );
}

//these are arrow functions 
//let keyword defines changeable variable can be used instead of var 
// const keyword defines constant and throws error if you try to reassign variable

const Time = () => (
  <span className="time"> 3h ago</span>
);
const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);
const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);
const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);


//main function where all the components of the program are called to use 
function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author/><Time/>
        <Message/>
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>

  );
}



ReactDOM.render(
  <Tweet/>,
  document.querySelector('#root')
);