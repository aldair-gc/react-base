import { useDispatch } from 'react-redux';

import { Container } from '../../styles/global';
import { Title, Paragrafo } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }

  return (
    <Container>
      <Title>
        Login
        <small>Oi</small>
      </Title>
      <Paragrafo>Paragrafo</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
