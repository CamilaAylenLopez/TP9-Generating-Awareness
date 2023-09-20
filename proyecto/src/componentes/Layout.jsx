import React from "react";
import './Layout.css';
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logojuegps from '../assets/img/logojuegps.png';
import Usuario from './Usuario';

const Layout = () => {
    return (
        <React.Fragment>
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <img src={logojuegps} className="imagenTamaño" alt="logo"/>
                    <Navbar.Brand className="espacio">Eco-SalvandoAlPlaneta.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={' '} className='linkEstilo espacio posicionCorrecta'>Home</Link>
                            <Link to={'/Informacion'} className='linkEstilo posicionCorrecta espacio'>Informacion</Link>
                            <Link to={'/PuntosVerdes'} className='linkEstilo posicionCorrecta espacio'>Mapa</Link>
                            <Link to={'/Perfil'} className='linkEstilo posicionCorrecta espacio'>Perfil</Link>
                            <NavDropdown title="Juegos" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to={'/JuegoUno'} className='linkEstilo'>Reciclar</Link></NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to={'/JuegoDos'} className='linkEstilo'>Trivia</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item><Link to={'/JuegoTres'} className='linkEstilo'>Sopa de letras</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </React.Fragment>
    )
}

export default Layout