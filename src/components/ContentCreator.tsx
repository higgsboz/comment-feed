import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import { useFeed } from '../contexts/FeedContext';
import Avatar from './Avatar';
import Me from '../assets/Me.json';

const ContentCreator = function (): JSX.Element {
  const { posts, setPosts } = useFeed();

  const addPost = (text: string): void => {
    const newPost = {
      id: posts.length + 1,
      text,
      likes: 0,
      createdDate: new Date(),
      createdBy: Me,
      isDeleted: false,
    };
    setPosts([...posts, newPost]);
  };

  const [message, setMessage] = useState<string>('');

  return (
    <div className="card shadow-sm rounded-card">
      <div className="card-body">
        <div className="mb-3 d-flex flex-row">
          <Avatar size="sm" />
          <textarea
            className="form-control border-0 ms-2 ps-1"
            id="postTextarea"
            rows={2}
            placeholder="What is on your mind?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="card-footer bg-transparent">
        <div className="d-flex flex-wrap justify-content-between">
          <button type="button" className="btn btn-dark rounded-pill mt-1">
            <FontAwesomeIcon className="me-2" icon={faPhotoVideo} />
            Photo/Video
          </button>
          <button
            type="button"
            className="btn btn-primary mt-1"
            onClick={() => {
              addPost(message);
              setMessage('');
            }}
            disabled={message.trim().length === 0}
          >
            Post It
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCreator;
