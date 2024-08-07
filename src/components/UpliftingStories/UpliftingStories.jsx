import React from "react";

const stories = [
    { id: 1, content: 'I have been feeling much better since I started therapy. It has changed my life.'},
    { id: 2, content: 'Meditation and mindfulness have helped me cope with anxiety. I highly recommend it.'},
    { id: 3, content: 'Sharing my experiences here has made me feel less alone. Thank you all.'},
];

const UpliftingStories = () => {
    return (
        <div>
            <h2>Uplifting Stories</h2>
            <ul>
                {stories.map((story) => (
                    <li key={story.id}>{story.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default UpliftingStories;