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
      description: '',
      location: '',
      image : ''
    },

    onSubmit: async (values) => { 
      values.image = selImage;
      console.log(values);

      // sending request to backend
      const res = await fetch('http://localhost:5000/place/add', {
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
          title : 'Place Added!!',
        });
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
    <div className="container">
      <div className="item">
        <div className="contact">
         
          <img
            src="https://static.saltinourhair.com/wp-content/uploads/2019/04/23104559/travel-quote-list-instagram-post.jpg"
            alt=""
            className="image"
          />
          <div className="social links">
            <span className="secnd text p-2 fw-bold" style={{ fontSize: "large" }}>
              Social Network :
            </span>
            <ul className="social-media">
              <li>
                <a href="#">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="submit-form">
          <h4 className="third-text fw-bold">Add Place</h4>
          <form style={{ padding: "0 50px" }} onSubmit={signupForm.handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                className="input" 
                placeholder="Name"
                required=""
              />
              <label htmlFor="" />
            </div>

            <label htmlFor="">Select Location</label>
            <select className="form-control" name="location" value={signupForm.values.location} onChange={signupForm.handleChange} required>
              <option value="">Select Any</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Banglore">Banglore</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
           
           
            <div className="input-box">
              <textarea
                name="description"
                onChange={signupForm.handleChange}
                value={signupForm.values.description}
                className="input"
                placeholder="Discription"
                required=""
                cols={30}
                rows={10}
                defaultValue={""}
              />
              <label htmlFor="" />
            </div>
            <div>
            <label htmlFor="">Upload File</label>
            <input type="file" onChange={uploadFile} />
            </div>

            <button type="upload" className="Upload">
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>  
  );
};

export default Signup;