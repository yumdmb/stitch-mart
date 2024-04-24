//EmbroideryTutorial.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function EmbroideryTutorial() {
    return (
        <Container>
            <Row className="tutorial-row">
                <Col>
                    <div className="tutorial-info">
                        <h1>How to Embroider by Hand</h1>
                        <p>The necessary supplies: fabric (linen or linen-cotton blend recommended), embroidery hoop, embroidery floss, needles, scissors, and a tracing pen or light table.</p>
                    </div>
                </Col>
                <Col>
                    <Card className="tutorial-card">
                        <Card.Body>
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/PnNuzgSplaE?si=MbrkypgjHEEvmetd"
                                title="Embroidery Tutorial 1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="tutorial-row">
                <Col>
                    <Card className="tutorial-card">
                        <Card.Body>
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/2ATJuHN-C9A?si=oUtYWEWmaoOwu9Gn"
                                title="Embroidery Tutorial 2"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <div className="tutorial-info">
                        <h1>Step by Step : Embroider for Beginners</h1>
                        <p>This video teaches you the basics of embroidery, including the necessary supplies, transferring patterns, and different stitches.</p>
                    </div>
                </Col>
            </Row>
            <Row className="tutorial-row">
                <Col>
                    <div className="tutorial-info">
                        <h1>Start and End Embroidery Stitches</h1>
                        <p>This video is a short tutorial on how to start and end embroidery stitches, specifically focusing on two methods for ending stitches.</p>
                    </div>
                </Col>
                <Col>
                    <Card className="tutorial-card">
                        <Card.Body>
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/aQEbtmsC2fU?si=nwKqDktYglZzCgBi"
                                title="Embroidery Tutorial 3"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default EmbroideryTutorial;
