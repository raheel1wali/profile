import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
// import Facts from './components/Facts'
// import Services from './components/Services'
import Experience from './components/Experience'
import Works from './components/Works'
// import PricingTable from './components/PricingTable'
// import Testimonials from './components/Testimonials'
// import Clients from './components/Clients'
// import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <>
      {/* <!-- preloader --> */}
      {/* <div id="preloader">
        <div class="outer">
          <div class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
          </div>
        </div>
      </div> */}

      {/* <!-- site wrapper --> */}
      <div class="site-wrapper">

        <Sidebar />

        {/* <!-- main content area --> */}
        <main class="content float-right">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Works />
          <Contact />
        </main>

      </div>
      {/* <!-- Go to top button --> */}
      <a href="javascript:" id="return-to-top"><i class="fa fa-chevron-up"></i></a>
    </>
  );
}

export default App;
