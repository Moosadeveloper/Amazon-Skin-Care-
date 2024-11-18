import React from 'react'
import Logo from "../../assets/logo.png"
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon,
}from "@heroicons/react/outline"
import css from './Footer.module.css'


function Footer() {
  return (
 <div className={css.cFooterWrapper}>
    <hr />
    <div className={css.cFooter}>
        <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>amazon</span>

        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Contuct US</span>
                <span className={css.pngLine}>
                    <LocationMarkerIcon className={css.icon}/>
                    <span>111 Pakistan , Karachi ,FL 32801</span>

                </span>
                <span className={css.pngLine}>
                    {" "}
                    <PhoneIcon className={css.icon}/>
                    <a href="tel:03257034681">98 3257034681</a>
                </span>

                <span className={css.pngLine}>
                    <InboxIcon className={css.icon}/>
                    <a href="moosadeveloper43@gmail.com">support@.com</a>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.detail}>
                <span>Account</span>
                <span className={css.pngLine}>
                    <LoginIcon className={css.icon}/>
                   
                    sign In
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.detail}>
                <span>Company</span>
                <span className={css.pngLine}>
                    <UserIcon className={css.icon}/>
                    <a href="/about"></a>
                    <p>About Us</p>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.detail}>
                <span>Resources</span>
                <span className={css.pngLine}>
                    <UserIcon className={css.icon}/>
                    <a href="/about"></a>
                    <p>Safty Privacy Terms</p>
                </span>
            </div>
        </div>
    </div>
    <div className={css.copyRight}>
        <span>Copyright @2024 by Amazon Inc</span>
        <span>All rights reserve</span>
    </div>


 </div>
  )
}

export default Footer
