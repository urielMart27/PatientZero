import React from "react";
import MentalHealthArticles from "../../components/mentalhealtharticles/mentalhealtharticles";
import HotlinesCrisisSupport from "../../components/hotlinesCrisisSupport/hotlinesCrisisSupport";
 

const ResourcesPage = () => {
    return (
        <div className="resources-page">
            <h1>Resources</h1>
            <MentalHealthArticles />
            <HotlinesCrisisSupport />

        </div>
    );
};

export default ResourcesPage;