import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import profilePicture from './assets/profile-pic.jpg';
import {Person} from './types/person';
import {Post} from './types/post';

import {FeedProvider, useFeed} from './FeedContext';
import PostItem from './components/PostItem';

const tempPerson: Person = {
  firstName: "Brandon",
  lastName: "Minner",
  occupation: "Software Engineer"
}

const ContentCreator = () => {

  const {posts, setPosts} = useFeed();

  const addPost = (text: string) => {
    const newPost = {
      id: posts.length + 1,
      text: text,
      likes: 0,
      createdDate: new Date(),
      createdBy: tempPerson,
      isDeleted: false
    }
    setPosts([...posts, newPost])
  } 

  const [message, setMessage] = useState<string>("");

  const handleTextareaChange = (e: any) => {
    setMessage(e.target.value);
  }

  return (
    <div className="card shadow-sm rounded-3">
      <div className="card-body">
        <div className="mb-3 d-flex flex-row">
          <img src={profilePicture} className="rounded-circle" alt="profile" width="40" height="40"/>
          <textarea 
            className="form-control border-0" 
            id="postTextarea" 
            rows={2} 
            placeholder="What is on your mind?" 
            style={{resize: 'none'}}
            value={message}
            onChange={handleTextareaChange}
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
              setMessage("");
            }}
            disabled={message.length === 0}
          >
            Post It
          </button>
        </div>
      </div>
    </div>
  )
}

const Feed = () => {
  const {posts} = useFeed();

  return (
    <div className="min-vh-100" style={{backgroundColor: "#D9E1EB"}}>
      <div className="container">
        <div className="py-3">
          <ContentCreator />
          {posts.filter(post => !post.isDeleted).map((post: Post) => (
            <PostItem 
              key={`Post-${post.id}`} 
              details={{...post}}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <FeedProvider>
      <Feed />
    </FeedProvider>
  );
}

export default App;
