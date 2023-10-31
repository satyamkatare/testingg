import React from 'react'
import { useState } from 'react'
import './Product.css'
export default function Product(props) {

 const [activeImage, setActiveImage] = useState(props.image1)

  function changeImage(e) {
   setActiveImage(e.target.src)
  }

    return (
        <div className="product">
        <main>
          <div className="container">
            <div className="grid second-nav">
              <div className="column-xs-12">
              </div>
            </div>
            <div className="grid product">
              <div className="column-xs-12 column-md-7">
                <div className="product-gallery">
                  <div className="product-image">
                    <img className="active" onClick={changeImage} src={activeImage}/>
                  </div>
                  <ul className="image-list">
                  <li className="image-item"><img onClick={changeImage} src= {props.image1} /></li>
                    <li className="image-item"><img  onClick={changeImage}  src= {props.image2} /></li>
                
                    <li className="image-item"><img onClick={changeImage}  src={props.image3} /></li>
                  </ul>
                </div>
              </div>
              <div className="column-xs-12 column-md-5">
                <h1 style={{fontFamily: '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif',fontWeight: 'bold',textTransform: 'uppercase'}}>{props.name}</h1>
                <div className="description">
                  <p style={{fontStyle:'justify',fontStyle:"1.6em"}}>{props.txt}</p>
                </div>
                <button  className="add-to-cart" ><a href={props.pdf} download>Our Brochure</a></button>
              </div>
            </div>
            
          </div>
        </main>
        <footer>
          <div className="grid">
            <div className="column-xs-12">
              <p className="copyright">© Copyright 2021 <a href="#" title="Anziam" target="_blank">Anziam</a></p>
            </div>
          </div>
        </footer>
        </div>
    )
}