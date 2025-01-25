import React, { useState, useEffect } from 'react'
import "./AddPost.css"
import toast, { Toaster } from 'react-hot-toast';
import Sidebar from '../../components/Sidebar/Sidebar';
import addPostImg from "./add-job-img.png"

function Add() {
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [location, setLocation] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [salaryMin, setSalaryMin] = useState("");
    const [salaryMax, setSalaryMax] = useState("");
    const [applicationDeadline, setApplicationDeadline] = useState("");
    const [companyName, setCompanyName] = useState("");

    const addPost = () => {

        if (!jobTitle || !jobDescription || !employmentType || !companyName) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const postData = JSON.parse(localStorage.getItem("postData")) || [];

        const postDataObject = {
            jobTitle,
            jobDescription,
            location,
            employmentType,
            salaryMin,
            salaryMax,
            applicationDeadline,
            companyName,
        };

        postData.push(postDataObject);

        localStorage.setItem("postData", JSON.stringify(postData));

        toast.success("Post added successfully");

        setJobTitle("");
        setJobDescription("");
        setLocation("");
        setEmploymentType("");
        setSalaryMin("");
        setSalaryMax("");
        setApplicationDeadline("");
        setCompanyName("");
    };

    return (
        <div className='ctnt'>
            <Sidebar />
            <div >
                <h2 className=' add-post-heading'>Add Job Post</h2>
                <p className='add-post-sub-heading'>"Create and Publish Your New Job Opening"</p>
            </div>

            <div className="job-post-container">

                <div className='img-cont'>
                    <img src={addPostImg} alt='addPostImg' className='add-post-img' />
                </div>

                <div className="job-post-card">
                    <form>
                        <label>Job Title</label>
                        <input
                            className='post-input'
                            type="text"
                            name="jobTitle"
                            value={jobTitle}
                            onChange={(e) => {
                                setJobTitle(e.target.value);
                            }}
                            required
                            placeholder='Web-Developer'
                        />


                        <label>Job Description</label>
                        <textarea
                            className='post-input desc-inpt'
                            name="jobDescription"
                            value={jobDescription}
                            onChange={(e) => {
                                setJobDescription(e.target.value);
                            }}
                            required
                            placeholder='about job title'
                        />

                        <label>Location</label>
                        <input
                            className='post-input'
                            type="text"
                            name="location"
                            value={location}
                            onChange={(e) => {
                                setLocation(e.target.value);
                            }}
                            placeholder='Pune'
                        />

                        <label>Employment Type</label>
                        <select
                            className='post-input'
                            name="employmentType"
                            value={employmentType}
                            onChange={(e) => {
                                setEmploymentType(e.target.value);
                            }}
                            required
                        >
                            <option value="">Select</option>
                            <option value="full-time">Full-Time</option>
                            <option value="part-time">Part-Time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                        </select>


                        <label>Salary Range</label>
                        <div className="salary-range">
                            <input
                                className='post-input'
                                type="number"
                                name="salaryMin"
                                value={salaryMin}
                                onChange={(e) => {
                                    setSalaryMin(e.target.value);
                                }}
                                placeholder="Min"
                            />
                            <span>-</span>
                            <input
                                className='post-input'
                                type="number"
                                name="salaryMax"
                                value={salaryMax}
                                onChange={(e) => {
                                    setSalaryMax(e.target.value);
                                }}
                                placeholder="Max"
                            />
                        </div>

                        <label>Application Deadline</label>
                        <input
                            className='post-input'
                            type="date"
                            name="applicationDeadline"
                            value={applicationDeadline}
                            onChange={(e) => {
                                setApplicationDeadline(e.target.value);
                            }}
                        />

                        <label>Company Name</label>
                        <input
                            className='post-input'
                            type="text"
                            name="companyName"
                            value={companyName}
                            onChange={(e) => {
                                setCompanyName(e.target.value);
                            }}
                            required
                            placeholder='Road To Code'
                        />

                        <button
                            type="submit"
                            onClick={addPost}
                            className="submit-btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className='Show'>

            </div>
        </div>

    );
};

export default Add;
