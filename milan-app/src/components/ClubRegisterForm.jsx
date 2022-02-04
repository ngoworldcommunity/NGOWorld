import React from "react";
import "../styles/ClubForm.css";
import Picupload from "./PicUpload";
import Textareademo from "./TextArea";
const photo = require('../assets/pictures/clubReg.png')

//You need to have Club Name , Club ID ,Password, Club Location , Club Description , Club Logo
const ClubForm = () => {
 
return(
   
    <>
   
          
      
                <div className="container" >
                <div className="clubPic">
        <img src={photo} alt="logopic"></img>
    </div>
   <div className="content">
                    <h2 >Register</h2>
                    <br /> 
                    <div >
                        <label for="clubName" >Club Name</label> <br />
                        <input type="text"  id="clubName"  placeholder="Club Name"></input>
                      <br />
                      </div>
                      <div >
                        <label for="clubid" >Club ID</label> <br />
                        <input type="text"  id="clubid"  placeholder="Club ID"></input>
                      <br />
                      </div>
                      <div >
                        <label for="exampleInputPassword1" >Password</label><br />
                        <input type="password" id="exampleInputPassword1" placeholder="Password"></input>
                     <br/>
                      </div>
                      <div >
                        <label for="clubLocation" >Club Location</label> <br />
                        <input type="text"  id="clubLocation"  placeholder="Club Location"></input>
                      <br />
                      <div >
                        <input type="checkbox"  id="exampleCheck1"></input>
                        <label  for="exampleCheck1">Remember me</label>
                        <br />
                      </div>
                      <label for="clubDesc">Club Description</label>
                      <Textareademo />
                     <Picupload />
                      <button type="submit" class="btn btn-primary"  >Register</button>
                   
                    
                   </div>
                     
            </div>
           </div>
                  
            </>
   
      

)

}

export default ClubForm;