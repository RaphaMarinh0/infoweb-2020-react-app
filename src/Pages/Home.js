import react from "react";

import {About, Contact, Footer, Header, Portifolio, NavMenu, Modais} from "../components/index";

export default function HomePage() {
  return (
    <div>
      <NavMenu />
      <Header title="Portifolio Raphael Marinho"/>
      <Portifolio />
      <About />
      <Contact />
      <Footer />
      {/* Copyright Section*/}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright © Your Website 2020</small>
        </div>
      </div>
      {/* Scroll to Top Button (Only visible on small and extra-small screen sizes)*/}
      <div className="scroll-to-top d-lg-none position-fixed">
        <a
          className="js-scroll-trigger d-block text-center text-white rounded"
          href="#page-top"
        >
          <i className="fa fa-chevron-up" />
        </a>
      </div>
      <Modais />
    </div>
  );
}
