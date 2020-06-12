import React from 'react';
import './App.scss';
import 'fontsource-roboto';
import { Provider } from 'react-redux';
import { Store } from './store';

/* components */
import { Header, Bottom } from './components'
import { Items, Titulo } from './Containers'

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Header />
        <Titulo />
        <Items />
        <Bottom />
      </Provider>
    </div>
  );
}

export default App;
