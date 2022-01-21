import React, { Component } from "react";
import { useFormik , FormikProvider ,Form} from 'formik';
import * as Yup from 'yup';
 import { useNavigate } from 'react-router-dom';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
  Router,
  Link,
} from "react-router-dom";


function Login()  {
   const navigate = useNavigate();
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

const formik = useFormik({
  initialValues: {
   email: '',
    password: ''
  },
  validationSchema: LoginSchema,
  onSubmit: (values) => {
   
      navigate('/add', { replace: true });
  }
});

const { errors, touched,  getFieldProps ,handleSubmit } = formik;


    return (
      <div className="Login">
         <h1>Login</h1>
        <form className="form" autoComplete="off"  onSubmit={handleSubmit} >
          <div className="input-group" >
            {/* <label htmlFor="email">Email</label> */}
            <input type="email"
            autoComplete="email"
             name="email"
             label="email"
              placeholder="Email" 
              {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}/>
          </div>
          <div className="input-group" >
            {/* <label htmlFor="password">Password</label> */}
            <input type="password"
             name="password"
             autoComplete="password"
              placeholder="Password" 
              label="password"
              {...formik.getFieldProps('password')}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}/>
          </div>
 <button className="primary">Submit</button>  
          <br/>
          <div className="abc">
   <Link to="register"><button id="btn"  className="primary" >Registeration</button></Link>
   </div>
   {/* <button id="btn"  className="primary" >submit</button> */}
        </form>
         
      </div>
    );
  }


export default Login;



