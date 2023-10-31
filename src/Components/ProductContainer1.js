import React from "react";
import Product from "./Product";
import p1 from './pdf1.pdf'
export default function ProductContainer1() {
  return (
    <div>
      <Product
        image1="http://www.roosin.com/uploadfiles/2018/07/20180731084902876.jpg?MS5qcGc="
        image2="http://dermarite.com/wp-content/uploads/2017/10/Know-your-dressings.jpg"
        image3="https://www.ad-surgical.com/content/images/Alginate%20Dressing/650_wide_alginate.gif"
        name="Calcium Alginate dressing"
        pdf = {p1}
        txt="Calcium Alginate dressing is a highly flexible, sterile, primary wound dressing, natural extracted alginate fibers and a mixture of calcium ions, good biological compatibility, and wound drainage. After contacting blood , the gel was formed, which can protect the wound and promote wound healing. It can quickly absorb a large amount of exudation, soft texture, good compliance. Calcium Alginate dressings are highly absorben
                  Calcium Alginate is a high water absorbent wound dressing. They are indicated for moderate to heavily exudating wounds, such as:
                  Calcium Alginate dressings are suitable for use under compression bandages. Calcium Alginate dressings may also be used in the management of infected wounds or wounds in which there is an increased risk of infection under medical supervision"
      />
    </div>
  );
}