import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function EmbroideryTutorial() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Embroidery Tutorial 1</h1>
            <p>This is the first tutorial for embroidery.</p>
            <Card className="mb-3">
              <Card.Body>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/OWv6Ypzn9dg?si=Q615Ykchqj7sTNxJ"
                  title="Embroidery Tutorial"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h1>Embroidery Tutorial 2</h1>
            <p>This is another great tutorial for embroidery.</p>
            <Card className="mb-3">
              <Card.Body>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/2ATJuHN-C9A?si=oUtYWEWmaoOwu9Gn"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EmbroideryTutorial;