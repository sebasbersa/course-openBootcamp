import logo from './logo.svg';
import './App.css';
// import Greeting from './pure/greeting';
// import GreetingF from './componentes/pure/greetingF';
// import TaskListComponent from './componentes/container/task_list';
import ComponenteA from './componentes/container/componenteA';
// import ContactoComponent from './componentes/container/contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ComponenteA/>
      </header>
    </div>
  );
}

export default App;
