import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from "react";


function MyNavbar() {
  
  let menuRef = useRef()
  
  let menuToggle = ()=> menuRef.current.classList.toggle("active")
  
  let headerRef = useRef()
  
  useEffect(()=>{
    
    window.addEventListener("scroll", ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("header__shrink")
      }
      
      else{
        headerRef.current.classList.remove("header__shrink")
      }
    })
  },[headerRef])
  
  
  return (
    
    <header ref={headerRef}>
        <div className="container">
          <div className="logo">
            <a href="#home">اسلامنا</a>
          </div>
          
          <nav ref = {menuRef} onClick = {menuToggle}>
            <div className="menu">
            <div className="logo">
              <a href="#home">اسلامنا</a>
            </div>
            <ul>
              <li>
                <a href="#home">الصفحة الرئيسية</a>
              </li>
              <li>
                <a href="#quran" >القران الكريم</a>
              </li>
              <li>
                <a href="#quran-translation" >تفسير القران الكريم</a>
              </li>
              <li>
                <a href="#hadith"> الحديث الشريف</a>
              </li>
              <li>
                <a href="#azkar">اذكار</a>
              </li>
            </ul>
            
            </div>
          </nav>
          
          <div className="menu-icon" onClick = {menuToggle}>
            <div><FontAwesomeIcon icon={faBars}/></div>
          </div>
        </div>
    </header>
    
    
    // <>
    //   <Navbar key={"md"} expand="md" ref={headerRef}>
    //     <Container>
    //       <Navbar.Brand href="#">اسلامنا</Navbar.Brand>
    //       <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}>
    //         <FontAwesomeIcon icon={faBars} />
    //       </Navbar.Toggle>
    //       <Navbar.Offcanvas
    //         id={`offcanvasNavbar-expand-md`}
    //         aria-labelledby={`offcanvasNavbarLabel-expand-md`}
    //         placement="end"
    //       >
    //         <Offcanvas.Header closeButton>
    //           <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
    //             اسلامنا
    //           </Offcanvas.Title>
    //         </Offcanvas.Header>
    //         <Offcanvas.Body>
    //           <Nav className="justify-content-end flex-grow-1 pe-3">
    //             <Nav.Link href="#home">الصفحة الرئيسية</Nav.Link>
    //             <Nav.Link href="#quran">القران الكريم</Nav.Link>
    //             <Nav.Link href="#quran-translation">تفسير القران الكريم</Nav.Link>
    //             <Nav.Link href="#hadith">الحديث الشريف</Nav.Link>
    //             <Nav.Link href="#azkar">اذكار</Nav.Link>
    //           </Nav>
    //         </Offcanvas.Body>
    //       </Navbar.Offcanvas>
    //     </Container>
    //   </Navbar>
    // </>
  );
}

export default MyNavbar;
