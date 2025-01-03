import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const BarraLateralEstilizada = styled.aside`
  display: block; /* Visível por padrão */
  
  @media (max-width: 790px) {
    display: none; /* Esconde em telas menores */
  }
`;

const ListaEstilizada = styled.ul`
list-style: none;
padding: 20px;
margin: 0;
width: 236px;
/* @media (max-width: 768px) {
    width:212px;
    padding:10px;} */
`

const BarraLateral = () => {
    return(
        <BarraLateralEstilizada>
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao 
                        iconeAtivo="icones/home-ativo.png" 
                        iconeInativo="icones/home-inativo.png" 
                        ativo={true}
                    >
                        Inicio
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="icones/mais-vistas-ativas.png" 
                        iconeInativo="icones/mais-vistas-inativo.png" 
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="icones/mais-curtidas-ativo.png" 
                        iconeInativo="icones/mais-curtidas-inativo.png" 
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="icones/novas-ativas.png" 
                        iconeInativo="icones/novas-inativo.png" 
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="icones/surpreenda-me-ativo.png"
                        iconeInativo="icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>                
                </ListaEstilizada>         
            </nav>      
        </aside> 
        </BarraLateralEstilizada>   
    )
}

export default BarraLateral;