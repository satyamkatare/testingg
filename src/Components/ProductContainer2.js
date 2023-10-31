import React from 'react'
import Product from "./Product";
import p2 from './pdf1.pdf'
const ProductContainer2 = () => {
    return (
        <div>
             <Product
        image1="https://www.mcfarlanemedical.com.au/documents/categories/Alginate%20Dressings.jpg"
        image2="https://p.globalsources.com/IMAGES/PDT/BIG/875/B1071345875.jpg"
        image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfuAInXS_xFenpX52z9fSVtKF0OgG061_3ObSnCeFFluUTHiIKa4rtuZKS_yON11VUoQ&usqp=CAU"
        name="Reinforced Alginate Dressing"
        pdf  = {p2}
        txt="Reinforced Alginate Wound Dressing is a fast-gelling calcium alginate dressing that forms a soft, conformable hydrophilic sheet of gel when in contact with exudate. Helps create and maintain a moist wound environment.
Reinforced Alginate Wound Dressing is indicated for moderate to heavily exuding chronic and acute wounds and can be used during the healing process on pressure injuries, venous and arterial leg ulcers, diabetic ulcers, cavity wounds, lacerations, abrasions, graft and donor sites, post-operative surgical wounds and first- and second-degree burns. The dressings can also be used to control minor bleeding in superficial wounds. Our reinforced alginate range can be supplied in roll form, slit reels or cut pieces, packaged  and sterile. various GSM available.  Must not be ingested and must be kept away from children and animals. For use under the guidance of a health care professional."
      />
        </div>
    )
}

export default ProductContainer2