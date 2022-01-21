import React, { Component } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {
    Route,
    Switch,
    Redirect,
    BrowserRouter,
    Router,
    Link,
  } from "react-router-dom";

function Add()  {
    const navigate = useNavigate();

    const AddSchema = Yup.object().shape({
  
        name: Yup.string().required('name is required'),
        price: Yup.string().required('Price is required'),
        quantity : Yup.string().required('quantity is required'),
          category: Yup.string().required('Category is required')
      });
      
      const formik = useFormik({
        initialValues: {
         name: '',
          price: '',
          quantity:'',
          category:''
        },
         validationSchema: AddSchema,
         onSubmit: (values) => {
        //   // navigate('/dashboard', { replace: true });
        const newProduct = {
            name: values.name,
           price: values.price,
            quantity: values.quantity,
            category: values.category,
            
          };
        //   console.log(values);
          console.log(newProduct,"vaa");
          axios.post('http://localhost:4000/products/add', newProduct).then((res) => console.log(res.data));
        navigate('/list', { replace: true });
         }
      });
      
      const { errors, touched,  getFieldProps , handleSubmit } = formik;
      

    
// const { errors, touched,  getFieldProps } = formik;
   return (
      <div className="Login">
       
        <form className="form" autoComplete="off"  onSubmit={handleSubmit}>
          <div className="input-group" >
            {/* <label htmlFor="email">Email</label> */}
            <input type="name"
            autoComplete="name"
             name="name"
              placeholder="Name" 
              label="name"
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
              />
          </div>
          <div className="input-group" >
            {/* <label htmlFor="password">Password</label> */}
            <input type="price"
             name="price"
             autoComplete="price"
              placeholder="Price" 
              label="price"
              {...getFieldProps('price')}
              error={Boolean(touched.price && errors.price)}
              helperText={touched.price && errors.price}
             />
            </div>
            <div className="input-group">
             <input type="quantity"
             name="quantity"
             autoComplete="quantity"
              placeholder="Quantity"
              label="quantity"
              {...getFieldProps('quantity')}
              error={Boolean(touched.quantity && errors.quantity)}
              helperText={touched.quantity && errors.quantity} 
             />
           </div>
           <div className="input-group">
             <input type="category"
             name="category"
             autoComplete="category"
             label="category"
              placeholder="Category" 
              {...getFieldProps('category')}
              error={Boolean(touched.category && errors.category)}
              helperText={touched.category && errors.category} 
             />
          </div>
          <button className="primary">Add</button>
    {/* <Link to="/list"> <button className="primary">Add</button></Link> */}
         
        </form>
        
      </div>
    );
  }


export default Add;
