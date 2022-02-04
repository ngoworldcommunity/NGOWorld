import axios from 'axios';
import React,{ Component } from "react/cjs/react.production.min";
import '../styles/ClubForm.css'

class Picupload extends Component{
state = {
 
    // Initially, no file is selected
    selectedFile: null
  };
  
  // On file select (from the pop up)
  onFileChange = event => {
  
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  
  };
  
  // On file upload (click the upload button)
  onFileUpload = () => {
  
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);
  
    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };
  
  // File content to be displayed after
  // file upload is complete
  fileData = () => {
  
    if (this.state.selectedFile) {
       
      return (
        <div>
          <h2>File Details:</h2>
           
<p>File Name: {this.state.selectedFile.name}</p>

           
<p>File Type: {this.state.selectedFile.type}</p>

           
<p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>

        </div>
      );
    } else {
      return (
        <div>
          
          <h4></h4>
        </div>
      );
    }
  };
  
  render() {
  
    return (
      <div className='logo'>
      <br />
          <h4>
            Club Logo
          </h4>
          <p>
            Upload logo pic
          </p>
          <div>
              <input type="file" onChange={this.onFileChange} />
              <button onClick={this.onFileUpload} class="btn btn-primary">
                Upload!
              </button>
          </div>
        {this.fileData()}
      </div>
    );
  }
}
export default Picupload