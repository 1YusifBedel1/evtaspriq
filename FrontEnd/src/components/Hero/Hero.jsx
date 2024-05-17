import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Hero.css'
const Hero = () => {
  return (
    <>
<div className='salam'>
<div  id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img width={"300px"} src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp" className="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img width={"300px"} src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp" className="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img width={"300px"} src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
    </>
  )
}

export default Hero