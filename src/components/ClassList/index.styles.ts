import styled from "styled-components";

const CategoryContainer = styled.span`
  display: block;
  color: white;
  font-weight: bolder;
  font-size: 24px;
  margin-bottom: 40px;
`;

const ClassListContainer = styled.div`
  width: 1030px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const ClassItemContainer = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;

  > img {
    min-width: 100%;
    max-width: 100%;
    min-height: 250px;
    max-height: 250px;
    object-fit: cover;
  }
`;

const NameAndCategory = styled.span`
  display: block;
  color: white;
`;

const ClassTitle = styled.h3`
  color: white;
`;

export {
  CategoryContainer,
  ClassListContainer,
  ClassItemContainer,
  NameAndCategory,
  ClassTitle,
};
