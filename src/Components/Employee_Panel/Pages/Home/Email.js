import React from 'react'
import { Link } from 'react-router-dom'
import "./EmailStyle.css";

function Email() {
  return (
    <>
    <p className="text-email">E-mails</p>
         <div className="Email">
              <Link to="/email">
              <input type="button" value="View All" className="email-btn"/>
              </Link>
         </div>

    </>
  )
}

export default Email