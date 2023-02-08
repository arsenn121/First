import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Container from "../components/Container";
import { services } from '../utils/Data';
import CustomInput from "../components/CustomInput";

const Home = () => {
  return (
    <>
    
      <Container class1="home-wrapper-2 py-5">
        <div id="top1" className="row">
          <div   className="col-6">
            <div className="main-banner position-relative ">
            <img src="images/111.jpg" className="imgabout" alt="main banner" />
            <img src="images/222.jpg" className="imgabout" alt="main banner"/>
            <img src="images/333.jpg" className="imgabout" alt="main banner"/>
              
            </div>
          </div>
          <div  className="col-6">
            <div className="flex-wrap gap-10 justify-content-between align-items-center ppp">
              <h1 className="ppp1">Про нас</h1>
              <h8 className="ppp2">З 2020 року ми допомагаємо <br></br> нашим клієнтам створювати<br></br> неймовірні івенти, які<br></br> захоплюють гостей. Кожен наш<br></br> захід дарує їм незабутні емоції.<br></br> <br></br></h8>
              <h8 className="ppp2">Щоб робити найкращі події, у<br></br> WhyNot ми не використовуємо<br></br> шаблони, віддаємося події<br></br> цілком і працюємо з<br></br> професіоналами по всій Україні.</h8>
             
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div id="top2" className="row">
          
          <div>
            <div className="flex-wrap gap-10 justify-content-between align-items-center ppp">
              <h3 className="ppp1">Що ми пропонуємо?</h3>
              <h8 className="ppp2"><br></br>Ми допомагаємо втілити ваші бажання та мрії у життя. Розробка концепції, запобігання<br></br> можливим проблемам, підбір локації, організація трансферу та харчування, декорування та<br></br> адміністрування — це лише мала частина робіт, які ми виконуємо при створенні дивовижних заходів.<br></br><br></br></h8>
              <h8 className="ppp2">Завдяки десяткам створених проектів, ми працюємо злагоджено та надаємо<br></br> послуги, які змушують клієнтів повертатися до нас знову і знову.</h8>
             
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading ppp1">Наші послуги</h3>
          </div>
          
        </div>
        <div className="row">
        <div className="col-4">
            <div class="product-item radd">
              <img  src="images/p1.jpeg" alt="brand" height="300px"/>
        </div>
          </div>
          <div className="col-4">
            <div class="product-item">
            <img src="images/p2.jpeg" alt="brand" weight='300px'/>
        </div>
          </div>
          <div className="col-4">
            <div class="product-item">
            <img src="images/p3.jpeg" alt="brand" weight='300px'/>
        </div>
          </div>
          
        </div>
       <p></p>
        <div className="row">
        <div className="col-4">
            <div class="product-item">
            <img src="images/p4.jpeg" alt="brand"/>
        </div>
          </div>
          <div className="col-4">
            <div class="product-item">
            <img src="images/p5.jpeg" alt="brand" />
        </div>
          </div>
          <div className="col-4">
            <div class="product-item">
            <img src="images/p6.jpeg" alt="brand" />
        </div>
          </div>
          
        </div>
        <p></p>
        <div className="row">
        <div className="col-4">
            <div class="product-item">
            <img src="images/p7.jpeg" alt="brand"/>
        </div>
          </div>
          <div className="col-4">
            <div class="product-item">
            <img src="images/p8.jpeg" alt="brand" />
        </div>
          </div>
          <div className="col-4">
            <div class="product-item">
            <img src="images/p9.jpeg" alt="brand" />
        </div>
          </div>
          
        </div>
        
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          
          <div className="col-6">
            <div>
              <img src="images/15.jpeg" className="imgrad" alt="main banner" />
              <div className="row">
                <div className="col-5">
                <img src="images/16.jpeg" className="imgshort " alt="main banner"/>
                </div>
                <div className="col-5">
                  <img src="images/17.jpeg" className="imgshort " alt="main banner"/>
                </div>
              </div>
              <img src="images/18.jpg" className="imgrad imgbel" alt="main banner" />
            </div>
          </div>
          
          <div className="col-6">
          <p className="ppp1 text-center">Як ми працюємо?<br></br><br></br></p>
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center ppp">
            
              <p className="ppp2">1. Заповніть заявку на сайті.<br></br><br></br>
                                  2. Отримайте пропозицію з урахуванням ваших очікувань.<br></br><br></br>
                                  3. Забронюйте дату, підпишіть договір і внесить предоплату.<br></br><br></br>
                                  4. Затвердіть розробленний нами сценарій - і ми почнемо підготовку до івенту.<br></br><br></br>
                                  5. Насолоджуйтесь незрівнянною проведенним заходом!<br></br><br></br></p>
              
             
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
      <h3 id="top3" className="ppp1">Чому нас обирають?</h3>
      <h3 className="ppp1">WhyNot - це<br></br><br></br></h3>
        <div className="row">
        <div className="col-6">
            <div className="flex-wrap gap-10 justify-content-between align-items-center ppp">
              
              <h6 className="pppp2">500+ успішних проектів<br></br><br></br></h6>
              <h6 className="pppp2">60+ видів програм</h6>
            </div>
          </div>
          <div className="col-6">
            <div className="flex-wrap gap-10 justify-content-between align-items-center ppp">
            <h6 className="pppp2">20+ креативних людей<br></br><br></br></h6>
              <h6 className="pppp2">3+ років досвіду</h6>
             
            </div>
          </div>
          <h3 className="pppp"><br></br><br></br>1 неймовірна команда</h3>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div id="top4" className="row">
          
          <div className="col-6">
            <div className="flex-wrap gap-30 justify-content-between align-items-center  auth-card">
            <p className="text-center mb-3 pppp">Залишити заяву</p>
              <form action="" className=" flex-column gap-15 ">
                <label className="lab" for="login"><hp className="ppp2">Ім'я</hp></label>
                <CustomInput className='text-dark' type="text" name="login" placeholder="Введіть своє ім'я" />
                <label for="tel"><hp className="ppp2"><br></br>Телефон</hp></label>
                <CustomInput type="text" name="tel" placeholder="Введіть свій номер" />
                <label for="email"><hp className="ppp2"><br></br> Електрона пошта</hp></label>  
                <CustomInput type="email" name="email" placeholder="Введіть свою пошту" />
                <div className="text-center">
                <p><br></br></p>
                </div>
                <div className="text-center">
                <button className="regbutton imggg2">Замовити</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-6">
            <div className="main-banner position-relative ">
            <img className="imgreg" src="images/14.jpeg"  alt="main banner" />
              
            </div>
          </div>
          
        </div>
      </Container>
      
     
      

      
    </>
  );
};

export default Home;
