import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import estacionamento from "../../Assets/Projects/estacionamento.png";
import mundo_invertido from "../../Assets/Projects/mundo_invertido.png";
import todo from "../../Assets/Projects/todo.png";
import spiderman from "../../Assets/Projects/spiderman.png";
import spread from "../../Assets/Projects/spread.png";
import marvelfight from "../../Assets/Projects/marvel.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos </strong>Recentes
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spiderman}
              isBlog={false}
              title="Multiverse Spider-Man"
              description="Aplicação Web onde é possível visualizar todos os trailers, sinópses e outras informações sobre os filmes do 'amigão da vizinhança' criados até 2022. Site com transições, animações e efeitos, através das ferramentas HTML, CSS e JavaScript, algumas das abordagens de posicionamento de elementos mais utilizadas quando se trata de responsividade. E claro, utilizando como tema esse super herói tão querido."
              ghLink="https://github.com/Davi-Perdigao/Multiverse-SpiderMan"
              demoLink="https://davi-perdigao.github.io/Multiverse-SpiderMan/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marvelfight}
              isBlog={false}
              title="Marvel-Fight"
              description="Criação de uma interface mostrando a seleção de personagens para um jogo de luta. Para escolher o personagem do Player 1, basta passar o cursor do mouse sobre ele e aparecerá o nome e a imagem do personagem em questão, no lado esquerdo. O Player 2 já foi escolhido automaticamente, ficando do lado direito. O site é responsivo e possui alterações para mobile, ficando mais leve. Também possui autoplay e função mute."
              ghLink="https://github.com/Davi-Perdigao/Marvel-Fight"
              demoLink="https://davi-perdigao.github.io/Marvel-Fight/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mundo_invertido}
              isBlog={false}
              title="Mundo Invertido"
              description="Criação da interface responsiva de uma página inspirada na tão aclamada série Stranger Things, com theme switcher utilizando HTML, CSS e JavaScript, além de integrar um formulário de inscrição com um banco de dados Firebase."
              ghLink="https://github.com/Davi-Perdigao/Mundo_Invertido"
              demoLink="https://davi-perdigao.github.io/Mundo_Invertido/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List"
              description="Seja para cumprir as trefas diárias, organizar as compras do mês ou definir as próximas metas no trabalho, ter um aplicativo de “to do” é uma das formas mais eficazes de manter a sua lista de tarefas em ordem. Para quem dispensa papel e caneta, e prefere ter tudo na ponta do dedo (ou do mouse) em qualquer lugar, desenvolvi essa aplicação."
              ghLink="https://github.com/Davi-Perdigao/Spread_FullStack_Developer/tree/main/Javascript/To%20Do%20List"
              demoLink="https://davi-perdigao.github.io/Spread_FullStack_Developer/Javascript/To%20Do%20List/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estacionamento}
              isBlog={false}
              title="Estacionamento"
              description="Página web na qual é possível adicionar veículos por nome e placa (obrigatoriamente) ao pátio de um estacionamento. Exibe todos os veículos adicionados e suas respectivas informações, além da data de entrada e uma função para removê-los. Quando o veículo for removido, para o estacionamento ter o controle de quanto cobrar do proprietário, exibe-se na tela a informação de quanto tempo aquela veículo permaneceu no estacionamento."
              ghLink="https://github.com/Davi-Perdigao/Spread_FullStack_Developer/tree/main/Estacionamento"
              demoLink="https://davi-perdigao.github.io/Spread_FullStack_Developer/Estacionamento/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spread}
              isBlog={false}
              title="Bootcamp SPREAD"
              description="O Bootcamp Spread Fullstack Developer foi um programa de estudos intensivos que participei, para desenvolvedores que querem evoluir em sua jornada de desenvolvimento de software com uma base sólida em tecnologias essenciais de Front-End e Back-End."
              ghLink="https://github.com/Davi-Perdigao/Spread_FullStack_Developer"
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
