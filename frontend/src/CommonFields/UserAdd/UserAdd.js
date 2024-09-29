import React from "react";
import "./UserAdd.css";
import CommonInputField from "../Input/CommonInputField";
// import InfoDes from "../../../GlobalComponent/InfoDes/InfoDes";
const UserAdd = () => {
  return (
    <div className="border rounded acs-useradd">
      <div className="note-div">
        {/* <InfoDes
          title="You can
        manage the User Account here who can use &amp; operate the CRM"
        /> */}
        <div className="note-sec-style">
          <u>Imp Suggession</u> : Create Users as per Designation not as per
          Person Name. As Staff may change periodically. Ex. manager, staff1,
          user2 etc.
        </div>
      </div>

      <form action="/submit_form" method="post">
        <div className="input-form">
          <CommonInputField
           field="input"
            label="Login / User Name *"
            placeholder="please enter name..."
          />
          <CommonInputField
            label="Password*"
             field="input"
            placeholder="please enter password..."
          />
          <CommonInputField
            label="Correct Password*"
             field="input"
            placeholder="please enter correct password..."
          />
        </div>
      </form>

      <div className="button">
        <button className="btn1">Save</button>
        <button className="btn2">Cancel</button>
      </div>
      <p>
        <div  className="note-sec-style-2"> 
          <u>Imp suggestion</u>&nbsp;: After creating User -&gt; Give user
          Rights to User.
          <p>
            Click on 3rd Option "Set User Rights" in Action column. User can see
            the features for which they have given Access.
          </p>
        </div>
      </p>
    </div>
  );
};

export default UserAdd;
