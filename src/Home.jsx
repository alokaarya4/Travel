import React from 'react'

const Home = () => {
  return (
    <div>
    <div id="carouselExample" className="carousel-slide">
  <div className="carousel-inner text-white">
    <div className="carousel-item active slide1 " >
      <h1 className='text-center text-danger'>Welcome To</h1>
      <p className='display-1 fw-bold text-center text-warning'>Orrisa</p>
    </div>
  
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden"></span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden"></span>
  </button>
  </div>
  <div>
  <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to={0}
      className="active"
    />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://www.odishatravels.com/images/image3.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://www.odishatravels.com/images/image1.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="" alt="Third slide" />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only"></span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only"></span>
  </a>
</div>

   <div className="text-center">
          <p className="display-4 text-black fw-bold class mytitle">
            Top Places in Orrisa
          </p>
          <input type="text" className="form-control  w-75 mx-auto myinput" />
          <button className="btn btn-danger mt-5 mybtn">
            Search Place
          </button>
        </div>

   
   <div className="container">
<div className="row">
  <div className="col-md-3">
   <div className="card" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bird_view_of_Jagannath_Temple%2C_Puri.jpg/600px-Bird_view_of_Jagannath_Temple%2C_Puri.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Jagannath Puri </h5>
    <p className="card-text">
    The Jagannath Temple is an important Hindu temple dedicated to Jagannath, a form of Vishnu – one of the trinity of supreme divinity in Hinduism. 
    </p>
    <a href="#" className="btn btn-primary">
      Click Here
    </a>
  </div>
</div>
</div>


    <div className="col-md-3">
<div className="card">
  <img src="https://i0.wp.com/thewanderingcore.com/wp-content/uploads/2017/03/puribeach.jpg?resize=750%2C565&ssl=1" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Puri Beach</h5>
    <p className="card-text">
    Puri Beach or the Golden beach is a beach in the city of Puri in the state of Odisha, India. It is on the shore of the Bay of Bengal. It is known for being a tourist attraction and a Hindu sacred place.
    </p>
    <a href="#" className="btn btn-primary">
      Click Here
    </a>
  </div>
</div>
</div>


<div className="col-md-3">
<div className="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYU4BAgbWGTyX5Ru-_lC7BlM6vjKbjyZj5zQ&usqp=CAU" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Khandagiri Caves</h5>
    <p className="card-text">
    Udayagiri and Khandagiri Caves, formerly called Kattaka Caves or Cuttack caves, are partly natural & partly artificial caves of archaeological, ...
    </p>
    <a href="#" className="btn btn-primary">
      Click Here
    </a>
  </div>
  </div>
</div>

<div className="col-md-3">
<div className="card" >
  <img src="https://odishatour.in/wp-content/uploads/2021/12/Maa-kalijai-temple-Chilika-Lake-Khordha-2.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Chilika Lake</h5>
    <p className="card-text">
    Chilika Lake is the largest wintering ground for migratory birds, on the Indian sub-continent. It is one of the hotspots of biodiversity in the country. Some ...
    </p>
    <a href="#" className="btn btn-primary">
      Click Here
    </a>
    </div>
  </div>
</div>
</div>
</div>
</div>

<footer className="bg-dark text-center text-white">
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </a>
      {/* Twitter */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-twitter" />
      </a>
      {/* Google */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-google" />
      </a>
      {/* Instagram */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      {/* Github */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-github" />
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">
      MDBootstrap.com
    </a>
  </div>
  {/* Copyright */}
</footer>


</div>
  )
}

export default Home;