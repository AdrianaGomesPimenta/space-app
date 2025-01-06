import {styled} from "styled-components";
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
  padding: 60px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 790px) {
    flex-wrap: wrap; /* Permite que o input fique abaixo da logo */
    justify-content: center; /* Centraliza os elementos */
    gap: 24px; 
  }

  img {
    max-width: 150px;
  }
`;

const MenuHamburguer = styled.div`
  display: none; /* Oculto por padrão */

  @media (max-width: 790px) {
    display: flex; /* Visível abaixo de 790px */
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #c98cf1;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 290px;
    @media (max-width: 600px) {
        margin-right: 100px;}
    
  }

  &:after {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background-color: white;
    margin: 4px 0;
    box-shadow: 0 6px 0 white, 0 -6px 0 white;
  }
`;

const Cabecalho = () => {
  return (
    
    <HeaderEstilizado>
      <MenuHamburguer />
      <img src="/imagens/logo.png" alt="Logo do space" />
      <CampoTexto />   
    </HeaderEstilizado>
  );
};

export default Cabecalho;

