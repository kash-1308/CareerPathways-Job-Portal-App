import React, { useState } from 'react'

import "./ViewJobCards.css"

function removePost(index) {
    const savedJobDetails = JSON.parse(localStorage.getItem("postData")) || [];
    savedJobDetails.splice(index, 1);
    localStorage.setItem("postData", JSON.stringify(savedJobDetails));

    window.location.reload()
}

function EmploymentType({ employmentType }) {
    const EMPTYPE_EMOJIS = {
        "full-time": "⏱️",
        "part-time": "⌛",
        "contract": "🗒️",
        "internship": "🎓"
    }

    const formattedEmpType = employmentType.charAt(0).toUpperCase() + employmentType.slice(1).toLowerCase();

    return (
        <div>
            <span className='emp-type-emoji'>
                {EMPTYPE_EMOJIS[employmentType]}
            </span>
            {formattedEmpType}
        </div>
    )
}



function ViewJobCards({ index,
    jobTitle,
    jobDescription,
    location,
    employmentType,
    salaryMin,
    salaryMax,
    applicationDeadline,
    companyName,
    onRemove
}) 
{ 
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = ()=>{
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='job-post-cards'>

            <div className='comp-name-cont'>
                <span className='job-intial-logo'>{companyName.charAt(0)}</span>
                <h2 className='comp-name'>{companyName}
                    <div className='job-location'>📍{location} </div>
                </h2>
            </div>

            <div className='post-content'>
                <div className='title-content'>
                    <h4 className='job-post-title'>
                        {jobTitle}
                    </h4>
                    <p className='job-post-decription'>
                        {isExpanded? jobDescription: `${jobDescription.slice(0,200)}...`}
                        <button className='read-more-btn' onClick={toggleDescription}>
                            {isExpanded?"Read Less":"Read More"}
                        </button>
                    </p>
                </div>
                <div className='employmentType'>
                    <EmploymentType employmentType={employmentType}
                    />
                </div>

                <div className='salary-cont'>
                    <div><b>Min-salary:</b> {salaryMin}</div>
                    <div><b>Max-salary:</b> {salaryMax}</div>
                </div>
                <div>
                    <div><b>Application Deadline:</b> {applicationDeadline}</div>
                </div>
            </div>

            <button className='rmv-btn'
                onClick={() => {
                    onRemove(index);
                }}>
                Remove
            </button>

        </div>
    )
}

export default ViewJobCards