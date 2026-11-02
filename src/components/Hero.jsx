import { Container, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="bg-light py-5 text-center">
      <Container>
        <h1 className="display-4">Build faster with React</h1>
        <p className="lead">
          A simple homepage made with React Bootstrap components
        </p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Container>
    </div>
  );
}
