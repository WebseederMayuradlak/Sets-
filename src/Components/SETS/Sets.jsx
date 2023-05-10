import React, { useState } from "react";
import "./Sets.css";
// import onScrollEvent from "./onScrollEvent";
import Logo from "../Images/Sets Logo.png";
import Bannerimg from "../Images/city5.jpg";
import { Link as ScrollToId } from "react-scroll";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const toastOptions = {
  position: "top-center",
  autoClose: 500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export default function Sets() {
  function scrolltotop() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }
  const Image1 =
    "https://plus.unsplash.com/premium_photo-1663011305288-d55df8afa58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const Image2 =
    "https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80";

  const [popUp, setPopup] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const close = () => {
    setPopup(!popUp);
  };

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
  const closeNav = () => {
    const myId = document.getElementById("content");
    myId.style.display = "none";
    var Cursor = document.getElementById("img");
    Cursor.innerText = "☰";
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("mobile-header").style.top = "0";
    } else {
      document.getElementById("mobile-header").style.top = "-50px";
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://getform.io/f/07b22bfb-7e6b-4c2e-b610-c4c73983b7a5", data)
      .then((res) => {
        toast.success("Message sent successfully ", toastOptions);
        close();
       setData({name:"",email:"",message:"",phone:""})
      })
      .catch((err) => {
        if (err) {
          toast.error("Failed to send data ", toastOptions);
        }
      });
  };
  const contactHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://getform.io/f/07b22bfb-7e6b-4c2e-b610-c4c73983b7a5", data)
      .then((res) => {
        toast.success("Message sent successfully ", toastOptions);
        setData({name:"",email:"",message:"",phone:""})
      })
      .catch((err) => {
        if (err) {
          toast.error("Failed to send data ", toastOptions);
        }
      });
  };
  return (
    <div className="App">
      <div className="navbar-container">
        <ul>
          <li>
            <Link to="">
              <img src={Logo} alt="" />
            </Link>
          </li>
          <br />
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#service">SERVICES</a>
          </li>
          <li>
            <a href="#project">PROJECT</a>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </div>

      <div className="mobile-header">
        <div className="mobile-logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="mobile-icon">
          <Link to="" id="img" onClick={showData}>
            ☰
          </Link>
        </div>
      </div>
      <div className="mobile-navbar" id="content">
        <div className="mobile-navbar-content">
          <ul>
            <div className="mobile-li-main">
              <li onClick={closeNav}>
                <a href="#home">HOME</a>
              </li>
              <li onClick={closeNav}>
                <a href="#about">ABOUT</a>
              </li>
              <li onClick={closeNav}>
                <a href="#service">SERVICES</a>
              </li>
              <li onClick={closeNav}>
                <a href="#project">PROJECTS</a>
              </li>
              <li onClick={closeNav}>
                <a href="#contact">CONTACT US</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="banner-container" id="home" onClick={closeNav}>
        <div className="banner-content">
          <h3>Welcome to Solid Edge Technical Services LLC</h3>
          <h1>WE BUILT RELATIONSHIP</h1>
          <h2>FROM WHAT WE DO</h2>
          <p>
            Clients are our assets, and we specialize in protecting their
            interests and trust.
          </p>
          <div className="banner-btn">
            <a href="#contact">Start Now</a>
          </div>
        </div>
        <div className="banner-image">
          <img src={Bannerimg} alt="" />
        </div>
        <div className={`${popUp ? "banner-form-main" : "show-form"}`}>
          <div className="banner-form">
            <span onClick={close}>&times;</span>
            <form onSubmit={submitHandler}>
              <div className="form-heading">
                <h6>Contact Us</h6>
              </div>
              <div className="form-element-main">
                <div className="form-element">
                  <label htmlFor="">Name</label> <br />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name..."
                    required
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
                <div className="form-element">
                  <label htmlFor="">Email</label> <br />
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder="Enter your mail..."
                    required
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-element">
                  <label htmlFor="">Phone</label> <br />
                  <input
                  value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    type="number"
                    name="phone"
                    placeholder="Enter your number..."
                  />
                </div>
                <div className="form-element">
                  <label htmlFor="">Message</label> <br />
                  <input
                  value={data.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                    type="text"
                    name="message"
                    placeholder="Enter your message..."
                  />
                </div>
                <button className="banner-form-btn">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="about-top" id="about" onClick={closeNav}>
        <h2>We Help IT Companies Scale Engineering Capacity</h2>
      </div>
      <div className="about-container" id="about" onClick={closeNav}>
        <div className="about-container-image">
          <div className="about-image1">
            <img src={Image1} alt="" />
          </div>
          <div className="about-image2">
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="about-container-text">
          <h2>WHO ARE WE? </h2>
          <p>
            Solid Edge is a Dubai-based company specializing in general and
            specialist maintenance, MEP design and project management, HVAC and
            electrical testing and commissioning, fit and refurbishment work,
            and saving-green solutions across the UAE. Solutions offered to our
            clients make us win their belief and trust: the quality is what
            matters, the price is unbeatable, and they complement each other.
          </p>
          <div className="icon1">
            <div className="about-icon">
              <i className="ri-draft-fill"></i>
            </div>
            <div className="about-icon-text">
              <h3>Certified Company</h3>
              <p>
                Our Commitment to Delivering Exceptional Products and Services
                with Uncompromising Standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service-container" id="service" onClick={closeNav}>
        <div className="service-container-text">
          <h3>_____ WHY CHOOSE US</h3>
          <h2>Customized Technical Services for Your Company</h2>
          <p>
            Solid Edge Technical Services is supported by a consolidated team of
            specialized, dedicated engineers and a committed management team,
            which form the inner strength of an organization. Our success is
            constantly based on our ability to satisfy our client's requests,
            and we firmly believe that our client's interests should always come
            first. We go above and beyond our commitment to turning our client's
            ideas into reality while keeping in mind all the minute details
            involved in the entire process. We do this by using a distinctive
            approach with our clients.
          </p>
        </div>
        <div className="service-container-cart">
          <div className="service-cart-row1">
            <div className="cart-1">
              <div className="cart-details">
                <i className="ri-settings-6-fill"></i>
                <h3>Technical Services</h3>
                <p>
                  Expert technical services to optimize your business
                  operations.
                </p>
              </div>
            </div>
            <div className="cart-1">
              <div className="cart-details">
                <i className="ri-pencil-ruler-2-fill"></i>
                <h3>Engineering Design</h3>
                <p>
                  Transforming ideas into reality with precision engineering
                  design.
                </p>
              </div>
            </div>
          </div>
          <div className="service-cart-row2">
            <div className="cart-2">
              <div className="cart-details">
                <i className="ri-building-fill"></i>
                <h3>Facilities Management</h3>
                <p>
                  Efficient and reliable facilities management services to
                  enhance your business infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="process-container" onClick={closeNav}>
        <div className="process-heading">
          <h2>OUR PROCESS</h2>
        </div>
        <div className="process-flex">
          <div className="flex">
            <div className="flex-details">
              <i className="ri-team-fill"></i>
              <h4>Collaborating closely with clients</h4>
              <p>
                Preparation and Briefing at most assuring the client's vision is
                met.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-details">
              <i className="ri-calendar-fill"></i>
              <h4>Developing plans and designs</h4>
              <p>
                Technical Design confirms the necessity and comfort levels are
                assured.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-details">
              <i className="ri-trophy-fill"></i>
              <h4>
                Technical Design confirms the necessity and comfort levels are
                assured.
              </h4>
              <p>
                Construction with high standard material and works performed
                with all safety measures.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-details">
              <i className="ri-list-settings-fill"></i>
              <h4>Ensure successful project outcomes</h4>
              <p>
                Handover and Close out with the commitment of duration agreed
                with required approvals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-banner1" onClick={closeNav}>
        <div className="cta-banner1-text">
          <h3>_____WORKS ABOUT</h3>
          <h2>OUR SPECIALIZATIONS</h2>
          <p>
            <ul>
              <li>General to Specialist Maintenance</li>
              <li>General to Specialist Maintenance</li>
              <li>Projects Management</li>
              <li>Fit Out & Refurbishment Work</li>
              <li>HVAC, Electrical Testing & Commissioning</li>
              <li>Energy Saving – Green Solution</li>
            </ul>
            Our greatest strength is our team, our ability to complete projects
            on time, and our client-focused, flexible work approach.
          </p>
          <h4>
            <i className="ri-checkbox-circle-fill"> 100% Client Satisfaction</i>
          </h4>
          <h4>
            <i className="ri-checkbox-circle-fill"> World Class Worker</i>
          </h4>
        </div>
        <div className="cta-banner1-img">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="cta-banner2-container" onClick={closeNav}>
        <div className="cta-banner2-column1">
          <div className="cta-banner2-text">
            <h2>NEED HELP?</h2>
            <p>
              All difficult Technical problems have simple solutions,Maintain
              business security and availability.
            </p>
          </div>
        </div>
        <div className="cta-banner2-column2">
          <button onClick={() => setPopup(!popUp)}>Book an Appointment</button>
        </div>
      </div>
      <div className="offer-container" onClick={closeNav}>
        <div className="offer-heading">
          <h2>WHAT WE OFFER</h2>
        </div>
        <div className="offer-carts">
          <div className="offer">
            <div className="offer-details">
              <i className="ri-voice-recognition-fill"></i>
              <h3>Electromechanical Equipment Installation & Maintenance</h3>
              <p>
                Electromechanical equipment installation and maintenance
                involves the installation, repair, and maintenance of complex
                systems that combine electrical and mechanical components.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="offer-details">
              <i className="ri-price-tag-2-fill"></i>
              <h3>Partition & False Ceiling Contracting</h3>
              <p>
                Partition and false ceiling contracting services are critical in
                the construction industry. They are essential components of
                interior design and play a crucial role in enhancing buildings'
                aesthetic appeal and functionality.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="offer-details">
              <i className="ri-shield-cross-fill"></i>

              <h3>Sanitary Installation & Pipes Repairing Works</h3>
              <p>
                Sanitary installation and pipe repair works involve the
                installation, repair, and maintenance of plumbing systems in
                residential, commercial, and industrial settings.
              </p>
            </div>
          </div>
          <div className="offer">
            <div className="offer-details">
              <i className="ri-flood-fill"></i>
              <h3>Painting Contracting Carpentry & Floor Contracting</h3>
              <p>
                Painting contracting, carpentry, and floor contracting are three
                related fields that involve the installation, repair, and
                maintenance of various aspects of a building's interior and
                exterior.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="project" onClick={closeNav}></div>
      <div className="project-container" onClick={closeNav}>
        <div className="project-heading">
          <h3>_____PORTFOLIO</h3>
          <h2>OUR WORK SHOWCASE</h2>
        </div>
        <div className="project-carts">
          <div className="project-img">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <div className="project-content">
              <Link to="">Cyber Security</Link>
            </div>
          </div>
          <div className="project-img">
            <img
              src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt=""
            />
            <div className="project-content">
              <Link to="">IT Consultancy</Link>
            </div>
          </div>
          <div className="project-img">
            <img
              src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
              alt=""
            />
            <div className="project-content">
              <Link to="">Analysis of Security</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-container" id="frequently" onClick={closeNav}>
        <div className="faq-heading">
          <h3>___ FAQ</h3>
          <h2>Most common question about our services </h2>
        </div>
        <div className="faq-questions">
          <ul id="faq">
            <li>
              <label htmlFor="first">
                What is typically required in a building design project?
                <span>&#x3e;</span>
              </label>
              <input type="radio" id="first" name="faq" checked />
              <div className="content">
                <p>
                  A building design project typically requires a range of
                  technical services including electrical, mechanical, plumbing,
                  fire protection, IT, audio-visual, and security system design
                  and implementation.
                </p>
              </div>
            </li>
            <li>
              <label htmlFor="second">
                How do technical services impact the overall cost and timeline
                of a construction project?
                <span>&#x3e;</span>
              </label>
              <input type="radio" id="second" name="faq" checked />
              <div className="content">
                <p>
                  Technical services can significantly impact the cost and
                  timeline of a construction project as they involve complex
                  systems that require coordination, planning, and installation,
                  which can affect the overall project schedule and budget.
                </p>
              </div>
            </li>
            <li>
              <label htmlFor="third">
                What is the context of building design and construction?
                <span>&#x3e;</span>
              </label>
              <input type="radio" id="third" name="faq" checked />
              <div className="content">
                <p>
                  Building design and construction refers to the process of
                  creating structures that meet specific functional and
                  aesthetic requirements, often including aspects such as
                  safety, sustainability, and accessibility.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="blog-container" id="blog" onClick={closeNav}>
        <div className="blog-content">
          <h3>_____POPULAR NEWS</h3>
          <h2>LATEST FROM OUR BLOG</h2>
        </div>
        <div className="blog-blogs">
          <div className="blog-cart">
            <img
              src="https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
            <div className="blog-cart-content">
              <Link to="">Technology</Link>
              <a href="/blog1">
                <h3>
                  The Ultimate Guide to Electromechanical Equipment Installation
                  and Maintenance
                </h3>
              </a>
            </div>
          </div>
          <div className="blog-cart">
            <img
              src="https://images.unsplash.com/photo-1589988071674-c4a2004d2336?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2103&q=80"
              alt=""
            />
            <div className="blog-cart-content">
              <Link to="">Engineering Design</Link>
              <a href="/blog2">
                <h3>The Ultimate Guide to Plumbing Installation and Repair</h3>
              </a>
            </div>
          </div>

          <div className="blog-cart">
            <img
              src="https://images.unsplash.com/photo-1546426094-ac58edd9eae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80"
              alt=""
            />
            <div className="blog-cart-content">
              <Link to="">Facilities Management</Link>
              <a href="/">
                <h3> Additions in conveying or collected objection </h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="form-container" id="contact" onClick={closeNav}>
        <div className="form-main-container">
          <h2>DISCUSS NOW!</h2>
        </div>
        <div className="form-part2">
          <div className="form-input">
            <form onSubmit={contactHandler}>
              <input
                onChange={(e) => setData({ ...data, name: e.target.value })}
                type="text"
                placeholder="Full Name"
                name="name"
                required
                value={data.name}
              />
              <br />
              <input
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                placeholder="Email"
                name="email"
                required
                value={data.email}
              />
              <br />
              <input
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                type="number"
                value={data.phone}
                placeholder="Phone Number"
                name="phone"
                required
              />
              <br />
              <textarea
                onChange={(e) => setData({ ...data, message: e.target.value })}
                placeholder=" Message..."
                name="message"
                value={data.message}
              />
              <br />
              <button>Send Message</button>
            </form>
          </div>
          <div className="form-right-part">
            <div className="form-heading">
              <h2>LET's TALK</h2>
              <h4>Get in touch to discuss your next project</h4>
            </div>
            <div className="form-details">
              <div className="form-row">
                <h3>
                  <i className="ri-map-pin-fill"></i>Office 501, AI Qusais IND
                  4,UAE
                </h3>
              </div>
              <div className="form-row">
                <h3>
                  <i className="ri-mail-fill"></i>
                  <Link to="">info@solidedgetech.com </Link>
                </h3>
              </div>
              <div className="form-row">
                <h3>
                  <i className="ri-phone-fill"></i>
                  <Link to=""> +919118811192</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter-container" onClick={closeNav}>
        <div className="newsletter-back">
          <div className="newsletter-back-img1">
            <div className="newsletter-back-img2"></div>
          </div>
        </div>
        <div className="newsletter-content">
          <h2>Let's Discuss Your Idea!</h2>
          <form action="">
            <input type="text" placeholder="Please Enter Your Email" required />
            <button>Submit!</button>
          </form>
        </div>
      </div>
      <div className="footer-container" onClick={closeNav}>
        <div className="footer-column1">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="after-footer-icons">
            <Link to="">
              <i className="ri-facebook-fill"></i>
            </Link>
            <Link to="">
              <i className="ri-twitter-fill"></i>
            </Link>
            <Link to="">
              <i className="ri-instagram-fill"></i>
            </Link>
            <Link to="">
              <i className="ri-linkedin-fill"></i>
            </Link>
          </div>
        </div>
        <div className="footer-column3">
          <a href="https://solidedgetech.com" target="_blank">www.solidedgetech.com</a>
          <br />
          <a href="">+91 9118811192</a>
          <br />
          <a href="">info@solidedgetech.com</a>
        </div>
        <div className="footer-column2">
          <a href="#home">Home</a>
          <br />
          <a href="#about">About</a>
          <br />
          <a href="#blog">Blogs</a>
          <br />
          <a href="#frequently">FAQs</a>
          <br />
        </div>
        <div className="footer-column4">
          <div className="footer-column4-1">
            <Link to="">Privacy Policy</Link> <br />
            <Link to="">Risk Disclosure</Link> <br />
          </div>
          <div className="footer-column4-2">
            <Link to="">Terms and Conditions</Link>
            <br />
            <Link to="">Security and Fraud Awareness</Link>
            <br />
          </div>
        </div>
      </div>
      <div className="after-footer" onClick={closeNav}>
        <div className="after-footer-text">
          <p>
            Copyright 2023 <Link to="/">SETS.</Link> A venture of Solid Edge
            Technical Services LLC
          </p>
        </div>
        <div className="after-footer-text2">
          <p>
            Created By
            <a href="http://www.webseeder.in/" target="_blank" rel="noreferrer">
              WebSeeder Technologies
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
