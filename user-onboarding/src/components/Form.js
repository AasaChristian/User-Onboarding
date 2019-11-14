import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Form = () => {






    return(

       <div className="formClass">
           <Form>
               <Field
                type="text"
                name="name"
                placeholder="name"
               />
               <Field
                type="text"
                name="email"
                placeholder="email"
               />
               <Field
                type="password"
                name="password"
                placeholder="password"
               />
               <label className="checkboxClass">
                   Please Except Our Terms
                <Field
                type="checkbox"
                name="terms"
                checked={}
               />   
               </label>
               
           </Form>
       </div> 
    )
}