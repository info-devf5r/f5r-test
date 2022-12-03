import React from "react";

import Container from "./styled";

function Header() {
  return (
    <Container>
      <div className="group_A">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="/home">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Assistencia</li>
              </a>
              <div className="linha"  />
              <a href="/filmes">
                <li>Filmes</li>
              </a>
              <a href="/series">
                <li>Series</li>
              </a>
              <a href="/lives">
                <li>Canais de tv</li>
              </a>
              <div className="linha"  />
              <a href="/">
                <li>Sair</li>
              </a>
            </ul>
          </div>
        </nav>
        <input type="text" className="buscar" placeholder="buscar" />
      </div>
    </Container>
  );
}

export default Header;
