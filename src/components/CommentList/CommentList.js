import React from 'react';
import './commentList.css';

function Comments(props) {
    const comments = props.comments.map(comment =>
        <li key={comment.id} className="card border-secondary mb-3">
            <Comment comment={comment}/>
        </li>
    )

    return (
        <div>
            {/* <LeaveComment /> */}
            <ul className="comments">
                <h3>Comments</h3>
                {comments}
            </ul>
        </div>

    )
}

export default Comments;

function Comment(props) {
    const { comment } = props;
    const seed = comment.name.replace(' ', '-').toLowerCase();
    const avatarImg = `https://robohash.org/${seed}.png`;

    return(
        <div className="comment__userInfo">
            <div className="card-header">
                <div><img src={avatarImg} alt={`${comment.name} user icon`}/></div>
                <div>
                    <h4>{comment.name}</h4>
                    <small>{new Date().toLocaleDateString()}</small>
                </div>
            </div>
            <div className="card-body">
                <p>{comment.text}</p>
            </div>
        </div>
    )
}

function LeaveComment() {

}
