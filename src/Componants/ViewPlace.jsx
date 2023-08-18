import React from 'react'

const ViewPlace = () => {
  return (
    <div>
      <div className="text-center">
    <p className="display-4 text-black fw-bold class mytitle">
      View Place
    </p>
    <input type="text" className="form-control  w-75 mx-auto myinput" />
    <button className="btn btn-danger mt-5 mybtn">
      Search Place
    </button>
  </div>
  </div>
  )
}

export default ViewPlace;