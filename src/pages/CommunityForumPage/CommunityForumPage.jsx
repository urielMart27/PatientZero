import React, { useEffect } from "react";
import axios from "axios";
import UpliftingStories from "../../components/UpliftingStories/UpliftingStories";
import ReportForm from "../../components/ReportForm/ReportForm";
import { useState } from "react";
import defaultprofilepic from "../../images/defaultprofilepic.webp";
import "../CommunityForumPage/CommunityForumPage.css"

const CommunityForum = () => {
    const [posts, setPosts] = useState([]);
    const [postContent, setPostContent] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/forum_posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/forum_posts', { post_content: postContent });
            setPostContent('');
            // Refresh the posts list after adding a new post
            const response = await axios.get('http://localhost:5000/api/forum_posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    };
        
    return (
        <div>
            <h1>Community Forum</h1>
            <div>
            <h2>Forum Guidelines</h2>
            <ul>
               <li>Be respectful and supportive.</li>
               <li>No personal attacks or insults.</li>
                <li>Keep discussions relevant to mental health and well-being.</li>
             <li>Do not share personal information.</li>
             <li>Report inappropriate content to moderators.</li>
             </ul>
             <form onSubmit={handleSubmit}>
                <textarea 
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    rows="4"
                    cols="50"
                    placeholder="Write your post here..."
                    required                    
                    />
                    <button type="submit">Post</button>
                    <h2>Uplifting Stories</h2>
             </form>
             <div className="posts-container">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <img src= {defaultprofilepic} alt="Profile" className="profile-pic" />
                            <span className="username">Anonymous</span>
                            <span className="post-date">{new Date(post.timestamp).toLocaleDateString()}</span>
                        </div>
                        <div className="post-content">
                            {post.post_content}
                        </div>
                    </div>
                ))}

             </div>
    </div>
            <ReportForm />
        </div>
    );
};

export default CommunityForum;