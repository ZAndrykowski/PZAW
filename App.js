// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Reserve from './components/Reserve/Reserve';
import Tables from './components/Tables/Tables';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Login />
      <Reserve />
      <Tables />

    </div>
  );
}

export default App;
