import React from 'react';
import Two from "./Two"
function One() {
    let emp=[{"id":1,"first_name":"Gert","email":"gbarron0@joomla.org"},
    {"id":2,"first_name":"Nichols","email":"nwalch1@hud.gov"},
    {"id":3,"first_name":"Wendell","email":"wloffhead2@myspace.com"},
    {"id":4,"first_name":"Bonny","email":"bqualtro3@dropbox.com"},
    {"id":5,"first_name":"Jacquelin","email":"jbrychan4@goo.gl"},
    {"id":6,"first_name":"Bard","email":"bpuzey5@cdbaby.com"},
    {"id":7,"first_name":"Yuma","email":"ymcowis6@php.net"},
    {"id":8,"first_name":"Hugo","email":"hmccormick7@ebay.co.uk"},
    {"id":9,"first_name":"Myrilla","email":"mwhiteland8@weebly.com"},
    {"id":10,"first_name":"Chelsie","email":"ccasse9xaminer.com"}]
  return <div>
        <Two Employee={emp}/>
  </div>;
}

export default One;
