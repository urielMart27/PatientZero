import React from "react";
import QuickAccessPanel from "../components/QuickAccessPanel";
import DailyInspiration from "../components/DailyInspiration";

const HomePage = () => {
   
    return (
        <div>
        {/*     <QuickAccessPanel 
            onMyProgressClick={handlemyProgressClick}
            onTherapyToolsClick={handleTherapyToolsClick}
            onCommunityClick={handleCommunityClick}
            onResourcesClick={handleResourcesClick}
            onChatClick={handleChatClick}
            /> */}
            <DailyInspiration quote="Daily Inspirational Quote."/>

        </div>
        
    )
}
export default HomePage;