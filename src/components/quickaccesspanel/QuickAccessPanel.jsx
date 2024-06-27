import React from "react";
import { useNavigate, Link } from "react-router-dom";


const QuickAccessPanel = () => {
    return (
        <div>
            <h2>Quick Access Panel</h2>
            <Link to="/myprogress">
             <button>My Progress</button>
             </Link>
             <Link to="/myprogress">
             <button>Therapy Tools</button>
             </Link>
             <Link to="/myprogress">
             <button>Community</button>
             </Link>
             <Link to="/myprogress">
             <button>Resources</button>
             </Link>
             <Link to="/myprogress">
             <button>Chat</button>
             </Link>
    
        </div>
    );
};
export default QuickAccessPanel;