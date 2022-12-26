import React from 'react'

function Location() {
    var latitude = "51.501545070000000";
var longitude = "-0.184810405000000";
var zoomlevel = "18z";

var url3="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15741.61832932572!2d"+ latitude +"!3d" + longitude + "!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf85d5a9c21d%3A0xa3062c58f8f3bdb!2sAyya%20Nadar%20Janaki%20Ammal%20College!5e0!3m2!1sen!2sin!4v1667891145133!5m2!1sen!2sin";

  return (
    <div>
        <iframe src={url3} width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Location