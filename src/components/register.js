import React, { Component } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';


function Login()  {
  
const LoginSchema = Yup.object().shape({
  
  name: Yup.string().required('name is required'),
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password : Yup.string().required('password is required'),
    place: Yup.string().required('place is required')
});

const formik = useFormik({
  initialValues: {
   name: '',
    email: '',
    password:'',
    place:''
  },
  validationSchema: LoginSchema,
  onSubmit: (values) => {
    //  navigate('/', { replace: true });
    console.log(values);
  }
});

const { errors, touched,  getFieldProps , handleSubmit} = formik;


    return (
      <div className="Login">
        <h1>Register</h1>
        <form className="form" autoComplete="off"  onSubmit={handleSubmit} >
          <div className="input-group" >
            {/* <label htmlFor="email">Email</label> */}
            <input type="name"
            autoComplete="name"
            label="name"
             name="name"
              placeholder="Name" 
              {...getFieldProps('name')}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}/>
          </div>
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
          <div className="input-group" value={formik}>
            {/* <label htmlFor="password">Password</label> */}
            <input type="password"
             name="password"
             label="password"
             autoComplete="password"
              placeholder="Password" 
              {...getFieldProps('password')}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}/>
          </div>
           <div className="input-group" value={formik}>
             <input type="place"
             name="place"
             label="place"
             autoComplete="place"
              placeholder="Place" 
              {...getFieldProps('place')}
            error={Boolean(touched.place && errors.place)}
            helperText={touched.place && errors.place}/>
          </div>
          <button className="primary">Submit</button>
          <br />
<div className="abc">
          <button className="primary">Cancel</button>
          </div>
        </form>
        
      </div>
    );
  }


export default Login;
