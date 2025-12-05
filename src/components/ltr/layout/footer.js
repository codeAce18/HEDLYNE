

import ScrollToTopUI from '../scroll-to-top/scroll-to-top';
import { useBackgroundImageLoader } from '../use-background-image/use-background-image';

const Footer = () => {
  
  useBackgroundImageLoader()
  return (
    <>
       <ScrollToTopUI/>
      {/* *** START FOOTER *** */}
      <footer
        className="main-footer bg-img"
        // data-image-src="assets/images/1920x1000-1.jpg"
      >
        <div className="container position-relative z-1">
          <div className="g-3 row">
            <div className="col-md-3">
              <img
                src="/HEDLYNE-LOGO.png"
                alt="footer logo"
                className="img-fluid"
              />
            </div>
            <div className="col-md-5">
              <p className="text-white mb-0">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed.
              </p>
            </div>
          </div>
          <hr className="mt-5 mb-4" />
          <div className="row">
            {/*  END OF /. FOOTER BOX (Qr Code) */}
            {/* START FOOTER BOX (Twitter feeds) */}
            {/* <div className="col-sm-6 col-lg-3 footer-box py-4">
              <div className="twitter-inner">
                <h5 className="wiget-title">Twitter feeds</h5>
                <ul className="margin-top-60">
                  <li>
                    Typi non habent claritatem insitam est usus legent is iis qui
                    facit claritatem. Investigatione{" "}
                    <a href="https://t.co/erenthemeGHTQ">
                      https://t.co/erenthemeGHTQ
                    </a>
                    <span>
                      <i className="ti ti-twitter" />
                      12 days ago
                    </span>
                  </li>
                  <li>
                    Typi non habent claritatem insitam est usus legent is{" "}
                    <a href="https://t.co/erenthemeGHTQ">
                      https://t.co/erenthemeGHTQ
                    </a>
                    <span>
                      <i className="ti ti-twitter" />
                      10 days ago
                    </span>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* END OF /. FOOTER BOX (Twitter feeds) */}
            {/* START FOOTER BOX (Category) */}
            <div className="col-sm-6 col-lg-3 footer-box py-4">
              <h5 className="wiget-title">Category</h5>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled m-0 menu-services">
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Politics</a>
                    </li>
                    <li>
                      <a href="#">Tech</a>
                    </li>
                    <li>
                      <a href="#">Social</a>
                    </li>
                    <li>
                      <a href="#">Entertainment</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* END OF /. FOOTER BOX (Category) */}
          </div>
        </div>
      </footer>
      {/* *** END OF /. FOOTER *** */}

      {/* *** START SUB FOOTER *** */}
      <div className="sub-footer">
        <div className="container">
          <div className="align-items-center g-1 g-sm-3 row">
            <div className="col text-center text-sm-start">
              <div className="copy">Copyright@2025 HEDLYNE.</div>
            </div>
            <div className="col-sm-auto">
              <ul className="footer-nav list-unstyled text-center mb-0">
                <li className="list-inline-item">
                  <a href="privacy.html">Privacy</a>
                </li>
                <li className="list-inline-item">
                  <a href="contact.html">Contact</a>
                </li>
                <li className="list-inline-item">
                  <a href="about.html">About</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Donation</a>
                </li>
                <li className="list-inline-item">
                  <a href="faq.html">F.A.Q</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Footer;