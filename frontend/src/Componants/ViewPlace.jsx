import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewPlace = () => {

  const {location} = useParams();

  const [placeList, setPlaceList] = useState([]);

  const fetchPlaces = async () => {
    const res = await fetch('http://localhost:5000/place/getbylocation/'+location);
    const data = await res.json();

    console.log(data);
    setPlaceList(data);
  } 

  useEffect(() => {
    fetchPlaces();
  }, [])

  const displayPlaces = () => {
    return placeList.map((place) => (
      <div className="col-md-3">
              <div className="card">
                <img className='card-img-top' src={'http://localhost:5000/'+place.image} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{place.name}</h5>
                  <p className="card-text">
                    {place.description}
                  </p>
                </div>
              </div>
            </div>
    ))
  }

  return (
    <div className='bg-vi'>
      <div className="text-center">
        <p className="display-4 text-black fw-bold class mytitle">
          View Place
        </p>
        <input type="text" className="form-control  w-75 mx-auto myinput" />
        <button className="btn btn-danger mt-5 mybtn">
          Search Place
        </button>

        



        <hr></hr>
        <div className="container">
          <div className="row">
            
          {displayPlaces()}


            {/* <div className="col-md-3">
              <div className="card">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/00/e3/4b/at-kapildhar-fabulous.jpg?w=700&h=500&s=1" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Bargarh</h5>
                  <p className="card-text">
                    Bargarh is an emerging city and municipality in Bargarh district in the state of odisha in India. It is the administrative headquarters of Bargarh District.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-md-3">
              <div className="card">
                <img src="https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/Dhauli.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Dhauli Shanti Stupa</h5>
                  <p className="card-text">
                    Dhauli known for "Dhauli Santi Stupa", a peace pagoda monument which witnesses the great Kalinga War built by Japan Budhha Sangha and Kalinga Nippon Budhha Sangha.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <img src="https://www.odishavisit.com/wp-content/uploads/2021/11/123.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Talasari Beach</h5>
                  <p className="card-text">
                    Talasari Beach is a beach in the Baleswar district of Odisha, India. It lies on the north-eastern coast of India.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Click Here
                  </a>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPlace;