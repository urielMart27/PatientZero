import React from "react";

const MentalHealthArticles = () => {
    const articles = [
        {
            title: "Understanding Depression",
            source: "Psychology Today",
            date: "November 10, 2017",
            summary: "The article highlights the widespread prevalence and profound impact of clinical depression in the US, underscoring the necessity of medical treatments like medication, ECT, TMS, and CBT.",
            link: "https://www.psychologytoday.com/us/blog/think-well/201711/understanding-depression"
        },
        {
            title: "Bipolar Disorder",
            source: "National Alliance on Mental Illness (NAMI)",
            date: "Reviewed on August, 2017",
            summary: "Dr. Ken Duckworth from NAMI hosts a podcast series on bipolar disorder, offering insights from individuals, family members, and mental health professionals, covering its complexities and management, including discussions on sensitive topics like suicide attempts.",
            link: "https://www.nami.org/about-mental-illness/mental-health-conditions/bipolar-disorder/"
        },

    ];

    return (
        <div className="mental-health-articles">
            <h2>Mental Health Articles</h2>

            {articles.map((article, index) => (
                <div key={index} className="article">
                    <h3><a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
                    <p><strong>Source:</strong> {article.source}</p>
                    <p><strong>Date:</strong> {article.date}</p>
                    <p>{article.summary}</p>

                </div>
            ))}
        </div>
    );
};

export default MentalHealthArticles;