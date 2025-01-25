import React from "react";
import './RecuriterProfile.css';
import Form from '../.././components/Form/Form.js';
import Sidebar from '../../components/Sidebar/Sidebar.js';


const RecuriterProfile = () => {

    return (
        <>
            <div className="main">
                <Sidebar />
                <div className="frm-heading">
                    <p className="liner-text main-heading">Profile settings</p>
                    <p className="sub-heading">You can set perfect display name,create your profile URL and Manage other personal settings.</p>
                </div>

                <div className="frm">
                    <Form />
                </div>

                <div className="Show">

                </div>
            </div>
        </>
    )

}

export default RecuriterProfile;