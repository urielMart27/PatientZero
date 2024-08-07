import React from "react";
import MentalHealthArticles from "../../components/mentalhealtharticles/mentalhealtharticles";
import HotlinesCrisisSupport from "../../components/hotlinesCrisisSupport/hotlinesCrisisSupport";
import ConditionInfo from "../../components/conditionInfo/conditionInfo"; 
import SupportLinks from "../../components/supportLinks/supportLinks";

const ResourcesPage = () => {
    return (
        <div className="resources-page">
            <h1>Resources</h1>
            <MentalHealthArticles />
            <HotlinesCrisisSupport />
            <ConditionInfo />
            <SupportLinks />


        </div>
    );
};

export default ResourcesPage;