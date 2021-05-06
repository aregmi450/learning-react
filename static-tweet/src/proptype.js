import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  /* importing a file into js */
import moment from 'moment';
import PropTypes from 'prop-types';



//prop is short for property
function Comment({ author, message, likes }) {
    return (
        <div>
            <div className='author'>{author}</div>
            <div className='message'>{message}</div>
            <div className='likes'>
                {likes > 0 ? likes : 'No'} likes
</div>
        </div>
    );
}

Comment.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number
}
//main function where all the components of the program are called to use 
function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <Author author={tweet.author} /><Time time={tweet.timestamp} />
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>

    );
}
//adding test tweet object



//adding avatar function to show avatar of the user 
//first key is used for hash variable 
function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar" />
    );
}

//adding message component to add message from the user
function Message({ text }) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

//author adds the username to the main app
function Author({ author }) {
    const { name, handle } = author;
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle"> @{handle}</span>
        </span>
    );
}

//these are arrow functions 
//let keyword defines changeable variable can be used instead of var 
// const keyword defines constant and throws error if you try to reassign variable

// has 2 statement so needs surrounding braces and return 
const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time"> {timeString}</span>
    );
};
const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);
function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet retweet-button" />
        {getRetweetCount(count)}
    </span>
);

const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart" />
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>}
    </span>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

//adding the tweet props destructured

const testTweet = {
    message: "Sometihng about football.",
    gravatar: "36374250faae5973dca88b8e59da282f",
    author: {
        handle: "footballguy",
        name: "THE FOOTBALL GUY"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2021-05-01 21:22:34.45"
};



/* ReactDOM.render(<Tweet tweet={testTweet} />,
  document.querySelector('#root')
); */

ReactDOM.render(<Comment author={42} />,
    document.querySelector('#root')
);

