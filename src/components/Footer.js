import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsTelegram ,BsFillCursorFill} from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <BsFillCursorFill className="fs-4" />
                <h2 className="mb-0 text-dark">Слідкувати за новинами</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Ваша електрона адреса"
                  aria-label="Ваша електрона адреса"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text  p-2" id="basic-addon2">
                  Підписатись
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-dark mb-4">Про нас</h4>
              <div>
                <address className="text-dark fs-6">
                Проспект Науки, 9A, Харків, <br /> Харківська область <br />
                  Індекс: 61166
                </address>
                <a
                  href="tel:+380 (66) 913 41 21"
                  className="mt-3 d-block mb-1 text-dark"
                >
                  +380 (66) 913 41 21
                </a>
                <a
                  href="mailto:whynot@gmail.com"
                  className="text-dark"
                >
                  whynot@gmail.com
                </a>
               
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-dark mb-4">Соціальні мережі</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-dark py-2 mb-1">
                <a className="text-dark" href="#">
                    <BsInstagram className="fs-4" />
                  </a> Instagram
                </Link>
                <Link to="/refund-policy" className="text-dark py-2 mb-1">
                <a className="text-dark" href="#">
                    <BsLinkedin className="fs-4" />
                  </a> Linkedin
                </Link>
                <Link to="/shipping-policy" className="text-dark py-2 mb-1">
                <a className="text-dark" href="#">
                    <BsYoutube className="fs-4" />
                  </a> Youtube
                </Link>
                <Link to="/privacy-policy" className="text-dark py-2 mb-1">
                <a className="text-dark" href="#">
                    <BsTelegram className="fs-4" />
                  </a> Telegram
                </Link>
                
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-dark mb-4">Швидкі посилання</h4>
              <div className="footer-link d-flex flex-column">
                
                <pr><a className="text-dark py-2 mb-1" href="#top1">Про нас</a></pr>
                <pr><a className="text-dark py-2 mb-1" href="#top2">Що ми пропонуємо</a></pr>
                <pr><a className="text-dark py-2 mb-1" href="#top3">Чому нас обирають</a></pr>
                <pr><a className="text-dark py-2 mb-1" href="#top4">Реєстрація</a></pr>
                
              </div>
            </div>
            
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0">
                &copy; {new Date().getFullYear()}; Зроблено командою WhyNot 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
