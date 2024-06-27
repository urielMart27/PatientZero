import React from "react";
import { useNavigate, Link } from "react-router-dom";


const QuickAccessPanel = () => {
    return (
        <div>
            <h2>Quick Access Panel</h2>
            <Link to="/myprogress">
             <button>My Progress</button>
             </Link>
           {/* <button on onClick={onTherapyToolsClick}>Therapy Tools</button>
            {onCommunityClick && <button onClick={onCommunityClick}>Community</button>}
            <button on onClick={onResourcesClick}>Resources</button>
            {onChatClick && <button onClick={onChatClick}>Chat</button>} */}


        </div>
    );
};
export default QuickAccessPanel;