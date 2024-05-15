import React from 'react'
import img1 from './imgs/freecodecamp1.jpg'
import img2 from './imgs/freecodecamp2.jpg'

let arr=[
    img1,img2
]

function Certificates() {
  return (
   <div className="container py-5">
    <div className="row">
    {
            arr.map((img,index)=>{
                return  <div className="col-md-4 mt-5 mb-4 ">

                     <img src={img} key={index} className='w-100 rounded  rounded-3 ' />
                </div>
            })
        }
    </div>
   </div>
  )
}

export default Certificates
