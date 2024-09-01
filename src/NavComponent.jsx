// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { CiSearch } from "react-icons/ci";
// import { GiKnifeFork } from "react-icons/gi";

// function NavComponent() {
//   return (
//     <Navbar expand="lg" className="nav">
//       <Container fluid>
//         <Navbar.Brand href="#"></Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="offcanvasNavbar"
//           className="nav-open-btn"
//         />
//         <Navbar.Offcanvas
//           id="offcanvasNavbar"
//           aria-labelledby="offcanvasNavbarLabel"
//           placement="end"
//           className="nav-offcanvas"
//         >
//           <Offcanvas.Header closeButton className="nav-title">
//             <Offcanvas.Title id="offcanvasNavbarLabel">
//               <h2>Learn More</h2>
//               <GiKnifeFork className="btn-close" />
//             </Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body className="nav-links">
//             <Nav className="justify-content-end flex-grow-1 pe-3">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">About</Nav.Link>
//               <Nav.Link href="#link">Services</Nav.Link>
//               <Nav.Link href="#link">Gallery</Nav.Link>
//               <Nav.Link href="#link">Contact</Nav.Link>
//             </Nav>
//             <div className="search-container">
//               <input
//                 type="text"
//                 className="nav-search"
//                 placeholder="Search for recipe..."
//               />
//               <CiSearch className="search-icon" />
//             </div>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavComponent;

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CiSearch } from "react-icons/ci";
import { GiKnifeFork } from "react-icons/gi";

function NavComponent() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="nav-open-btn"
          onClick={handleShow} // Open Offcanvas
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show} // Control visibility
          onHide={handleClose} // Handle close with backdrop click
          className="nav-offcanvas"
        >
          <Offcanvas.Header closeButton className="nav-title">
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <h2>Learn More</h2>
              <GiKnifeFork className="btn-close-icon" onClick={handleClose} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="nav-links">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Gallery</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <div className="search-container">
              <input
                type="text"
                className="nav-search"
                placeholder="Search for recipe..."
              />
              <CiSearch className="search-icon" />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
