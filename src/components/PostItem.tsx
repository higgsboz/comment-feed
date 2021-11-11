import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle, faCommentDots, faEllipsisH, faHeart, faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Post } from '../types/post';
import { Comment } from '../types/comment';
import CommentItem from './CommentItem';
import { dateToString } from '../utils/utils';
import { useFeed } from '../FeedContext';
import Avatar from './Avatar';
import Me from '../assets/Me.json';

const PostItem = function (post: Post) {
  const {
    id, text, likes, createdDate, createdBy,
  } = post;

  const {
    posts, setPosts, comments, setComments,
  } = useFeed();

  const [showCommentSection, setShowCommentSection] = useState<boolean>(false);
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(text);

  const postComments: Comment[] = useMemo(() => comments
    .filter((comment) => comment.postId === id && !comment.isDeleted)
    .sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime()), [id, comments]);

  const addComment = (text: string) => {
    const post: Post | null = posts.find((post) => post.id === id) ?? null;

    if (post) {
      const comment: Comment = {
        id: comments.length + 1,
        postId: post.id,
        text,
        likes: 0,
        createdDate: new Date(),
        createdBy: Me,
        isDeleted: false,
      };
      setComments([
        ...comments,
        comment,
      ]);
    }
  };

  const updatePost = (updatedPost: Post) => {
    setPosts([
      ...posts.slice(0, post.id - 1),
      {
        ...posts[post.id - 1],
        ...updatedPost,
      },
      ...posts.slice(post.id),
    ]);
  };

  const handleCommentKeyPress = (e: any) => {
    // Create the comment if the key is Enter and the value exists
    if (e.key === 'Enter' && e.target.value !== '') {
      addComment(e.target.value);
      e.target.value = '';
    }
  };

  const handlePostEditKeyPress = (e: any) => {
    // Update the post if the key is Enter and the value isn't whitespace
    if (e.key === 'Enter' && !/\s/.test(e.target.value)) {
      updatePost({ ...post, text: e.target.value });
      setEditMode(false);
    }
  };

  const renderTextContent = () => {
    if (!isEditMode) {
      return text;
    }

    return (
      <textarea
        className="form-control border-0 ms-2 me-3 ps-1"
        id="postEditTextarea"
        rows={2}
        value={editText}
        placeholder="What is on your mind?"
        style={{ resize: 'none' }}
        autoFocus
        onBlur={() => setEditMode(false)}
        onKeyPress={handlePostEditKeyPress}
        onChange={(e) => setEditText(e.target.value)}
      />
    );
  };

  return (
    <div className="card shadow-sm rounded-3 mt-3">
      <div className="card-body">
        <div className="d-flex flex-row mb-3">
          <Avatar size="lg" />
          <div className="d-flex flex-row w-100 justify-content-between">
            <div className="ms-3">
              <div className="fw-bold">{`${createdBy.firstName} ${createdBy.lastName}`}</div>
              <div className="text-primary fw-bold" style={{ fontSize: 12 }}>
                <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
                {createdBy.location.state}
                ,
                {createdBy.location.country}
              </div>
              <div className="text-secondary fw-bold" style={{ fontSize: 12 }}>{dateToString(createdDate)}</div>
            </div>
            <div className="dropdown dropstart my-auto">
              <button className="btn btn-link link-secondary p-0" type="button" id={`Post-${id}-dropdown-button`} data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
              <ul className="dropdown-menu" aria-labelledby={`Post-${id}-dropdown-button`}>
                <li><button className="btn btn-link dropdown-item" onClick={() => setEditMode(true)} disabled={isEditMode}>Edit</button></li>
                <li><button className="btn btn-link dropdown-item" onClick={() => updatePost({ ...post, isDeleted: true })}>Delete</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {renderTextContent()}
        </div>
        <div className="d-flex text-secondary mt-2">
          {likes}
          {' '}
          Likes
          <FontAwesomeIcon className="my-auto mx-1" icon={faCircle} style={{ fontSize: 4 }} />
          {postComments.length}
          {' '}
          Comments
        </div>
      </div>
      <div className="card-footer">
        <span>
          <button className="btn btn-link link-secondary p-0" onClick={() => updatePost({ ...post, likes: post.likes + 1 })}>
            <FontAwesomeIcon className="me-2 text-secondary" icon={faHeart} />
            Like
          </button>
        </span>
        <span className="ms-3">
          <button
            className={`btn btn-link link-secondary p-0 ${showCommentSection || postComments.length > 0 ? 'fw-bold' : null}`}
            onClick={() => setShowCommentSection(!showCommentSection)}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon className="me-2 text-secondary" icon={faCommentDots} />
            Comment
          </button>
        </span>
        {(showCommentSection || postComments.length > 0) && (
        <div>
          <div className="d-flex flex-row mt-3 mb-3 w-100">
            <Avatar className="me-2" size="sm" />
            <input className="px-3 w-100" placeholder="Add a comment" onKeyPress={handleCommentKeyPress} style={{ borderRadius: '25px', borderStyle: 'solid' }} />
          </div>
          {postComments.map((comment) => (
            <CommentItem key={`Comment-${comment.id}`} {...comment} />
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
