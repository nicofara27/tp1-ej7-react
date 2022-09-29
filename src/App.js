import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import EmpleadoList from './components/EmpleadoList';

function App() {
  return (
    <Container className="App">
      <h1 className='display-2 text-center my-4'>Lista de empleados</h1>
      <EmpleadoList/>
    </Container>
  );
}

export default App;
