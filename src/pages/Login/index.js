import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/global';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oi</small>
      </Title>
      <Paragrafo>Paragrafo</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
