import React from 'react';
import './App.scss';
import 'fontsource-roboto';
import { Provider } from 'react-redux';
import { Store } from './store';

/* components */
import { Header } from './components'
import { Bottom, Items, Titulo } from './Containers'

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
