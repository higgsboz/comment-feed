import {createContext, ReactNode, useContext, useState} from 'react';

import {Comment} from './types/comment';
import {Post} from './types/post';

export type FeedContextProps = {
    posts: Post[],
    setPosts: (posts: Post[]) => void,
    comments: Comment[],
    setComments: (comments: Comment[]) => void
}

type FeedProviderProps = {
    children?: ReactNode;
}

const FeedContext = createContext<FeedContextProps>({} as FeedContextProps);

export function FeedProvider({ children }: FeedProviderProps) {
    const localPosts: Post[] = JSON.parse(localStorage.getItem('postData') || '[]');
    const localComments: Comment[] = JSON.parse(localStorage.getItem('commentData') || '[]');


    const [posts, setPosts] = useState<Post[]>(localPosts);
    const [comments, setComments] = useState<Comment[]>(localComments);

    const updatePosts = (updatedPosts: Post[]) => {
        localStorage.setItem('postData', JSON.stringify(updatedPosts));
        setPosts(updatedPosts);
    }

    const updateComments = (updatedComments: Comment[]) => {
        localStorage.setItem('commentData', JSON.stringify(updatedComments));
        setComments(updatedComments);
    }

    return (
        <FeedContext.Provider value={{posts: posts, setPosts: updatePosts, comments: comments, setComments: updateComments}}>
            {children}
        </FeedContext.Provider>
    )
}

export function useFeed() {
    const context = useContext(FeedContext);
    if(context === undefined) {
        throw new Error('useFeed must be used within a FeedProvider');
    }
    return context;
}