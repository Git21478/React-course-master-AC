import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreater } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreater(text)
        props.dispatch(action)
    }

    return (
        
            <div className={s.postsBlock}>
                <h3>My posts</h3>

                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                    </div>
                        <button onClick={addPost}>Add post</button>
                </div>

                <div className={s.posts}>
                    {postElements}
                </div>

            </div>
       
    )
}

export default MyPosts;