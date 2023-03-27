import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'
import logo from '../../images/logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';

function OffcanvasExample({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);


    return (
        <>
            {['md'].map((expand) => (
                <Navbar scrollNav={scrollNav} key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src={logo} alt="" /></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/#">首頁</Nav.Link>
                                    <NavDropdown title="產品分類" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="Rehab">物聯網復健器材</NavDropdown.Item>
                                        <NavDropdown.Item href="IoT">
                                            物聯網運動器材
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="iot">IoT物聯網</NavDropdown.Item>
                                        {/* <NavDropdown.Divider /> */}
                                        <NavDropdown.Item href="ai">
                                            AI影像辨識
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="ar">
                                            AR擴增實境
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="vr">
                                            VR虛擬實境
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="web">
                                            平台設計
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="news">媒體曝光</Nav.Link>
                                    <Nav.Link href="suc">成功案例</Nav.Link>
                                    <Nav.Link href="/#upto">聯絡我們</Nav.Link>
                                </Nav>
                                {/* <Button style={{ marginRight: "1rem", borderColor: "orange", color: "orange" }} variant="outline-success">中/EN</Button> */}
                                <Button variant="outline-success" href="/Login">Search</Button>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;