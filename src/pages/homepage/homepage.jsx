import React from "react";
import DailyInspiration from "../../components/dailyinspiration/DailyInspiration";
import MyProgressPage from "../myprogresspage/myprogresspage";
import QuickAccessPanel from "../../components/quickaccesspanel/QuickAccessPanel"
import { useNavigate, Link } from "react-router-dom";


const HomePage = () => {
   
    return (
        <div>
            <QuickAccessPanel 
           // onTherapyToolsClick={handleTherapyToolsClick}
           // onCommunityClick={handleCommunityClick}
            //onResourcesClick={handleResourcesClick}
            //onChatClick={handleChatClick}
            />
            <DailyInspiration quote="Daily Inspirational Quote."/>

        </div>
        
    )
}
export default HomePage;