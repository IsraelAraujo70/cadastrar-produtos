import React from 'react';
import GlobalStyles, { Container } from './styles/GlobalStyles';
import Formulario from './components/Formulario';
import ListaDeProd from './components/ListaDeProd';
import { Provider } from 'react-redux';
import store from './store/store';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Container>
          <Formulario/>
          <ListaDeProd/>
        </Container>
      </Provider>
    </>
  );
};

export default App;