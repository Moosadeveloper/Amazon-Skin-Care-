import React, { useState } from 'react'
import css from './Product.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Products = () => {
    const [parent] = useAutoAnimate();
    const [MenuProducts, setMenuProducts ] = useState(ProductsData);
    const filter = (type) =>{
        setMenuProducts(ProductsData.filter((product)=>product.type === type))

    }
  return (
    <div className={css.container}>
        <img src={Plane} alt="" />
        <h1>Our featured Products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin Care</li>
                <li  onClick={()=>filter("conditioner")}>Conditioners</li>
                <li  onClick={()=>filter("foundation")}>Foundations</li>
            </ul>

            <div className={css.list} ref={parent}>
                {
                    MenuProducts.map((product, i)=>(
                        <div className={css.product}>
    <div className={css.left} >
        <div className={css.name}>
            <span>{product.name}</span> {/* 1st child */}
            <span>{product.detail}</span> {/* 2nd child */}
        </div>
        <span>{product.price}$</span>
        <div>Shop Now</div>
    </div>
    <img src={product.img} alt="" className={css.imgP} />
</div>


                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Products
