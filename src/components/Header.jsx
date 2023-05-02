import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Champions} from '@/features/champions';
import {Summoner} from '@/features/summoners';
import {Objects} from '@/features/objects';
import { Route } from 'wouter';
import { Switch } from 'wouter';

export default function Header() {
  return (
    <>
        <Navbar bg="primary" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/">Swain</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/summoners">Invocador</Nav.Link>
            <Nav.Link href="/champions">Campeones</Nav.Link>
            <Nav.Link href="/objects">Objetos</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Switch>
          <div className="mt-5">
            <Route path="/summoners" component={Summoner} />
            <Route path="/champions" component={Champions} />
            <Route path="/objects" component={Objects} />
          </div>
        </Switch>
        
    </>
        
  );
}