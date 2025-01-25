import React from 'react'
import '../../components/UserProfilecards/UserProfileCard.css'
function UserProfilecards({title,description,salary_max,salary_min,company,location}) {
  return (
    <div className='JobCard'>
    <span><b>Title :</b> {title}</span>
    <br></br>
    <span><b>Description :</b> {description}</span>
    <br></br>
    <span><b>Salary Max :</b> {salary_max}</span>
    <br></br>
    <span><b>Salary Min :</b> {salary_min}</span>
    <br></br>
    <span><b>Company :</b> {company.display_name}</span>
    <br></br>
    <span><b>Location :</b> {location.display_name}</span>
    </div>
  )
}

export default UserProfilecards