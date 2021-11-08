import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Comment} from '../types/comment'
import profilePicture from '../assets/profile-pic.jpg';
import { dateToString } from '../utils/utils';
import { useFeed } from '../FeedContext';

const CommentItem = ({id, postId, text, likes, createdDate, createdBy, isDeleted}: Comment) => {
    const {comments, setComments} = useFeed();

    const likeComment = () => {
        const comment: Comment | null = comments.find(comment => comment.id === id) ?? null;
    
        if(comment) {
          setComments([
            ...comments.slice(0,comment.id - 1), 
            {
                ...comments[comment.id - 1],
                likes: comment.likes + 1
            },
            ...comments.slice(comment.id)
          ]);
        }
    }

    const deleteComment = () => {
        const comment: Comment | null = comments.find(comment => comment.id === id) ?? null;
    
        if(comment) {
          setComments([
            ...comments.slice(0,comment.id - 1), 
            {
                ...comments[comment.id - 1],
                isDeleted: true
            },
            ...comments.slice(comment.id)
          ]);
        }
    }


    return (
      <div className="d-flex flex-row mt-3 mb-3 w-100">
        <img src={profilePicture} className="rounded-circle me-2" alt="profile" width="60" height="60"/>
        <div className="card w-100" style={{backgroundColor: '#D9E1EB'}}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <span className="fw-bold">Brandon Minner</span>
              <span className="text-secondary" style={{fontSize: 14}}>{dateToString(createdDate)}</span>
            </div>
            <span className="text-primary" style={{fontSize: 14}}>Professional-Student</span>
            <div style={{fontSize: 14}}>
              {text}
            </div>
            <div className="d-flex text-secondary">
              <span className="me-3">{likes} Likes</span>
              <span className="me-3">|</span>
              <a className="me-3 link-secondary" onClick={likeComment}>
                <FontAwesomeIcon className="me-2" icon={faHeart} style={{fontSize: 14}}/>
                Like
              </a>
              <span className="me-3">|</span>
              <a className="me-3 link-secondary">
                <FontAwesomeIcon className="me-2" icon={faPencilAlt} style={{fontSize: 14}}/>
                Edit
              </a>
              <span className="me-3">|</span>
              <a className="me-3 link-secondary" onClick={deleteComment}>
                <FontAwesomeIcon className="me-2" icon={faTrash} style={{fontSize: 14}}/>
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CommentItem;