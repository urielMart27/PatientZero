import React from "react";
import DailyInspiration from "../../components/dailyinspiration/DailyInspiration";
import QuickAccessPanel from "../../components/quickaccesspanel/QuickAccessPanel"


const HomePage = () => {

    const quotes = [
        '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
        '"The only way to do great work is to love what you do." - Steve Jobs',
        '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill'
    ]
   
    return (
        <div>
            <QuickAccessPanel 
           // onTherapyToolsClick={handleTherapyToolsClick}
           // onCommunityClick={handleCommunityClick}
            //onResourcesClick={handleResourcesClick}
            //onChatClick={handleChatClick}
            />
            <DailyInspiration quotes={quotes}/>

        </div>
        
    )
}
export default HomePage;