import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  padding: 0 130px;
  gap: 20px; */

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  max-width: var(--width);
  padding: 0 130px;
`;

const Total = styled.div`
  margin: 70px 0 16px 0;
  max-width: 1440px;
  padding: 0 130px;
`;

export { Container, Total, Wrapper };
