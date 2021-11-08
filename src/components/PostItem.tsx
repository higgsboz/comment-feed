import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCommentDots, faEllipsisH, faHeart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {Post} from '../types/post'
import {Person} from '../types/person'
import {Comment} from '../types/comment'
import profilePicture from '../assets/profile-pic.jpg';
import CommentItem from './CommentItem';
import { dateToString } from '../utils/utils';
import { useFeed } from '../FeedContext';

const tempPerson: Person = {
    firstName: "Brandon",
    lastName: "Minner",
    occupation: "Software Engineer"
  }

const PostItem = (props: {details: Post}) => {

    const {posts, setPosts, comments, setComments} = useFeed();

    const {id, text, likes, createdDate, createdBy, isDeleted} = props.details;
  
    const [showCommentSection, setShowCommentSection] = useState(false);
  
    const postComments: Comment[] = useMemo(() => {
      return comments.filter(comment => comment.postId === id && !comment.isDeleted);
    }, [comments])

    const addComment = (text: string) => {
        const post: Post | null = posts.find(post => post.id === id) ?? null;
    
        if(post) {
          const comment: Comment = {
            id: comments.length + 1,
            postId: post.id,
            text: text,
            likes: 0,
            createdDate: new Date(),
            createdBy: tempPerson,
            isDeleted: false
          }
          setComments([
            ...comments, 
            comment
          ]);
        }
    }

    const likePost = () => {
        const post: Post | null = posts.find(post => post.id === id) ?? null;
    
        if(post) {
            setPosts([
            ...posts.slice(0, post.id - 1), 
            {
                ...posts[post.id - 1],
                likes: post.likes + 1
            },
            ...posts.slice(post.id)
          ]);
        }
    }

    const deletePost = () => {
        const post: Post | null = posts.find(post => post.id === id) ?? null;
    
        if(post) {
          setPosts([
            ...posts.slice(0,post.id - 1), 
            {
                ...posts[post.id - 1],
                isDeleted: true
            },
            ...posts.slice(post.id)
          ]);
        }
    }
  
    const handleKeyPress = (e: any) => {
      if(e.key === 'Enter') {
        addComment(e.target.value);
        e.target.value = "";
      }
    }
  
    return (
      <div className="card shadow-sm rounded-3 mt-3">
        <div className="card-body">
          <div className="d-flex flex-row mb-3">
            <img src={profilePicture} className="rounded-circle" alt="profile" width="60" height="60"/>
            <div className="d-flex flex-row w-100 justify-content-between">
              <div className="ms-3">
                <div className="fw-bold">{`${createdBy.firstName} ${createdBy.lastName}`}</div>
                <div className="text-primary fw-bold" style={{fontSize: 12}}>
                  <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
                  OH, USA
                </div>
                <div className="text-secondary fw-bold" style={{fontSize: 12}}>{dateToString(createdDate)}</div>
              </div>
              <FontAwesomeIcon className="my-auto" icon={faEllipsisH} />
            </div>
          </div>
          <div>
            {text}
          </div>
          <div className="d-flex text-secondary mt-2">
            {likes} Likes
            <FontAwesomeIcon className="my-auto mx-1" icon={faCircle} style={{fontSize: 4}} /> 
            {postComments.length} Comments
          </div>
        </div>
        <div className="card-footer">
          <span>
            <a className="link-secondary" onClick={likePost}>
              <FontAwesomeIcon className="me-2 text-secondary" icon={faHeart} />
              Like
            </a>
          </span>
          <span className="ms-3">
            <a 
              className={`link-secondary ${showCommentSection || postComments.length > 0 ? 'fw-bold' : null}`}
              onClick={() => setShowCommentSection(!showCommentSection)}
              style={{cursor: 'pointer'}}
            >
              <FontAwesomeIcon className="me-2 text-secondary" icon={faCommentDots} />
              Comment
            </a>
          </span>
          {(showCommentSection || postComments.length > 0) && (
            <div>
              <div className="d-flex flex-row mt-3 mb-3 w-100">
                <img src={profilePicture} className="rounded-circle me-2" alt="profile" width="60" height="60"/>
                <input className="px-4 w-100" onKeyPress={handleKeyPress} style={{borderRadius: '25px', borderStyle: 'solid'}}/>
              </div>
              {postComments.map(comment => {
                return (
                  <CommentItem key={`Comment-${comment.id}`} {...comment} />
                )
              })}
            </div>
          )}
        </div>
      </div>
    )
}

export default PostItem;