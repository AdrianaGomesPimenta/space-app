import styled from 'styled-components';
import tags from './tags.json';

const TagsContainer = styled.div`
  display: flex; /* Coloca o título e a div das tags lado a lado */
  align-items: center;
  gap: 24px; /* Espaço entre o título e as tags */
  max-width: 758px;
  margin-top: 56px;
  @media (max-width: 1100px) {
    flex-direction: column; /* Empilha o título acima das tags em telas menores */
    align-items: flex-start; /* Alinha os elementos à esquerda */
    gap: 16px; /* Reduz o espaço entre o título e as tags */
  }
`;

const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
  white-space: nowrap; /* Garante que o título não quebre em várias linhas */
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que as tags quebrem para uma nova linha */
  gap: 16px; /* Espaço entre as tags */
`;

const Tags = ({ setTag }) => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id} onClick={() => setTag(tag.tag)}>
            {tag.titulo}
          </Tag>
        ))}
      </Div>
    </TagsContainer>
  );
};

export default Tags;
