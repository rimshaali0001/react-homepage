import { Container, Row, Col, Card } from "react-bootstrap";

export default function Features() {
  return (
    <Container id="features" className="py-5">
      <h2 className="text-center mb-4">Features</h2>
      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Fast</Card.Title>
              <Card.Text>Vite makes dev feel instant</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Reusable</Card.Title>
              <Card.Text>Components stack like LEGO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Clean</Card.Title>
              <Card.Text>Ready made UI saves time</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
