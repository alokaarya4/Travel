import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {

  const navigate = useNavigate();

  const [selImage, setSelImage] = useState('');

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },

    onSubmit: async (values) => { 
      values.avatar = selImage;
      console.log(values);

      // sending request to backend
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body : JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Signup Success!!',
          text: 'Now Login to Continue'
        });
        navigate('/login');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
        });
      }
    }
  })

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);
  };

  return (
    <div className="bg-g">
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          
          <h2 className="text-center my-5">Signup</h2>
          <form onSubmit={signupForm.handleSubmit}>
            <label htmlFor="">Name</label>
            <input className="form-control mb-4 rounded-5" type="text" name="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-5" type="email" name="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-5" type="password" name="password" onChange={signupForm.handleChange}  value={signupForm.values.password} />
            
            

            <button className="btn btn-danger w-100 mt-4 rounded-5">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;