import React from "react";
import './About.css'
import Heading from "./Heading";
import { Typography } from "@material-ui/core";

export default function About() {
  // javascript code for animating text

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};





  return (
    <section className="content-page">
      <div className="container-fluid">
      <div style={{margin:"auto",textAlign:"center",alignItems:"center"}}>
    <Typography style={{ fontWeight: "900", fontSize: "35px", color: "#001f3f", marginTop: "5vh" ,marginBottom:"2vh"}} variant="h3" color="primary" class="txt-rotate" data-period="2000" data-rotate='[ "Looking For Something?", "Anziam Bio!", "Here You Will Be FInding All The Stuffs You Need!"]'></Typography>
    </div>
        <section className="hero">
          <div className="container">
            <div
             className="row">
              <h1 className="text-uppercase" style={{textAlign:"start"}}>&nbsp;About Anziam</h1>
              <span className="text">
                <p style={{fontSize:'1.3rem'}}>
				The ANZIAM’s Advanced Wound Care category provides advanced wound dressings and skin care products used for the management of acute and chronic wounds resulting from conditions such as diabetes, immobility and venous disease, as well as from traumatic injury, burns, invasive surgery and other causes.
                </p>
                
              </span>
            </div>
          </div>
        </section>
		{/* <Heading/> */}
  
      <section className="mission">
          <div className="container">
            <div className="row">
              <h2 className="text-uppercase" style={{fontWeight:"bolder",fontSize:"2.5rem"}}>&nbsp; Our Mission</h2>
          
              <span className="text">
                <br/>
                <p style={{fontSize:'1.3rem',fontWeight:"bold",color:"grey"}}>
				Achieve quality, affordable outcomes with the new ANZIAM premium line of advanced wound care products.
                </p>
                <p style={{fontSize:'1.2rem'}}>
				ANZIAM® has developed a comprehensive portfolio of advanced wound care solutions with ingredients that are clinically proven to support effective skin care and promote healing.Our mission is to create sustainable healthcare solutions for all of our people.We are aiming to form trustworthy relationships in our products.At Anziam we are constantly evolving,innovating for a better future for all. We create new products which provide benefits to patients to find better ways to create new materials that make productive and innovative changes in the market. Dressings are designed to support the treatment of acute and chronic wounds, with options ranging from light to heavy absorption. Our products are simple for clinicians to use and easily fit into existing care protocols, helping to deliver quality outcomes, including patient comfort and satisfaction, at a competitive cost.
                </p>
                
                <p style={{fontSize:'1.2rem'}}>
				Our products are simple for clinicians to use and easily fit into existing care protocols, helping to deliver quality outcomes, including patient comfort and satisfaction, at a competitive cost
                </p>
              </span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}