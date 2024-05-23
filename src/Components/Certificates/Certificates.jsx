import React, { useEffect } from 'react'
import img1 from './imgs/freecodecamp1.jpg'
import img2 from './imgs/freecodecamp2.jpg'
import 'aos/dist/aos.css'
import Aos from 'aos'

let arr=[
    img1,img2
]


function Certificates() {
    useEffect(()=>
    {
       Aos.init({})
    })
  return (
   <div className="container py-5">
    <div className="row">
    {
            arr.map((img,index)=>{
                return  <div className="col-md-4 mt-5 mb-4 ">

                     <img src={img} key={index} data-aos="fade-left" className='w-100 rounded  rounded-3 ' />
                </div>
            })
        }
    </div>
   </div>
  )
}

export default Certificates
