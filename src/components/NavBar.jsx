
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../components/NavBar.css"


function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Link to="/">
                    <h3>SucuRex</h3>
                </Link>
                { /* <Navbar.Brand href="#home">SucuRex</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="flex">
                    <Nav className="me-auto flex ">
                        <Link to="/category/ofertas">
                            ¡¡¡Ofertas!!!
                        </Link>
                        <Link to="/category/Plantas de interior" className="row">
                            Plantas de interior
                        </Link>
                        <Link to="/category/Plantas de exterior" className="row">
                            Plantas de exterior
                        </Link>
                        <Link to="/category/Macetas">
                            Macetas
                        </Link>
                        <Link to="/category/Insumos">
                            Insumos
                        </Link>
                        <Link to="/category/Decoracion">
                            Decoracion
                        </Link>
                        <Link to="/subcategory/todos">
                            Todos
                        </Link>
                        <Nav.Link href="#cartWidget"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;
