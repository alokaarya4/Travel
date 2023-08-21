import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-bg'>

      <marquee width="90%" direction="right" height="210px" scrollamount="20">
        <h2 className='text-center fw-bold text-warning p-3 display-3'>Welcome To</h2>
        <h1 className='text-center fw-bold text-success display-2'>Orrisa</h1>
      </marquee>



      <div className="carousel-inner">
        <img
          src="https://www.theindiatourism.com/images/Odisha-tour.jpg"
          className="d-block w-100"
          alt="banner of orrisa"
        />
      </div>



      <div className="text-center mt-5">
        <p className="display-4 text-black fw-bold class mytitle">
          Top Places in Orrisa
        </p>
        <input type="text" className="form-control  w-75 mx-auto myinput" />
        <button className="btn btn-danger mt-3 mybtn">
          Search Place
        </button>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bird_view_of_Jagannath_Temple%2C_Puri.jpg/600px-Bird_view_of_Jagannath_Temple%2C_Puri.jpg" className="card-img-top my-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Puri</h5>
                <p className="card-text">
                  The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu – one of the trinity of supreme divinity in Hinduism.
                </p>
                <Link to="/viewplace/Delhi" className="btn btn-primary">
                  Click Here
                </Link>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div className="card">
              <img src="https://blogs.revv.co.in/blogs/wp-content/uploads/2020/05/Konark.png" className="card-img-top my-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bhubhneshwar</h5>
                <p className="card-text">
                Bhubaneswar is the capital and largest city of the Indian state of Odisha, located in the Khordha district. 
                </p>
                <Link to="/viewplace/Bhubhneshwar" className="btn btn-primary">
                  Click Here
                </Link>
              </div>
            </div>
          </div>


          <div className="col-md-3">
            <div className="card" >
              <img src="https://i.ytimg.com/vi/Fath3V3X4kI/sddefault.jpg" className="card-img-top my-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jharsuguda</h5>
                <p className="card-text">
                Jharsuguda is a city and district headquarters of Jharsuguda district of Odisha, India. It is an industrial hub, consisting mainly of metallurgical industries.
                </p>
                <Link to="/viewplace/Jharsuguda" className="btn btn-primary">
                  Click Here
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card" >
              <img src="https://i.ytimg.com/vi/qIVo4ZA3Qds/maxresdefault.jpg" className="card-img-top my-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Cuttack</h5>
                <p className="card-text">
                Cuttack or officially Kataka in Odia, is the former capital and the second largest city in the Indian state of Odisha.
                </p>
                <Link to="/viewplace/Cuttack" className="btn btn-primary">
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;