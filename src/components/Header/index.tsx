import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="just eat logo" />
        <h1>just eat</h1>
      </Content>
    </Container>
  );
}
