import React, { useEffect } from 'react';
import style from './ScrollTop.module.css';
import Icon from '../Icon/Icon';
import $ from 'jquery'

function ScrollTop() {
    useEffect(() => {
        // jQuery to handle the scroll-to-top functionality
        $(document).ready(function () {
          $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
              $('#scrollTop').fadeIn(2000);
            } else {
              $('#scrollTop').fadeOut(2000);
            }
          });
    
          $('#scrollTop').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
          });
        });
      }, []);
    
  return (
    <div>
      <Icon className={style.Icons}/>
    </div>
  );
}

export default ScrollTop;
