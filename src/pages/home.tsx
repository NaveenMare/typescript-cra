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
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export default function Home() {
  return (
    <>
      <Container>
        <Title>Home</Title>
        <StyledLink to="/StyledComponents">
          <Button>Styled Components</Button>
        </StyledLink>
      </Container>
    </>
  );
}
