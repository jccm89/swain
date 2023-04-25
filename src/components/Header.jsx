import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route } from 'wouter';
import ChampionsPage from '../features/Champions';


export default function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Swain</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Champions">Campeones</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Route path="/Champions" component={ChampionsPage} />

    </>
  );
}