import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const CSSJS = () => {
  return (
    <div className="container">
      <Title>Styled Component</Title>
      <h2 style={{ color: "red" }}>CSS in JavaScript</h2>
    </div>
  );
};

export default CSSJS;
