import React from 'react';


const CommentDetails = (props) => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar}/>
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadat">
    <span className="date">{props.timePosted}</span>
            </div>
    <div className="text">{props.textByA}</div>
        </div>
    </div>
    );
};

export default CommentDetails;