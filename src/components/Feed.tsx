import React from 'react';
import { useFeed } from '../contexts/FeedContext';
import { Post } from '../types/post';
import PostItem from './PostItem';
import ContentCreator from './ContentCreator';

const Feed = function (): JSX.Element {
  const { posts } = useFeed();

  return (
    <div className="main-bg min-vh-100">
      <div className="container-sm">
        <div className="py-3">
          <ContentCreator />
          {posts
            .filter((post) => !post.isDeleted)
            .sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime())
            .map((post: Post) => (
              <PostItem key={`Post-${post.id}`} post={post} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
