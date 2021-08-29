import React, { useState } from "react";
import { FaGithub, FaPlus } from "react-icons/fa";
import { Container, Form, SubmitButton } from "./styles";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newRepo);
  }
  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }
  return (
    <div>
      <Container>
        <h1>
          <FaGithub size={25} />
          Meus Repositorios
        </h1>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Repositorios"
            value={newRepo}
            onChange={handleInputChange}
          />
          <SubmitButton>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    </div>
  );
}
