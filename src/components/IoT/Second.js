import React, { useEffect, useState } from "react";
import '../AI/Second.css'
import api from "../axios";
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive';
import Dropdown from "react-bootstrap/Dropdown";
function Second() {

    const [post, setPost] = React.useState([])
    const isMobile = useMediaQuery({ maxWidth: 820 });
    const [activeKey, setActiveKey] = useState('first');
    const handleTabSelect = () => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
        });
    }
    useEffect(() => {
        async function fetchData() {
            const res = await api.getProduct.get('/IoT');
            setPost(res.data.productList);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (post.length > 0) {
            setActiveKey(post[0].id);
        }
    }, [post]);
    useEffect(() => {
        const handleScroll = () => {
            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                video.pause();
            });
        };
        window.addEventListener('check', handleScroll);
        return () => {
            window.removeEventListener('check', handleScroll);
        };
    }, []);

    const handleDropdownSelect = (eventKey) => {
        setActiveKey(eventKey);
    };

    return (
        <>
            <div className="wrapper">
                <div>
                    <h1 className="nana">IoT物聯網</h1>
                </div>
                <Tab.Container
                    id="left-tabs-example"
                    activeKey={activeKey}
                    onSelect={(k) => { setActiveKey(k); handleTabSelect(); }}
                >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Row style={{ width: "90%", padding: "2rem 0" }}>
                            <Col sm={3} style={{ backgroundColor: "lightgray" }}>
                                {isMobile ? (
                                    <Dropdown onSelect={handleDropdownSelect}>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            {post.find((item) => item.id === activeKey)?.name || '選擇項目'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {post.map((item, index) => {
                                                return (
                                                    <Dropdown.Item eventKey={item.id} key={item.id}>{item.name}</Dropdown.Item>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                ) : (
                                    <Nav variant="pills" className="flex-column">
                                        {post.map((item, index) => {
                                            return (
                                                <Nav.Item key={item.id}>
                                                    <h3><Nav.Link eventKey={item.id}>{item.name}</Nav.Link></h3>
                                                </Nav.Item>
                                            )
                                        })}
                                    </Nav>
                                )}
                            </Col>
                            <br />
                            <Col sm={9} >
                                {post.map((item, index) => {
                                    return (
                                        <>
                                            <Tab.Content key={item.id} style={{ backgroundColor: "lightgray" }}>
                                                <Tab.Pane eventKey={item.id}>
                                                    <div className="ttt">
                                                        <div>
                                                            <h1 className="ptop">{item.name}</h1>
                                                        </div>
                                                        {item.status === "1" ? (
                                                            <div style={{ display: "flex", width: "90%", alignItems: "center" }}>
                                                                <img src={item.img1} className="img" alt="" style={{ marginRight: "1.5rem" }} />
                                                                <p style={{ margin: "0", textIndent: "2em", textAlign: "justify" }}>{item.desc1}</p>
                                                            </div>
                                                        ) : (
                                                            <div style={{ display: "flex", width: "90%", alignItems: "center" }}>
                                                                <p style={{ margin: "0", textIndent: "2em", textAlign: "justify", paddingRight: "0.75rem" }}>{item.desc1}</p>
                                                                <img src={item.img1} className="img" alt="" style={{ paddingLeft: "0.75rem" }} />
                                                            </div>
                                                        )}
                                                        <br />
                                                        {item.status === "1" ? (
                                                            <div style={{ display: "flex", width: "90%", alignItems: "center" }}>
                                                                <p style={{ margin: "0", textIndent: "2em", textAlign: "justify", paddingRight: "0.75rem" }}>{item.desc2}</p>
                                                                <img src={item.img2} className="img" alt="" style={{ paddingLeft: "0.75rem" }} />
                                                            </div>
                                                        ) : (
                                                            <div style={{ display: "flex", width: "90%", alignItems: "center" }}>
                                                                <img src={item.img2} className="img" alt="" style={{ marginRight: "1.5rem" }} />
                                                                <p style={{ margin: "0", textIndent: "2em", textAlign: "justify" }}>{item.desc2}</p>
                                                            </div>
                                                        )}
                                                        <video width="" height="" controls src={item.chvideo} style={{ marginTop: "1.5rem", width: "90%", marginBottom: "1.5rem" }} />
                                                        <div style={{ display: "flex", width: "90%", alignItems: "center" }}>
                                                            <img src={item.img3} className="img" alt="" style={{ paddingRight: "0.75rem" }} />
                                                            <img src={item.img4} className="img" alt="" style={{ paddingLeft: "0.75rem" }} />
                                                        </div>
                                                        <img src={item.img5} className="img" alt="" style={{ paddingleft: "0.75rem" }} />
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </>
                                    )
                                })}
                            </Col>
                        </Row>
                    </div>
                </Tab.Container>
            </div>
        </>
    );

}



export default Second;