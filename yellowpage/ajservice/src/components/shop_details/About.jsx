import React from 'react'

function About(props) {
  return (
    <div><h1>About</h1>
    <div className='about_titles'>
    <h6>Business name:{props.businessname}sf</h6>
    <h6>Owner name:</h6>
    <h6>Address:</h6>
    <h6>Working Hours:</h6>
    <h6>Working Days:</h6>
    <h6>Description:</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque ex incidunt optio eaque! Exercitationem distinctio a inventore ad voluptate aliquam, ea quae. Quis quasi suscipit excepturi inventore repellat assumenda.</p>
    </div>
    </div>
  )
}

export default About