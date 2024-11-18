import React from 'react'
import css from './Hero.module.css'
import Heroimg from '../../assets/hero.png'
import {RiShoppingBagFill} from'react-icons/ri'
import {BsArrowRight} from'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = () => {
    const transition ={duration:3,type: "spring"}
  return (
    <div className={css.container}>

        {/* left side */}

        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>
            <div className={css.text2}>
                <span className={css.child1}>Trendy Collection</span>
                <span className={css.child2}> Seedly say has suitable disposal and boy. Exercise joy man cheldren rejoiced.</span>
            </div>
        </div>

        {/* middle side hero image */}
        <div className={css.wrapper}>

            {/* blue circle */}
            <motion.div
            initial={{bottom: "2rem"}}
            whileInView={{bottom: "0rem"}}
            transition={transition}
             className={css.bluecircle}>

            </motion.div>

            {/* HERO IMAGE */}
            <motion.img
            initial={{bottom: "-2rem"}}
            whileInView={{bottom: "0rem"}}
            transition={transition}
             src={Heroimg} width={600} alt="" />
             
            <motion.div
              initial={{right: "4%"}}
              whileInView={{right: "2%"}}
              transition={transition}
             className={css.cart2}>
                <RiShoppingBagFill />

                <div className={css.signup}>
                    <span>Best Signup offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </motion.div>
        </div>


        {/* right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Mounthly traffic</span>
            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>Happy Customers</span>
            </div>
        </div>



    </div>
  )
}

export default Hero
