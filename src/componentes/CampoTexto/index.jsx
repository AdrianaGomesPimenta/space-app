import styled from "styled-components"
import search  from "./search.png"

const ContainerEstilizado = styled.div`
position: relative;
display: inline-block;
`

const InputTexto = styled.input`
height: 56px;
padding: 12px 16px;
border-radius: 10px;
border:2px solid;
border-color: #C98CF1;
background-color: transparent;
box-sizing: border-box;
width: 566px;
color: #D9D9D9;
font-weight: 400;
font-size: 20px;
line-height: 20px;
max-width:  100%;
@media (max-width: 600px) {
    width:320px;}
`

const IconeLupa = styled.img`
position: absolute;
top: 10px;
right: 10px;
width: 38px;
height: 38px;
@media (max-width: 600px) {
    left: 250px;}//Ajuste para a tela de 550px
@media (max-width: 360px) {
    left: 220px;}//Ajuste para a tela de 360px
`

const CampoTexto = ({ setFiltro}) => {
    return (
        <ContainerEstilizado>
            <InputTexto onChange={(evento) => {setFiltro(evento.target.value)}} type="text" placeholder="O que você procura?"/>
            <IconeLupa src={search} alt="Ícone de lupa" />               
        </ContainerEstilizado>
    
    )
}

export default CampoTexto;