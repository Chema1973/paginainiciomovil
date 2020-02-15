import React from 'react';
// import logo from './logo.svg';
import { DataProvider } from './components/DataContext';
import './App.css';
import './assets/css/imgHome.css';
import ImgHome from "./components/ImgHome";
import ComboBoxContainer from './components/ComboBoxContainer';

function App() {
  const datosDinamicos = {
    widthScreen: 0,
    heightScreen: 0,
    widthImg: 0,
    heightImg: 0,
    displayTxtMouse: 'none'
}

return (
  <DataProvider value={datosDinamicos}>
  <div className="App">
    <header className="App-header">
      <ImgHome/>
      <ComboBoxContainer />
    </header>
  </div>
  </DataProvider>
);
}

export default App;
