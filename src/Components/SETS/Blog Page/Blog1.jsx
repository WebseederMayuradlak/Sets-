import React from "react";
import "./Blog1.css";
import Logo from "../../Images/Sets Logo.png";
import { Link } from "react-router-dom";
import { VerticalAlignBottom } from "@mui/icons-material";
export default function Blog() {

  var showData = (e) => {
    e.preventDefault();
    var content = document.getElementById("content");

    var Cursor = document.getElementById("img");
    if (content.style.display === "block") {
      content.style.display = "none";
      Cursor.innerText = "☰";
    } else {
      content.style.display = "block";
      Cursor.innerText = "X";
    }
   
  };

  const closeNav= ()=>{
  
  const myId =document.getElementById('content');
  myId.style.display="none";
  var Cursor = document.getElementById("img");   
  Cursor.innerText = "☰";
}


  return (
    <div>
      <div className="navbar-container">
        <ul>
          <li>
            <img src={Logo} alt="" />
          </li>
          <br />
          <li onClick={closeNav}>
            <Link to="/#home">HOME</Link>
          </li>
          <li onClick={closeNav}>
            <Link to="/#about">ABOUT</Link>
          </li>
          <li onClick={closeNav}>
            <Link to="/#home">SERVICES</Link>
          </li>
          <li onClick={closeNav}>
            <Link to="/#home">PROJECT</Link>
          </li>
          <li onClick={closeNav}>
            <Link to="/#home">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-header">
          <div className="mobile-logo">
            <a href="/">
              {" "}
              <img src={Logo} alt="" />{" "}
            </a>
          </div>
          <div className="mobile-icon">
            <a href="" id="img" onClick={showData}>
              ☰
            </a>
          </div>
        </div>
        <div className="mobile-navbar" id="content">
          <div className="mobile-navbar-content">
            <ul>
            <div className="mobile-li-main">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">ABOUT</a>
              </li>
              <li>
                <a href="/">SERVICES</a>
              </li>
              <li>
                <a href="/">PROJECTS</a>
              </li>
              <li>
                <a href="/">CONTACT US</a>
              </li>
              </div>
            </ul>
          </div>
        </div>
      <div className="blog-main-container" onClick={closeNav}>
        <div className="blog-left-part">
          <div className="blog-journal">
            <img
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt=""
            />
            <div className="blog-journal-content">
              <a href="">Technology</a>
              <div className="journal">
                <div className="journal-date">
                  <i className="ri-calendar-2-fill"></i>
                  <p>05 Dec,2020</p>
                </div>
                <div className="journal-date">
                  <p>By</p>
                  <a href="">Park Lee</a>
                </div>
              </div>
              <h1>
                The Ultimate Guide to Electromechanical Equipment Installation
                and Maintenance
              </h1>
              <p>
                Solid Edge is a leading maintenance and project management
                company based in Dubai, specializing in MEP design, HVAC and
                electrical testing and commissioning, fit-out, and refurbishment
                work, and energy-saving green solutions throughout the UAE. With
                a focus on providing top-quality services at unbeatable prices,
                Solid Edge has earned the trust and belief of its clients
                through its commitment to excellence and customer satisfaction.
              </p>
              <p>
                Solid Edge recently debuted its energy-saving services, created
                especially for the distinctive and difficult local environment.
                By assisting customers in lowering their energy expenses and
                carbon footprint, these ground-breaking solutions have elevated
                Solid Edge to the top of the green energy market.
              </p>
              <p>
                {" "}
                At Solid Edge, we place a high emphasis on our dedication to
                going above and beyond for our clients. We work hard to deliver
                the best services at fair prices, and our team is constantly
                thinking of fresh, creative methods to wow our customers with
                specialized solutions that address their particular needs. We
                are confident that, with our years of experience and knowledge,
                we can assist you in achieving your maintenance and
                energy-saving objectives while providing outstanding service at
                every turn.
              </p>
              <p>
                {" "}
                In today's modern world, air conditioning, ventilation, and air
                filtration systems are essential for maintaining comfortable and
                healthy indoor environments. However, proper installation and
                maintenance of these systems are crucial for ensuring optimal
                performance, reducing energy consumption, and preventing
                potential health hazards. In this blog, we will discuss the
                importance of air conditioning, ventilation, and air filtration
                system installation and maintenance, and how SETS company can
                assist you in this area.
              </p>
              <h2>Advantages of Proper Installation</h2>
              <p>
                Air conditioning, ventilation, and air filtration systems must
                be installed correctly to ensure optimum performance and energy
                efficiency. Incorrect installation can result in decreased
                system performance, increased energy consumption, and possible
                safety hazards. SETS offer professional installation services to
                ensure that all systems are installed correctly and in
                accordance with manufacturer specifications.
              </p>
              <h3>The significance of routine maintenance</h3>
              <p>
                The lifespan of ventilation, air filtration, and air
                conditioning systems can all be increased with routine upkeep.
                Additionally, it can aid in avoiding possible health risks
                brought on by the accumulation of dirt, dust, and other
                contaminants in the system. To guarantee optimum performance and
                air quality, SETS Company provides comprehensive maintenance
                services, including cleaning, filter replacement, and system
                testing.
              </p>
              <h3>Maintenance of the air filtration system</h3>
              <p>
                Maintaining healthy indoor environments, especially in
                commercial and industrial situations, calls for the use of air
                filtration devices. Filters that are dirty or clogged can impact
                system function and possibly expose users to harmful
                contaminants. To make sure that your air filtering system is
                operating at peak efficiency, SETS Company can offer routine
                filter replacement and cleaning services.
              </p>
              <h3>Professional Expertise</h3>
              <p>
                Technical know-how and knowledge are needed for proper air
                conditioning, ventilation, and air filtration system
                installation and upkeep. The SETS business has a group of
                qualified engineers and technicians who can offer expert
                installation and maintenance services. In addition, they can
                advise you on the best tools and systems to use for your
                particular requirements.
              </p>
              <h3>Savings on energy</h3>
              <p>
                Significant energy reductions can also be achieved by properly
                installing and maintaining ventilation, air filtration, and air
                conditioning systems. Energy consumption can be decreased by
                making sure all systems are operating at peak efficiency, which
                will lower energy costs and make the business more ecologically
                friendly.
              </p>
              <p>
                In conclusion, appropriate air conditioning, ventilation, and
                air filtration system installation and maintenance are essential
                for assuring peak performance, energy effectiveness, and healthy
                indoor environments. You can accomplish these objectives with
                the aid of the installation and upkeep services offered by SETS
                Company. To find out more about our offerings and how we can
                help you with your requirements for an air conditioning,
                ventilation, and air filtration system, get in touch with us
                right away.
              </p>
            </div>
          </div>
        </div>
        <div className="blog-right-part" onClick={closeNav}>
          <div className="blog-right-search">
            <div className="blog-right-input">
              <input type="text" name="" id="" placeholder="Keyword Search..."/>
            </div>
            <div className="blog-right-icon">
              <a href="">
                <i class="ri-search-2-line"></i>
              </a>
            </div>
          </div>
          <div className="blog-right-recent" onClick={closeNav}>
            <div className="blog-right-heading">
              <h2>Recent Post</h2>
            </div>
            <div className="recent1">
              <div className="recent1-img1">
                <img
                  src="https://plus.unsplash.com/premium_photo-1673203734655-d58df8554c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  alt=""
                />
              </div>
              <div className="recent-data">
                <a href="">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
                </a>
                <p>
                  <i class="ri-time-line" ></i>12 Feb, 2020
                </p>
              </div>
            </div>
            <div className="recent1">
              <div className="recent1-img1">
                <img
                  src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
                  alt=""
                />
              </div>
              <div className="recent-data">
                <a href="">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
                </a>
                <p>
                  <i class="ri-time-line"></i>12 Feb, 2020
                </p>
              </div>
            </div>
            <div className="recent1">
              <div className="recent1-img1">
                <img
                  src="https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
                  alt=""
                />
              </div>
              <div className="recent-data">
                <a href="">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.
                </a>
                <p>
                  <i class="ri-time-line"></i>12 Feb, 2020
                </p>
              </div>
            </div>
          </div>
          <div className="blog-category-container" onClick={closeNav}>
            <div className="blog-category-heading">
              <h2>Category List</h2>
            </div>
            <div className="blog-category-list">
              <ul>
                <li>
                  <a href="">Technical Services</a>
                </li>
                <li>
                  <a href="">Engineering Design</a>
                </li>
                <li>
                  <a href="">Facilities Management</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-tags" onClick={closeNav}>
            <div className="blog-tags-heading">
              <h2>Tags</h2>
            </div>
            <div className="blog-tags-main-row">
              <div className="blog-tags-row">
                <a href="">Fashion</a>
                <a href="">Education</a>
                <a href="">Nation</a>
              </div>
              <div className="blog-tags-row">
                <a href="">Study</a>
                <a href="">Health</a>
                <a href="">Food</a>
              </div>
              <div className="blog-tags-row">
                <a href="">Travel</a>
                <a href="">Science</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-comment-container" onClick={closeNav}>
        <div className="blog-comment-heading">
          <h2>Leave A Comment</h2>
        </div>
        <div className="blog-comment-form">
          <form
            action="https://getform.io/f/07b22bfb-7e6b-4c2e-b610-c4c73983b7a5"
            method="POST"
          >
            <input type="text" placeholder="Name*" name="name" required />{" "}
            <br />
            <input
              type="text"
              placeholder="Email*"
              name="email"
              required
            />{" "}
            <br />
            <input type="text" placeholder="Comment" name="comments" /> <br />
            <button>Post Comments</button>
          </form>
        </div>
      </div>
      <div className="footer-container" onClick={closeNav}>
        <div className="footer-column1">
         <a href="/"> <img src={Logo} alt="" /> </a>
          <div className="after-footer-icons">
            <a href="">
              {" "}
              <i class="ri-facebook-fill"></i>{" "}
            </a>
            <a href="">
              <i class="ri-twitter-fill"></i>
            </a>
            <a href="">
              <i class="ri-instagram-fill"></i>
            </a>
            <a href="">
              {" "}
              <i class="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
        <div className="footer-column3">
          <ul>
            <a href="">www.sets.com</a> <br />
            <a href="">+91 9988776655</a> <br />
            <a href="">info@sets.com</a>
          </ul>
        </div>
        <div className="footer-column2">
          <a href="">Home</a>
          <br />
          <a href="">Company Overview</a>
          <br />
          <a href="">Blogs</a>
          <br />
          <a href="">FAQs</a>
          <br />
        </div>
        <div className="footer-column4">
        <div className="footer-column4-1">
          <a href="">Privacy Policy</a> <br />
          <a href="">Risk Disclosure</a> <br />
          </div>
          <div className="footer-column4-2">
          <a href="">Terms and Conditions</a>
          <br />
          <a href="">Security and Fraud Awareness</a>
          <br />
          </div>
        </div>
      </div>
      <div className="after-footer" onClick={closeNav}>
        <div className="after-footer-text">
          <p>
            Copyright 2023 <a href="">SETS.</a> A venture of Solid Edge
            Technical Services LLC
          </p>
        </div>
        <div className="after-footer-text2">
          <p>
            Created By
            <a href="http://www.webseeder.in/">WebSeeder Technologies</a>
            </p>
        </div>
      </div>
    </div>
  );
}
