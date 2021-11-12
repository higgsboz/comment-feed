import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faPencilAlt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../types/comment';
import { dateToString } from '../utils/utils';
import { useFeed } from '../FeedContext';
import Avatar from './Avatar';

interface Props {
  comment: Comment;
}

// eslint-disable-next-line func-names
const CommentItem = function ({ comment }: Props): JSX.Element {
  const { id, text, likes, createdDate, createdBy } = comment;

  const { comments, setComments } = useFeed();

  const [isEditMode, setEditMode] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(text);

  const updateComment = (updatedComment: Comment): void => {
    setComments([
      ...comments.slice(0, id - 1),
      {
        ...comments[id - 1],
        ...updatedComment,
      },
      ...comments.slice(id),
    ]);
  };

  const handleCommentEditKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    const target = e.target as HTMLTextAreaElement;
    if (e.key === 'Enter' && target.value !== '') {
      updateComment({ ...comment, text: target.value });
      setEditMode(false);
    }
  };

  const renderTextContent = (): JSX.Element => {
    if (!isEditMode) {
      return <span>{text}</span>;
    }

    return (
      <textarea
        className="form-control border-0 my-2"
        id="commentEditTextarea"
        rows={2}
        value={editText}
        placeholder="Add a comment"
        style={{ resize: 'none' }}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        onBlur={() => setEditMode(false)}
        onKeyPress={handleCommentEditKeyPress}
        onChange={(e) => setEditText(e.target.value)}
      />
    );
  };

  return (
    <div className="d-flex flex-row mt-3 mb-3 w-100">
      <Avatar className="me-2" size="sm" />
      <div className="card w-100" style={{ backgroundColor: '#D9E1EB' }}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <span className="fw-bold">
              {`${createdBy.firstName} ${createdBy.lastName}`}
            </span>
            <span className="text-secondary" style={{ fontSize: 14 }}>
              {dateToString(createdDate)}
            </span>
          </div>
          <span className="text-primary" style={{ fontSize: 14 }}>
            {createdBy.occupation}
          </span>
          <div style={{ fontSize: 14 }}>{renderTextContent()}</div>
          <div className="d-flex text-secondary">
            <span className="me-2">
              {likes} {likes === 1 ? 'Like' : 'Likes'}
            </span>
            <span className="me-2">|</span>
            <button
              className="btn btn-link link-secondary me-2 p-0"
              type="button"
              onClick={() => {
                updateComment({ ...comment, likes: likes + 1 });
              }}
            >
              <FontAwesomeIcon
                className="me-2"
                icon={faHeart}
                style={{ fontSize: 14 }}
              />
              Like
            </button>
            <span className="me-2">|</span>
            <button
              className="btn btn-link link-secondary me-2 p-0"
              type="button"
              onClick={() => setEditMode(true)}
            >
              <FontAwesomeIcon
                className="me-2"
                icon={faPencilAlt}
                style={{ fontSize: 14 }}
              />
              Edit
            </button>
            <span className="me-2">|</span>
            <button
              className="btn btn-link link-secondary me-2 p-0"
              type="button"
              onClick={() => updateComment({ ...comment, isDeleted: true })}
            >
              <FontAwesomeIcon
                className="me-2"
                icon={faTrash}
                style={{ fontSize: 14 }}
              />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
