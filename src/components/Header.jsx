import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route } from 'wouter';
import {ChampionList} from '@/features/champions';
import {SummonerProfile} from '@/features/summoners';


export default function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Swain</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/summoners">Invocador</Nav.Link>
          <Nav.Link href="/champions">Campeones</Nav.Link>
          <Nav.Link href="/summoners">Objetos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Route path="/champions" component={ChampionList} />
      <Route path="/summoners" component={SummonerProfile} />
    </>
  );
}