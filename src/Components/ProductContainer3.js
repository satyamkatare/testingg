import React from 'react'
import p3 from './pdf2.pdf'
import Product from "./Product";
const ProductContainer3 = () => {
    return (
        <div>
             <Product
        image1="https://cdns.webareacontrol.com/prodimages/1000-X-1000/3/g/30420191727GemCore360-Reinforced-Alginate-Dressing-L.png"
        image2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf70hkHgep4_SUnR645aJ1YWR0p93mO02uKA&usqp=CAU"
        image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLUlbIMRg25X6ggzRcjl9jxvLbteJIS3smg&usqp=CAU"
        name=" reinforced silver Alginate "
        pdf  = {p3}

        txt="Currently some fibrous dressings can lack strength, especially when wet.  A weak dressing may disintegrate which could leave pieces of dressing in the wound bed. Not only may this be traumatic for the patient, but this also could potentially be a site for infection to develop and require extra time and effort from the care giver to remove any dressings fragments left behind. Based upon established and proven silver alginate technology, an improved silver alginate dressing with better wet integrity has been developed to reduce the likelihood of the dressing failing on removal.  

A patented blend of calcium alginate fibre, silver alginate fibre and cellulose fibre which provides structural integrity, high tensile strength and high absorbency.  "
      />
        </div>
    )
}

export default ProductContainer3