import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          何玉林 <code>是</code> 傻子
        </p>
        <a
          className="App-link"
          href="https://baike.baidu.com/item/%E5%82%BB%E5%AD%90/1203902?fr=aladdin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
