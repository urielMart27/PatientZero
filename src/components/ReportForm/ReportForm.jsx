import React, { useState } from "react";

const ReportForm = () => {
    const [report, setReport] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Report submitted: ' + report);
        setReport('');
    };

    return (
        <div>
            <h2>Report Inappropriate Content</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                value={report}
                onChange={(e) => setReport(e.target.value)}
                placeholder="Describe the Issue..."
                rows="4"
                required
                />
                <br />
                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default ReportForm;