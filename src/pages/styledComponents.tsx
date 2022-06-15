import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  primary?: boolean;
};

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: red;
`;
const Container = styled.div`
  text-align: center;
`;
const Button = styled.button<Props>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${(props) => (props.primary ? "blue" : "palevioletred")};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: large;
`;
const ExtendedButton = styled(Button)`
  color: purple;
  border: 2px solid purple;
`;
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export default function StyledCompenents() {
  return (
    <>
      <StyledLink to="/">
        <Title>Styled Components</Title>
      </StyledLink>
      <Container>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <ExtendedButton>Extended</ExtendedButton>
        <Button as="a" href="https://www.google.com/" target="_blank">
          Google
        </Button>
      </Container>
      <Container></Container>
    </>
  );
}
