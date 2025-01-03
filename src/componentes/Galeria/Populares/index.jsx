import { styled } from "styled-components";
import Titulo from "../../Titulo";

import fotos from './fotos-populares.json';

const ColunaFotos = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(212px, 1fr));
    gap: 16px;
    margin-bottom: 20px;
`;

const Imagem = styled.img`
    width: 100%;
    height: auto;
    border-radius: 20px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 1200px) {
        max-width: 310px;
    }
`;

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #C98CF1;
        transform: translateY(-2px);
    }

    &:focus {
        outline: 3px solid #C98CF1;
    }
`;

const Populares = () => {
    return (
        <section>
            <Titulo $alinhamento="center">Populares</Titulo>
            <ColunaFotos>
                {fotos.map(foto => (
                    <Imagem key={foto.id} src={foto.path} alt={foto.alt} />
                ))}
            </ColunaFotos>
            <Botao aria-label="Ver mais fotos populares">Ver mais</Botao>
        </section>
    );
}

export default Populares;
