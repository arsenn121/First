import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
const Header = () => {
  return (
    <>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30  ">
              
              
              
              <div className="col-9 ">
              <h2 className="text-white logotip">WhyNot</h2>
            </div>
                
                <div className="menu-links text-end">
                  <div className="d-flex  text-end gap-30">
                  <pr><a className="text-white" href="#top">Головна</a></pr>
                  <pr><a className="text-white" href="#top1">О нас</a></pr>
                  <pr><a className="text-white" href="#top4">Замовити</a></pr>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header>
        <div>
          <div className="row">
            <div className="col-12">
              <div >
              <p><a name="top"></a></p>
              
              <img src="images/555.jpg" className=" rounded-3 imggg" alt="main banner" width="1681 "/>
              <div id={"bla"} className="centered1 pppp">WhyNot</div>
              <div className="centered2 pppp">Створюємо ваші враження</div>
              <button  className="centered3 btnn">Замовити</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Header;
