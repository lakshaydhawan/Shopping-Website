import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import Navba from "./Navba";
import axios from "axios";
function Signup(){
  const {register,handleSubmit} = useForm();
  function myonSubmit(data){
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      },
      data:data
    };
  axios.post("http://localhost:3000/signup",config)
  .then((response) => {
    if(response.data==true){
      console.log("your account has been created");
    }
    else if(response.data=="pp"){
      console.log("enter same password");
    }
    else{
      console.log("this id already exists,please enter other id.")
    }
  }, (error) => {
    console.log(error);
  });
  }
    return(
        <>
         <div className='bg-body-tertiary' style={{height:640}}>
        <Navba/>
        <h1 style={{fontFamily: "Times New Roman"}} className='text-center mt-5'>Signup to create a new Account</h1>
        <div className=" container mt-5 ">
        <form onSubmit={handleSubmit(myonSubmit)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input {...register("email")} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input {...register("password")} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
    <input {...register("confirmpassword")} type="password" className="form-control" id="exampleInputPassword2"/>
  </div>
  <button type="submit" className="btn btn-primary mb-4">Submit</button>
</form  >
<Link to="/Login">Click here to Login</Link>
</div>  

</div>
        </>
    )
}
export default Signup;