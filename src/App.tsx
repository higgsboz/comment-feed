import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import { Post } from './types/post';

import { FeedProvider, useFeed } from './FeedContext';
import PostItem from './components/PostItem';
import Avatar from './components/Avatar';
import Me from './assets/Me.json';

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
    <div className="card shadow-sm rounded-3">
      <div className="card-body">
        <div className="mb-3 d-flex flex-row">
          <Avatar size="sm" />
          <textarea
            className="form-control border-0 ms-2 ps-1"
            id="postTextarea"
            rows={2}
            placeholder="What is on your mind?"
            style={{ resize: 'none' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="card-footer bg-transparent">
        <div className="d-flex flex-wrap justify-content-between">
          <button type="button" className="btn btn-dark rounded-pill">
            <FontAwesomeIcon className="me-2" icon={faPhotoVideo} />
            Photo/Video
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              addPost(message);
              setMessage('');
            }}
            disabled={message.length === 0}
          >
            Post It
          </button>
        </div>
      </div>
    </div>
  );
};

const Feed = function (): JSX.Element {
  const { posts } = useFeed();

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#D9E1EB' }}>
      <div className="container">
        <div className="py-3">
          <ContentCreator />
          {posts.filter((post) => !post.isDeleted).sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime()).map((post: Post) => (
            <PostItem
              key={`Post-${post.id}`}
              post={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const App = function (): JSX.Element {
  return (
    <FeedProvider>
      <Feed />
    </FeedProvider>
  );
};

export default App;
