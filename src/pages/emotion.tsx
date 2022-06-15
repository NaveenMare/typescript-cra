import styled from "@emotion/styled";

type Props = {
  primary?: boolean;
  lines?: boolean;
};

const Title = styled.div`
  font-size: 5rem;
  text-align: center;
  color: red;
`;

const Container = styled.div<Props>`
  text-align: center;
  ${(props) => props.lines && "color: green"};
`;

const Button = styled.button<Props>`
  color: ${(props) => (props.primary ? "blue" : "green")};
  margin: 10px;
  font-size: large;
`;

export default function EmotionPage() {
  return (
    <>
      <Title>Emotion</Title>
      <Container>
        <Button>hello</Button>
        <Button primary>Alert</Button>
      </Container>
      <Container lines>
        <div>Line 1</div>
        <div>Line 2</div>
        <div>Line 3</div>
        <div>Line 4</div>
      </Container>
    </>
  );
}
