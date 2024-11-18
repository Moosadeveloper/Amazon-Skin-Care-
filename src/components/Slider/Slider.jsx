import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles (global styles)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import CSS module
import styles from './Slider.module.css';

// Import data
import { SliderProducts } from '../../data/products';

const Slider = () => {
    return (
        <div className={styles.sContainer}>
            <Swiper
            breakpoints={{
                640:{
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 1
                }
            }}
                className={styles.mySwiper}
                loopFillGroupWithBlank={true}
                modules={[Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation
            >
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className={styles.leftS}>
                            <div className={styles.name}>
                                <span>{slide.name}</span> {/* Product Name */}
                                <span>{slide.detail}</span> {/* Product Details */}
                                <span>{slide.price}$</span> {/* Product Price */}
                            </div>
                            <div className={styles.shopNow}>Shop now</div>
                        </div>
                        <img src={slide.img} alt={slide.name} className={styles.imm} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
