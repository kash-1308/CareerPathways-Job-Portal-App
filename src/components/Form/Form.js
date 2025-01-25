import React, { useState } from "react";
import './Form.css';
// import toast from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [degree, setDegree] = useState('');
    const [institude, setInstitude] = useState('');
    const [mno, setMobile] = useState('');
    const [exp, setExperiance] = useState('');
    const [expertise, setExpertise] = useState('');
    const [company, setCompany] = useState('');
    const [job, setJob] = useState('');
    const [desc, setDecriptions] = useState('');
    const [keyskill, setkeyskill] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [gender, setGender] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    async function Add(e) {
        if (name == " " || email == " " || degree == "" || institude == "" || exp == "" || mno == "" || expertise == " " || desc == " " || company == " " || job == " " || keyskill == " " || linkedIn == " " || gender == " ") {


            toast.warn('Please Enter All Details', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: "Zoom",
            });
        }
        else {

            const items = JSON.parse(localStorage.getItem("items")) || [];

            const itmsobj = {
                name,
                email,
                degree,
                institude,
                exp,
                mno,
                expertise,
                desc,
                company,
                job,
                keyskill,
                linkedIn,
                gender
            }

            items.push(itmsobj);

            localStorage.setItem("items", JSON.stringify(items));

            e.preventDefault();
            setIsLoading(true);

            await new Promise(res => setTimeout(res, 3000));

            setIsLoading(false);

            toast.success("Form Sbmitted!!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: 'Zoom',
            });

            setName('');
            setEmail('');
            setDegree('');
            setInstitude('');
            setExperiance('');
            setExpertise('');
            setMobile('');
            setDecriptions('');
            setCompany('');
            setJob('');
            setkeyskill('');
            setLinkedIn('');
            setGender('');

        }
    }



    return (
        <>
            <form className="frm-main" >
                <div className="frm-holder">
                    <div className="frm-content">

                        <div className="right">

                            <div className="input-gup">
                                <label for="name" className="input-label">Full Name</label>
                                <input type="text" id="name"
                                    className="input-field"
                                    placeholder="e.g John Hardi"
                                    required
                                    onChange={(e) => { setName(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="email" className="input-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="input-field"
                                    placeholder="Email id"
                                    required
                                    onChange={(e) => { setEmail(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label className="input-label">Selected Gender </label>

                                <input type="radio" name="gender" value="male"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setGender(e.target.value)
                                        }
                                    }}
                                    checked={gender === "male"} /><span className="radio-font">Male</span>

                                <br />


                                <input type="radio" name="gender" value="female"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setGender(e.target.value)
                                        }
                                    }}
                                    checked={gender === "female"} /><span className="radio-font">Female</span>

                            </div>

                            <div className="input-gup">
                                <label for="number" className="input-label">Mobile No.</label>
                                <input
                                    type="number"
                                    id="number"
                                    className="input-field"
                                    placeholder="+91 1254976843"
                                    required
                                    onChange={(e) => { setMobile(e.target.value) }} />

                            </div>

                            <div className="input-gup">
                                <label for="company" className="input-label">Company Name</label>
                                <input type="text" id="company" className="input-field" placeholder="Enter Company Name" required onChange={(e) => { setCompany(e.target.value) }} />
                            </div>


                            <div className="input-gup">
                                <label for="job" className="input-label">Job Title</label>
                                <input
                                    type="text"
                                    id="job"
                                    className="input-field"
                                    placeholder="Enter Job Title"
                                    required
                                    onChange={(e) => { setJob(e.target.value) }} />
                            </div>


                            <div className="input-gup">
                                <label for="degre" className="input-label">Degress Obtained</label>
                                <input type="text" id="degre" className="input-field" placeholder="Enter Degree" required onChange={(e) => { setDegree(e.target.value) }} />
                            </div>
                        </div>

                        <div className="left">

                            <div className="input-gup">
                                <label for="institude" className="input-label">Institutions Attended</label>
                                <input type="text" id="institude" className="input-field" placeholder="Enter Institutions Attended" required onChange={(e) => { setInstitude(e.target.value) }} />
                            </div>

                            <div className="input-gup" >
                                <label for="exp" className="input-label">Recuriter's Exp.</label>
                                <input type="number" id="exp" className="input-field" placeholder="Enter Recuriter Experiance" required onChange={(e) => { setExperiance(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="link" className="input-label">LinkedIn Profile</label>
                                <input
                                    type="text"
                                    id="link"
                                    className="input-field"
                                    placeholder="Enter Link Of Profile"
                                    required
                                    onChange={(e) => { setLinkedIn(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="skill" className="input-label">Enter Key Skills</label>
                                <input
                                    type="text"
                                    id="skill"
                                    className="input-field"
                                    placeholder="Enter Skills"
                                    required
                                    onChange={(e) => { setkeyskill(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="exper" className="input-label">Expertise</label>
                                <input type="text" id="exper" className="input-field" required placeholder="Expertise" onChange={(e) => { setExpertise(e.target.value) }} />
                            </div>


                            <div className="input-gup">
                                <label for="text" className="input-label">Company Descriptions </label>
                                <textarea
                                    // rows={4}
                                    className="textArea"
                                    id="text"
                                    placeholder="Enter Details Of Company..."
                                    required
                                    onChange={(e) => { setDecriptions(e.target.value) }}>

                                </textarea>
                            </div>
                        </div>

                    </div>

                    <div className="btn-gup center">
                        <button
                            className="btn"
                            onClick={Add}
                            disabled={isLoading} >
                            {isLoading ? "Submitting..." : "Submit"}

                        </button>

                        <Link to="/recuiter-profile-card" className="linktag">
                            <button className="btn" >Show Profile</button>
                        </Link>
                    </div>
                </div>
            </form>

            <ToastContainer />
        </>
    )

}

export default Form;