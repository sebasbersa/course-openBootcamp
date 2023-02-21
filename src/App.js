import logo from './logo.svg';
import './App.css';
// import Greeting from './pure/greeting';
// import GreetingF from './componentes/pure/greetingF';
// import TaskListComponent from './componentes/container/task_list';
import ComponenteA from './componentes/container/componenteA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
// import ContactoComponent from './componentes/container/contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <ComponenteA/> */}
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <MiComponenteConContexto /> */}
        <Ejemplo4 nombre="sebastian">
          {/* Todo aqui es tratado como props.children */}
          <h3>
              Este contenido es el children!
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
