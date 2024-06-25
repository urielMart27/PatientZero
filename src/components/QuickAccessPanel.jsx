import React from "react";

const QuickAccessPanel = ({onMyProgressClick, onTherapyToolsClick, onCommunityClick, onResourcesClick, onChatClick}) => {
    return (
        <div>
            <h2>Quick Access Panel</h2>
            <button on onClick={onMyProgressClick}>My Progress</button>
            <button on onClick={onTherapyToolsClick}>Therapy Tools</button>
            {onCommunityClick && <button onClick={onCommunityClick}>Community</button>}
            <button on onClick={onResourcesClick}>Resources</button>
            {onChatClick && <button onClick={onChatClick}>Chat</button>}


        </div>
    );
};
export default QuickAccessPanel;