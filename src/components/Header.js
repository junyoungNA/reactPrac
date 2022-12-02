import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const shoes = useSelector((state) => state.shoes);
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          Navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            홈
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/detail", { state: { shoes, num: 0 } });
            }}
          >
            상세페이지
          </Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
