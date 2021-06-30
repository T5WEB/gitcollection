import React from "react";
import { FiChevronRight } from "react-icons/fi";

import { Title, Form, Repos } from "./styles";
import Logo from "../../assets/logo.svg";

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt="GitCollection" />

      <Title>Catálogo de repositórios do GitHub </Title>

      <Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/68967867?v=4"
            alt="Repositório"
          />
          <div>
            <strong>Aluiziodeveloper/mini-curso-react-js</strong>
            <p>Repositorio do mini curso gratuito de react.js</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
