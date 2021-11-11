import React, {
  createContext, ReactNode, useContext, useState,
} from 'react';

import { Comment } from './types/comment';
import { Post } from './types/post';

export type FeedContextProps = {
    posts: Post[],
    setPosts: (posts: Post[]) => void,
    comments: Comment[],
    setComments: (comments: Comment[]) => void
}

type FeedProviderProps = {
    children?: ReactNode;
}

// This is passed into the JSON.parse() call as the reviver so that
// dates formatted as JSON strings will be converted into JS Date objects.
// eslint-disable-next-line max-len
// This code was taken from https://weblog.west-wind.com/posts/2014/jan/06/javascript-json-date-parsing-and-real-dates
const dateParser = (_key: any, value: any): any => {
  // eslint-disable-next-line
    var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
  // eslint-disable-next-line
    var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;

  if (typeof value === 'string') {
    let a = reISO.exec(value);
    if (a) { return new Date(value); }
    a = reMsAjax.exec(value);
    if (a) {
      const b = a[1].split(/[-+,.]/);
      return new Date(b[0] ? +b[0] : 0 - +b[1]);
    }
  }
  return value;
};

const FeedContext = createContext<FeedContextProps>({} as FeedContextProps);

// eslint-disable-next-line func-names, max-len
export const FeedProvider = function ({ children }: FeedProviderProps): any {
  // eslint-disable-next-line max-len
  const localPosts: Post[] = JSON.parse(localStorage.getItem('postData') || '[]', dateParser);
  // eslint-disable-next-line max-len
  const localComments: Comment[] = JSON.parse(localStorage.getItem('commentData') || '[]', dateParser);

  const [posts, setPosts] = useState<Post[]>(localPosts);
  const [comments, setComments] = useState<Comment[]>(localComments);

  const updatePosts = (updatedPosts: Post[]): void => {
    localStorage.setItem('postData', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  const updateComments = (updatedComments: Comment[]): void => {
    localStorage.setItem('commentData', JSON.stringify(updatedComments));
    setComments(updatedComments);
  };

  // const providerValue = useMemo(() => ({
  //   posts,
  //   setPosts: updatePosts,
  //   comments,
  //   setComments: updateComments,
  // }), [posts, updatePosts, comments, updateComments]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FeedContext.Provider value={{
      posts, setPosts: updatePosts, comments, setComments: updateComments,
    }}
    >
      {children}
    </FeedContext.Provider>
  );
};

FeedProvider.defaultProps = {
  children: null,
};

export function useFeed(): FeedContextProps {
  const context = useContext(FeedContext);
  if (context === undefined) {
    throw new Error('useFeed must be used within a FeedProvider');
  }
  return context;
}
