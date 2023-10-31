import React from 'react'
import './Team.css';
import Typography from '@material-ui/core/Typography'

const Team = () => {

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
        <div>
            {/* <h3>
                <span ></span>
            </h3> */}
            <section>
                <section class="team-page-section">
                    <div class="container">
                        {/* <!-- Sec Title --> */}
                        <div class="sec-title centered">
                            <div class="title">Our Team</div>
                            <div class="separator"><span></span></div>
                            {/* <h2></h2> */}

                            <Typography style={{ fontWeight: "900", fontSize: "35px", color: "#001f3f", marginTop: "5vh" }} variant="h3" color="primary" class="txt-rotate" data-period="2000" data-rotate='[ "Let&apos;s meet with our team members!", "Anziam Bio!", "Have A Good Day!"]'></Typography>
                        </div>

                        <div class="row clearfix">

                            {/* <!-- Team Block --> */}
                            <div class="team-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul class="social-icons">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-skype"></i></a></li>

                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>

                                    <div class="image">
                                        <a href="#">
                                            <div class="imageBox"><img src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png" alt="" /></div></a>

                                    </div>
                                    <div class="lower-content">
                                        <h3><a href="#">Name </a></h3>
                                        <div class="designation">Designation </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block --> */}
                            <div class="team-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul class="social-icons">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-skype"></i></a></li>

                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                    <div class="image">
                                        <a href="#"><div class="imageBox"><img src="https://www.pngitem.com/pimgs/m/327-3275702_bolle-circolari-icon-user-image-icon-png-transparent.png" alt="" /></div></a>
                                    </div>
                                    <div class="lower-content">
                                        <h3><a href="#">Name </a></h3>
                                        <div class="designation">Designation </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block --> */}
                            <div class="team-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul class="social-icons">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-skype"></i></a></li>

                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                    <div class="image">

                                        <a href="#">
                                            <div class="imageBox"> <img src=" https://www.nicepng.com/png/detail/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png" alt="" /></div>
                                        </a>
                                    </div>
                                    <div class="lower-content">
                                        <h3><a href="#">Name </a></h3>
                                        <div class="designation">Designation </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block --> */}
                            <div class="team-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul class="social-icons">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-skype"></i></a></li>

                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                    <div class="image">
                                        <a href="#"><div class="imageBox"><img src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png" alt="" /></div></a>
                                    </div>
                                    <div class="lower-content">
                                        <h3><a href="#">Name </a></h3>
                                        <div class="designation">Designation </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block --> */}
                            <div class="team-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul class="social-icons">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-skype"></i></a></li>

                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                    <div class="image">
                                        <a href="#"><div class="imageBox"><img src="https://www.pngitem.com/pimgs/m/327-3275702_bolle-circolari-icon-user-image-icon-png-transparent.png" alt="" /></div></a>
                                    </div>
                                    <div class="lower-content">
                                        <h3><a href="#">Name </a></h3>
                                        <div class="designation">Designation </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block --> */}
                            <div class="team-block col-lg-4 col-md-6 col-sm-12">
                                <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul class="social-icons">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-skype"></i></a></li>

                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                    <div class="image">
                                        <a href="#"><div class="imageBox"><img src=" https://www.nicepng.com/png/detail/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png" alt="" /></div></a>
                                    </div>
                                    <div class="lower-content">
                                        <h3><a href="#">Name </a></h3>
                                        <div class="designation">Designation </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Team
