import React from 'react'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'
import img8 from './images/8.png'
import img9 from './images/9.png'
import img10 from './images/10.png'
import img11 from './images/11.png'
import img12 from './images/Screenshot 2023-12-11 103324.png'
import img13 from './images/landing_page1.png'
import img14 from './images/moviedemo1.png'
import img15 from './images/moviedemo2.png'
import img16 from './images/moviedemo3.png'
import img17 from './images/moviedemo4.png'
import img18 from './images/quizapp1.png'
import img19 from './images/quizapp2.png'
import img20 from './images/quizapp3.png'
import img21 from './images/todolist1.png'
import img22 from './images/todolist2.png'
import img23 from './images/todolist3.png'
import img24 from './images/todolist4.png'
import img25 from './images/todolist5.png'
import img26 from './images/devfolio1.png'
import img27 from './images/devfolio2.png'
import img28 from './images/devfolio3.png'
import img29 from './images/devfolio4.png'
import img30 from './images/devfolio5.png'
import img31 from './images/devfolio6.png'
import img32 from './images/devfolio7.png'
import img33 from './images/devfolio8.png'
import img34 from './images/baking.png'
import img35 from './images/osaka.png'
import img36 from './images/mealify.png'
import img37 from './images/ketri.png'
import 'aos/dist/aos.css'
 import Aos from 'aos'
import { useEffect } from 'react'
import ScrollTop from '../ScrollTop/ScrollTop'


function Project() {

    let imgArr=[
        img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,
        img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37
    ]
    useEffect( ()=>
    {
      Aos.init()
    },[] )

  
    
  return (
    <div className="container py-2  mt-4">
      <ScrollTop/>
        <div className="row g-3 mt-5">
          {
            imgArr.map((img,index) =>
            {
                return <div className="col-md-4 mb-4">
                  <div className="test rounded rounded-3 g-2  mb-5">

                    <img src={img} alt=""   data-aos="fade-left" key={index} className='w-100' />
                  </div>
                </div>
            } )
          }
        </div>
    </div>
  )
}

export default Project
