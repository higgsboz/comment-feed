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
    const [posts, setPosts] = useState<Post[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);

    return (
        <FeedContext.Provider value={{posts: posts, setPosts: setPosts, comments: comments, setComments: setComments}}>
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