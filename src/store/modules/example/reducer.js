const initialState = {
  botaoClidado: false,
};

export default function (state = { initialState }, action = { type: '' }) {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClidado = !newState.botaoClidado;
      return newState;
    }

    default: {
      return state;
    }
  }
}
