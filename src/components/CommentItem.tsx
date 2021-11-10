import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Comment} from '../types/comment'
import { dateToString } from '../utils/utils';
import { useFeed } from '../FeedContext';
import Avatar from './Avatar';
import { useState } from 'react';

const CommentItem = (comment: Comment) => {
  const {text, likes, createdDate, createdBy} = comment;

  const {comments, setComments} = useFeed();
  
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(text);

  const updateComment = (updatedComment: Comment) => {
    setComments([
      ...comments.slice(0, comment.id - 1), 
      {
        ...comments[comment.id - 1],
        ...updatedComment
      },
      ...comments.slice(comment.id)
    ]);
  }

  const handleCommentEditKeyPress = (e: any) => {
    if(e.key === 'Enter' && e.target.value !== '') {
      updateComment({...comment, text: e.target.value});
      setEditMode(false);
    }
  }

  const renderTextContent = () => {
    if(!isEditMode) {
      return text
    }

    return (
      <textarea 
        className="form-control border-0 my-2" 
        id="commentEditTextarea" 
        rows={2} 
        value={editText}
        placeholder="Add a comment" 
        style={{resize: 'none'}}
        autoFocus
        onBlur={() => setEditMode(false)}
        onKeyPress={handleCommentEditKeyPress}
        onChange={e => setEditText(e.target.value)}
      />
    )
  }

  return (
    <div className="d-flex flex-row mt-3 mb-3 w-100">
      <Avatar className="me-2" size="sm"/>
      <div className="card w-100" style={{backgroundColor: '#D9E1EB'}}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <span className="fw-bold">{`${createdBy.firstName} ${createdBy.lastName}`}</span>
            <span className="text-secondary" style={{fontSize: 14}}>{dateToString(createdDate)}</span>
          </div>
          <span className="text-primary" style={{fontSize: 14}}>{createdBy.occupation}</span>
          <div style={{fontSize: 14}}>
            {renderTextContent()}
          </div>
          <div className="d-flex text-secondary">
            <span className="me-3">{likes} Likes</span>
            <span className="me-3">|</span>
            <button className="btn btn-link link-secondary me-3 p-0" onClick={() => updateComment({...comment, likes: comment.likes + 1})}>
              <FontAwesomeIcon className="me-2" icon={faHeart} style={{fontSize: 14}}/>
              Like
            </button>
            <span className="me-3">|</span>
            <button className="btn btn-link link-secondary me-3 p-0" onClick={() => setEditMode(true)}>
              <FontAwesomeIcon className="me-2" icon={faPencilAlt} style={{fontSize: 14}}/>
              Edit
            </button>
            <span className="me-3">|</span>
            <button className="btn btn-link link-secondary me-3 p-0" onClick={() => updateComment({...comment, isDeleted: true})}>
              <FontAwesomeIcon className="me-2" icon={faTrash} style={{fontSize: 14}}/>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentItem;