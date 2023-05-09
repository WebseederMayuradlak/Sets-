// import React, { useState } from 'react';
// import Logo from "../Images/Sets Logo.png";


// function onScrollEvent() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [showScrollbar, setShowScrollbar] = useState(true);
//   const handleScroll = (e) => {
//     const currentPosition = e.target.scrollTop;
//     if (currentPosition > scrollPosition && showScrollbar) {
//       setShowScrollbar(false);
//     } else if (currentPosition < scrollPosition && !showScrollbar) {
//       setShowScrollbar(true);
//     }
//     setScrollPosition(currentPosition);
//   };


//   var showData = (e) => {
//     e.preventDefault();
//     var content = document.getElementById("content");

//     var Cursor = document.getElementById("img");
//     if (content.style.display === "block") {
//       content.style.display = "none";
//       Cursor.innerText = "☰";
//     } else {
//       content.style.display = "block";
//       Cursor.innerText = "X";
//     }
//   };

//   return (
//     <div className="mobile-header" onScroll={handleScroll} style={{ overflowY: showScrollbar ? 'scroll' : 'hidden' }}>
//       {/* Your content goes here */}
//       {/* <div className="mobile-header"> */}
//         <div className="mobile-logo">
//           <a href="/">
//             {" "}
//             <img src={Logo} alt="" />{" "}
//           </a>
//         </div>
//         <div className="mobile-icon">
//           <a href="" id="img" onClick={showData}>
//             ☰
//           </a>
//         </div>
//       </div>
    
//   );
// }
// export default onScrollEvent;