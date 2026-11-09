import logo from './logo.svg';
import './App.css';

function App() {
  
  const url = 'https://via.placeholder.com/150'
  const name = 'Daniel'
  function soma(a,b){
    return a+b
  }


  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Ola {name}!!</p>
      <p>Soma: {soma(1,2)}</p>
      <img src = {url} alt="Minhaimg"/>
    </div>
  );
}

export default App;
