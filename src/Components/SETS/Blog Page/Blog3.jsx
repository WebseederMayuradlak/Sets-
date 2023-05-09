import React from "react";

import Logo from "../../Images/Sets Logo.png";
import { Link } from "react-router-dom";
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
            <Link to="/">HOME</Link>
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
                <Link to="/">HOME</Link>
              </li>
              <li  onClick={closeNav}>
                <Link to="/">ABOUT</Link>
              </li>
              <li  onClick={closeNav}>
                <Link to="/">SERVICES</Link>
              </li>
              <li  onClick={closeNav}>
                <Link to="/">PROJECTS</Link>
              </li>
              <li  onClick={closeNav}>
                <Link to="/">CONTACT US</Link>
              </li>
              </div>
            </ul>
          </div>
        </div>
      <div className="blog-main-container" onClick={closeNav}>
        <div className="blog-left-part" onClick={closeNav}>
          <div className="blog-journal" onClick={closeNav}>
            <img
              src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
              alt=""
            />
            <div className="blog-journal-content">
              <Link to="">Technology</Link>
              <div className="journal">
                <div className="journal-date">
                  <i className="ri-calendar-2-fill"></i>
                  <p>05 Dec,2020</p>
                </div>
                <div className="journal-date">
                  <p>By</p>
                  <Link to="">Park Lee</Link>
                </div>
              </div>
              <h1>The Ultimate Guide to Plumbing Installation and Repair</h1>
              <p>
                Plumbing systems are critical to the proper operation of any
                structure, whether residential or business. They provide
                necessities like water supply, garbage disposal, and heating.
                Plumbing systems, on the other hand, are complex and require
                regular maintenance to ensure optimum performance and avoid
                potential hazards. In this blog, we will discuss the
                significance of correct plumbing installation and repair, as
                well as how SETS can help you in this regard.
              </p>
              <h2>The Advantages of Professional Installation</h2>
              <h3>Benefits of Professional Installation</h3>
              <p>
                Professional plumbing installation is critical for assuring peak
                efficiency and avoiding hazards. Improper installation can
                result in leaks, burst pipes, and other problems that cause harm
                to your property and offer health risks to occupants. SETS
                provides expert installation services, ensuring that all systems
                are properly installed and in accordance with industry
                standards.
              </p>
              <h3>Common Plumbing Problems</h3>
              <p>
                Plumbing systems are prone to a variety of problems, including
                leakage, clogs, and corrosion. These problems can cause
                significant harm to your property as well as health risks to
                occupants. SETS can help you spot and repair common plumbing
                issues by utilizing cutting-edge technologies and techniques to
                resolve issues quickly and effectively.
              </p>
              <h3>Regular Maintenance</h3>
              <p>
                Maintaining your plumbing system regularly is critical for
                extending its lifespan and avoiding possible hazards. To
                guarantee optimal efficiency and safety, SETS company provides
                comprehensive maintenance services such as cleaning,
                inspections, and testing. Regular maintenance can also aid in
                the detection of potential issues before they become significant
                issues, saving you time and money in the long run.
              </p>
              <h3>Water Heater Installation and Repair: </h3>
              <p>
                Water heaters are important to any plumbing system because they
                provide hot water for showers, baths, and other everyday
                activities. SETS provides expert water heater installation and
                repair services, ensuring that your system operates at peak
                efficiency and provides at peak efficiency and providing hot
                water on demand. This can help you avoid energy waste and lower
                your utility costs.
              </p>
              <h3>Emergency Plumbing Services</h3>
              <p>
                Plumbing emergencies can occur at any time, causing significant
                damage to your property and posing potential health hazards.
                SETS company offers emergency plumbing services, available 24/7,
                to assist you in resolving issues quickly and effectively. This
                can help prevent further damage and minimize the impact of
                plumbing emergencies.
              </p>
              <h3>Professional Expertise</h3>
              <p>
                Plumbing systems require technical expertise and knowledge to
                install and repair correctly. SETS company has a team of skilled
                technicians and engineers who can provide professional
                installation and repair services. They can also provide advice
                on the best systems and technologies for your specific needs.
                This can help ensure that you have the most efficient and
                cost-effective plumbing system possible. In conclusion, properly
                installing and maintaining plumbing systems are crucial for
                ensuring optimal performance and preventing potential hazards.
                SETS company can provide professional installation and repair
                services, helping you achieve these goals. To find out more
                about our offerings and how we can help you with your plumbing
                requirements, get in touch with us right away. Our team of
                experts is ready to help you keep your plumbing system in top
                condition.
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
              <Link to="">
                <i class="ri-search-2-line"></i>
              </Link>
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
                <Link to="">
                The Ultimate Guide to Plumbing Installation and Repair
                </Link>
                <p>
                  <i class="ri-time-line"></i>12 Feb, 2020
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
                <Link to="">
                The Ultimate Guide to Electromechanical Equipment Installation
                and Maintenance
                </Link>
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
                <Link to="">
                The Ultimate Guide to Plumbing Installation and Repair
                </Link>
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
                  <Link to="">Technical Services</Link>
                </li>
                <li>
                  <Link to="">Engineering Design</Link>
                </li>
                <li>
                  <Link to="">Facilities Management</Link>
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
                <Link to="">Fashion</Link>
                <Link to="">Education</Link>
                <Link to="">Nation</Link>
              </div>
              <div className="blog-tags-row">
                <Link to="">Study</Link>
                <Link to="">Health</Link>
                <Link to="">Food</Link>
              </div>
              <div className="blog-tags-row">
                <Link to="">Travel</Link>
                <Link to="">Science</Link>
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
            <input type="text" placeholder="Name*" name="name" required />
            <br />
            <input
              type="text"
              placeholder="Email*"
              name="email"
              required
            />
            <br />
            <input type="text" placeholder="Comment" name="comments" /> <br />
            <button>Post Comments</button>
          </form>
        </div>
      </div>
      <div className="footer-container" onClick={closeNav}>
        <div className="footer-column1">
        <Link to="/">  <img src={Logo} alt="" /> </Link>
          <div className="after-footer-icons">
            <Link to="">
              
              <i class="ri-facebook-fill"></i>
            </Link>
            <Link to="">
              <i class="ri-twitter-fill"></i>
            </Link>
            <Link to="">
              <i class="ri-instagram-fill"></i>
            </Link>
            <Link to="">
              
              <i class="ri-linkedin-fill"></i>
            </Link>
          </div>
        </div>
        <div className="footer-column3">
          <ul>
            <Link to="">www.sets.com</Link> <br />
            <Link to="">+91 9988776655</Link> <br />
            <Link to="">info@sets.com</Link>
          </ul>
        </div>
        <div className="footer-column2">
          <Link to="">Home</Link>
          <br />
          <Link to="">Company Overview</Link>
          <br />
          <Link to="">Blogs</Link>
          <br />
          <Link to="">FAQs</Link>
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
            Copyright 2023 <Link to="">SETS.</Link> A venture of Solid Edge
            Technical Services LLC
          </p>
        </div>
        <div className="after-footer-text2">
          <p>
            Created By
            <a href="http://www.webseeder.in/" target="_blank" rel='noreferrer'>WebSeeder Technologies</a>
            </p>
        </div>
      </div>
    </div>
  );
}
