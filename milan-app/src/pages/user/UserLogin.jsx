import React , {useState}from "react";

function UserLogin(){

    function UserImage(){
        return(
            <div className="col-md-8 col-lg-7 col-xl-6">
                <img className="img-fluid" alt="Phone image"  style={{width:"500px"}} src="https://www.getillustrations.com/packs/plastic-illustrations-scene-builder-pack/scenes/_1x/accounts%20_%20man,%20workspace,%20desk,%20laptop,%20login,%20user_md.png"></img>
            </div>
        );
    }


    function Anchor(props){
        return(
            <div>
                <p>{props.para}<a href={props.link}>{props.details}</a></p>
            </div>
        );
        
    }

    const [credentials, setCredentials] = useState({email: "" , password:""});

    function handleChange(event){
        const {value, name} = event.target;


        setCredentials( prevValue => {
            if(name === "email"){
                return{
                    email: value,
                    password:prevValue.password
                }
            }

            else if(name === "password"){
                return{
                    email: prevValue.email,
                    password: value
                }
            }
        })
        console.log(credentials);


        
    }
    
    

        return(
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                   <UserImage />

                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form style={{width:"auto"}}  >
                            <h2 style={{letterSpacing: "1px"}}>Log In</h2>

                        <div className="form-outline mb-2 form-group">
                            <label for="exampleInputPassword1" className="col-form-label col-form-label-md">
                                Email
                            <input name= "email" className="form-control" style={{width:"300px"}} 
                                placeholder= "Enter email"
                                type= "email"
                                onChange={handleChange} >
                                
                            </input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </label>
                        </div>


                        <div className="form-outline mb-2 form-group">
                            <label for="exampleInputPassword1" className="col-form-label col-form-label-md">
                            Password
                            <input name= "password" className="form-control" style={{width:"300px"}} 
                                placeholder= "Enter password"
                                type= "password"
                                onChange={handleChange} >
                                
                            </input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </label>
                        </div>
                            
                           

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" ></input>
                                <label className="" for="exampleCheck1">Remember me</label>
                            </div>

                            <br></br>

                            <button type="submit" className="btn btn-lg btn-block" style={{backgroundColor: "#89b5f7"}}>Login</button>
                            <br></br> <br></br>

                            <Anchor para="" details="Forgot password?" link= "#" className="text-muted"/>

                            <Anchor para="Don't have an account? " details="Register here" link= "#" className="link-info"/>  
                            

                        </form>

                    </div>
                </div>

                
            </div>
        );



}

export default UserLogin;