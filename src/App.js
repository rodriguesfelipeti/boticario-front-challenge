import React from 'react';
import './App.scss';
import 'fontsource-roboto';

/* components */
import { Header} from './components'
import { Bottom, Items, Titulo } from './Containers'

function App() {
  return (
    <div className="App">
      <Header />
      <Titulo />
      <Items />
      <Bottom />
    </div>
  );
}

export default App;
