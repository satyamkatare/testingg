import React from 'react'
import Product from "./Product";
import p4 from './pdf2.pdf'
const ProductContainer4 = () => {
    return (
        <div>
              <Product
        image1="https://multimedia.3m.com/mws/media/1904058F/nu-derm-alginate-wound-dressing.jpg"
        image2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRz_lDIGm6XQXIFBsnflkFMVYfwQNRdcb2nA&usqp=CAU"
        image3="https://www.baihemedical.eu/wp-content/uploads/2020/04/carboxymethyl-cellulose-cmc-picture-two.jpg"
        pdf  = {p4}

        name="CMC Dressing"
        txt="CMC Fiber Dressing is a carboxymethylcellulose absorptive dressing for wounds with moderate to heavy exudate. Gel-like substance supports the moist healing process and minimizes the risk of leakage and maceration.
Calcium Alginate/CMC Dressing is highly absorbent dressing that wicks fluid vertically into the dressing and minimizing the chances of periwound skin maceration. This soft dressing is comfortable to wear and its longer wearing times allow patients to continue their normal activities. Blend of calcium alginate and CMC (carboxymethyl cellulose) offers excellent gelling and wet strength for one-piece nontraumatic removal.
CMC Dressing Ropes are ideal for use on pressure ulcers, leg ulcers, cavity wounds, skin donor sites, abrasions, lacerations and post-surgical wounds. The calcium alginate dressing is highly absorbent and wicks fluid into the dressing which minimizes the possibility of periwound skin maceration. The special blend of calcium alginate and CMC (carboxymethyl cellulose) provides excellent gelling and wet strength for one-piece, non-traumatic removal.
"
      />
        </div>
    )
}

export default ProductContainer4