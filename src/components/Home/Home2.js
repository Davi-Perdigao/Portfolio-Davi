import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE EU ME <span className="purple"> APRESENTAR </span>
            </h1>
            <p className="home-about-body">
            <b className="purple">Hello, World!</b> Meu nome é <b className="purple">Davi,</b> tenho 20 anos e sou de Divinópolis-MG (Brasil). Me apaixonei por programação desenvolvendo um simples projeto de ensino fundamental na escola.
              <br />
              <br />Algum tempo depois esse projeto cresceu na medida em que aprofundava meus estudos, 
              foi premiado <b className="purple">internacionalmente</b> e a partir desse momento decidi que seguiria na carreira de <b className="purple">programador</b>.
              Desde então, ingressei na faculdade de <b className="purple">Ciências da Computação</b> e atualmente estou no <b className="purple">6º período</b>.
              <br />
              <br />As minhas áreas de interesse são as de construção de novas &nbsp;
              <i>
                <b className="purple">Tecnologias e desenvolvimento Web, </b> além de áreas 
                relacionadas à {" "}
                <b className="purple">
                  Educação.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, também aplico minha paixão por desenvolver produtos com 
              <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Angular
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE</h1>
            <p>
            Sinta-se à vontade para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Davi-Perdigao"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:davivcperdigao@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/davi-perdig%C3%A3o-5292051b7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/daviperdigao_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
