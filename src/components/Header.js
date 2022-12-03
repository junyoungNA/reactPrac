import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const shoes = useSelector((state) => state.shoes);
  const navigate = useNavigate();

  const onNavigate = (e) => {
    let inputName = e.target.name;
    inputName = inputName ? inputName : "/";
    navigate(`${inputName}`, { state: { shoes, num: 0 } });
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={onNavigate}>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link name="/" onClick={onNavigate}>
            홈
          </Nav.Link>
          <Nav.Link name="/detail" onClick={onNavigate}>
            상세페이지
          </Nav.Link>
          <Nav.Link name="/cart" onClick={onNavigate}>
            장바구니
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
