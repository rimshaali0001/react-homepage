import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <Container className="text-center">
        <p className="mb-1">© 2026 BrandName</p>
        <a href="#" className="text-light me-3">Privacy</a>
        <a href="#" className="text-light me-3">Terms</a>
        <a href="#" className="text-light">Contact</a>
      </Container>
    </footer>
  );
}
