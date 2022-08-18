import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  botaoClidado: false,
};

const reducer = (state = initialState, action = {}) => {
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
};

const store = configureStore({ reducer });

export default store;
