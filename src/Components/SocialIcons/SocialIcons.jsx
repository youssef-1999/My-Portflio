import React from 'react'
import style from './SocialIcons.module.css'

function SocialIcons() {
  return (
    <div className="socialIcons d-flex justify-content-center ">
    <div className={style.icons}>
  <a  target='_blank' href="https://www.facebook.com/youssef.abdelbaky.3/"><i className="fa-brands fa-facebook fs-2"></i></a>  
        </div>
    <div className={style.icons}>
    <a target='_blank' href='https://github.com/youssef-1999'>  <i className="fa-brands fa-github fs-2"></i> </a>
        </div>
    <div className={style.icons}>
    <a target='_blank' href='https://www.linkedin.com/in/youssefabdelbaky/'>  <i className="fa-brands fa-linkedin fs-2"></i> </a>
        </div>
    <div className={style.icons}>
    <a target='_blank' href='https://www.tiktok.com/@youssefabdelbaky0'>  <i className="fa-brands fa-tiktok fs-2"></i> </a>
        </div>
    <div className={style.icons}>
    <a target='_blank' href='tel:01123683549'>  <i className="fa-brands fa-whatsapp fs-2"></i> </a>
        </div>
</div>
  )
}

export default SocialIcons
