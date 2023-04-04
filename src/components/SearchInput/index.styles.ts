import styled from "styled-components";

const primaryColor = "#015FCC";
const secondaryColor = "#742DDD";

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-color: ${primaryColor};
  border-radius: 4px;
  padding: 0 10px;
`;

const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid ${secondaryColor};

  > li {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  > li:not(:last-child) {
    border-bottom: 1px solid ${secondaryColor};
  }
`;

export { Container, Input, Dropdown };
