import { styled } from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? "90%" : "460px")};
    max-width: 100%;
    margin: 0 auto; /* Centraliza horizontalmente */
    display: flex;
    flex-direction: column;

    & > img {
        width: 100%;
        max-width: ${(props) => (props.$expandida ? "100%" : "460px")};
        max-height: ${(props) => (props.$expandida ? "80vh" : "auto")}; /* Limita a altura máxima */
        height: auto; /* Mantém a proporção */
        object-fit: contain; /* Garante que a imagem fique ajustada ao contêiner */
        border-radius: 20px 20px 0 0;
        

        /* Media queries para telas menores */
        @media (max-width: 1024px) {
            max-height: ${(props) => (props.$expandida ? "70vh" : "auto")};
        }

        @media (max-width: 768px) {
            max-height: ${(props) => (props.$expandida ? "60vh" : "auto")};
        }

        @media (max-width: 480px) {
            max-height: ${(props) => (props.$expandida ? "50vh" : "auto")};
        }
    }

    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;

        h3 {
            font-family: "GandhiSansBold";
            font-size: 16px;
        }

        h4 {
            flex-grow: 1;
            font-size: 14px; /* Ajusta o tamanho do texto */
        }

        h3, h4 {
            margin: 0;
        }
    }
`;

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* Permite que os elementos do rodapé quebrem para uma nova linha em telas menores */
    @media (max-width: 768px) {
        justify-content: center;
        gap: 8px; /* Espaço entre os elementos */
    }
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
    const iconeFavorito = foto.favorita
        ? "/icones/favorito-ativo.png"
        : "/icones/favorito.png";

    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`}>
            <img src={foto.path} alt={foto.alt} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Rodape>
                    <h4>{foto.fonte}</h4>
                    <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
                        <img src={iconeFavorito} alt="Ícone de favorito" />
                    </BotaoIcone>
                    {!expandida && (
                        <BotaoIcone
                            aria-hidden={expandida}
                            onClick={() => aoZoomSolicitado(foto)}
                        >
                            <img src="/icones/expandir.png" alt="Ícone de expandir" />
                        </BotaoIcone>
                    )}
                </Rodape>
            </figcaption>
        </Figure>
    );
};

export default Imagem;
