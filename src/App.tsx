import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo, faHeart, faCommentDots, faEllipsisH, faMapMarkerAlt, faCircle } from '@fortawesome/free-solid-svg-icons'
import profile from './profile-pic.jpg';

interface Post {
  text: string;
  likes: number;
  comments: Comment[];
  createdDate: Date;
  createdBy: Person;
}

interface ContentCreatorProps {
  addPost: (newPost: Post) => void;
}

interface Comment {
  likes: number;
  text: string;
  createdDate: Date;
  createdBy: Person;
}

interface Person {
  firstName: string;
  lastName: string;
  occupation: string;
}

const tempPerson: Person = {
  firstName: "Brandon",
  lastName: "Minner",
  occupation: "Software Engineer"
}

const PostItem = ({text, likes, comments, createdDate, createdBy}: Post) => {
  return (
    <div className="card shadow-sm rounded-3 mt-3">
      <div className="card-body">
        <div className="d-flex flex-row mb-3">
          <img src={profile} className="rounded-circle" alt="profile" width="60" height="60"/>
          <div className="d-flex flex-row w-100 justify-content-between">
            <div className="ms-3">
              <div className="fw-bold">{`${tempPerson.firstName} ${tempPerson.lastName}`}</div>
              <div className="text-primary fw-bold" style={{fontSize: 12}}>
                <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
                OH, USA
              </div>
              <div className="text-secondary fw-bold" style={{fontSize: 12}}>1 minute ago</div>
            </div>
            <FontAwesomeIcon className="my-auto" icon={faEllipsisH} />
          </div>
        </div>
        <div>
          {text}
        </div>
        <div className="d-flex text-secondary">
          {likes} Likes
          <FontAwesomeIcon className="my-auto mx-1" icon={faCircle} style={{fontSize: 4}} /> 
          {comments.length} Comments
        </div>
      </div>
      <div className="card-footer">
        <span>
          <FontAwesomeIcon className="me-2 text-secondary" icon={faHeart} />
          <a className="text-decoration-none text-secondary">Like</a>
        </span>
        <span className="ms-3">
          <FontAwesomeIcon className="me-2 text-secondary" icon={faCommentDots} />
          <a className="text-decoration-none text-secondary">Comment</a>
        </span>
      </div>
    </div>
  )
}

const ContentCreator = (props: ContentCreatorProps) => {

  const [message, setMessage] = useState<string>("");

  const handleTextareaChange = (e: any) => {
    setMessage(e.target.value);
  }

  return (
    <div className="card shadow-sm rounded-3">
      <div className="card-body">
        <div className="mb-3 d-flex flex-row">
          <img src={profile} className="rounded-circle" alt="profile" width="40" height="40"/>
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
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-dark rounded-pill">
            <FontAwesomeIcon className="me-2" icon={faPhotoVideo} />
            Photo/Video
          </button>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => {
              props.addPost({text: message, likes: 0, comments: [], createdDate: new Date(), createdBy: tempPerson});
              setMessage("");
            }}
          >
            Post It
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {

  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div className="min-vh-100" style={{backgroundColor: "#D8E1EC"}}>
      <div className="container">
        <div className="pt-3">
          <ContentCreator addPost={(newPost: Post) => setPosts([...posts, newPost])}/>
          {posts.map((post: Post) => (
            <PostItem {...post}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
