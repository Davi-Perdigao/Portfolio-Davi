import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, World! Meu nome é <span className="purple">Davi Perdigão </span>
            sou de <span className="purple">Divinópolis-MG (Brasil).</span>
            <br />Sou apaixonado por conhecimento e tecnologia. 
            Atualmente ocupo o cargo de FullStack Developer, com foco em desenvolvimento Web.
            <br />
            <br />
            Além da programação, algumas outras atividades que adoro fazer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Filmes, Séries e HQ's
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esforce-se para construir coisas que fazem a diferença!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
