import React, { useEffect } from "react";
import { PROFILE_DATA } from "../data/index";

const Sidebar = () => {
    useEffect(() => {
        navToggler();
        return () => {
            navToggler();
        };
    });
    const navToggler = () => {
        // nav toggler
        let navOpener = document.querySelectorAll(".menu-icon");
        navOpener.forEach((navOpenerBtn) => {
            // console.log('rrrrr')
            navOpenerBtn.addEventListener("click", function (e) {
                document
                    .querySelector(".mobile-header")
                    .classList.add("push");
                document
                    .querySelector(".shadow-dark")
                    .classList.add("open");
                document
                    .querySelector(".content")
                    .classList.add("push");
                e.preventDefault();
            });
        });
        let navCloser = document.querySelectorAll(".close");
        navCloser.forEach((navCloserBtn) => {
            navCloserBtn.addEventListener("click", function (e) {
                // document
                //     .querySelector(".mobile-nav__wrapper")
                // .classList.remove("expanded");
                document
                    .querySelector(".mobile-header")
                    .classList.remove("push");
                document
                    .querySelector(".shadow-dark")
                    .classList.remove("open");
                document
                    .querySelector(".content")
                    .classList.remove("push");
                e.preventDefault();
            });
        });
    };
    return (
        <>
            {/* <!-- mobile header --> */}
            < div className="mobile-header py-2 px-3 mt-4" >
                <button className="menu-icon mr-2">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a href="#" className="logo"><img src={PROFILE_DATA[1].image} alt={PROFILE_DATA[1].name} width='70px' /></a>
                <a href="#" className="site-title dot ml-2">Raheel Wali</a>
            </div >

            {/* <!-- header --> */}
            < header className="left float-left shadow-dark" id="header" >
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="header-inner d-flex align-items-start flex-column">
                    <a href="#"><img src={PROFILE_DATA[1].image} alt={PROFILE_DATA[1].name} width='100px' /></a>
                    <a href="#" className="site-title dot mt-3">Raheel Wali</a>
                    <span className="site-slogan">Full Stack Developer</span>

                    {/* <!-- navigation menu --> */}
                    <nav>
                        <ul className="vertical-menu scrollspy">
                            <li><a href="#home" className="active"><i className="icon-home"></i>Home</a></li>
                            <li><a href="#about"><i className="icon-user"></i>About</a></li>
                            {/* <li><a href="#services"><i className="icon-bulb"></i>Services</a></li> */}
                            <li><a href="#resume"><i className="icon-graduation"></i>Resume</a></li>
                            <li><a href="#works"><i className="icon-grid"></i>Works</a></li>
                            {/* <li><a href="#blog"><i className="icon-pencil"></i>Blog</a></li> */}
                            <li><a href="#contact"><i className="icon-phone"></i>Contact</a></li>
                        </ul>
                    </nav>

                    {/* <!-- footer --> */}
                    {/* <div className="footer mt-auto">

                        
                        <ul className="social-icons list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-dribbble"></i></a></li>
                        </ul>

                        
                        <span className="copyright">© 2021</span> 
                    </div> */}
                </div>
            </header >
        </>
    );
};

export default Sidebar;