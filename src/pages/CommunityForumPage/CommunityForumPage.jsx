import React from "react";
import UpliftingStories from "../../components/UpliftingStories/UpliftingStories";
import ReportForm from "../../components/ReportForm/ReportForm";

const CommunityForum = () => {
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
    </div>
            <UpliftingStories />
            <ReportForm />
        </div>
    );
};

export default CommunityForum;