import React from 'react'
import joe from './imgs/joe.jpeg'
import './About.css'
function Home() {
  return (
    <div className="container py-5 mt-5">
        <div className="row mt-5">
            <div className="col-md-3">
                <img src={joe} alt="image" className='w-100 rounded  rounded-circle ' />
            </div>
            <div className="col-md-8 mt-4">
                <h1> Hey I am <span className='text-primary '>Youssef Abd El Baky</span></h1>
                <p>Web
Developer
Front-End Developer,ReactJS</p>
<p>I am a Computer Enginnering|Software Developer | Front-End Developer | ReactJs | Aspiring Operations specialist | Professional Tennis Coach |Tennis | Swimming | Padel
</p>

            </div>
        </div>
    </div>
  )
}

export default Home
