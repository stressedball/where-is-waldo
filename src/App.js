import { Header } from './components/ImportCaller';
import { Outlet } from 'react-router-dom'

function App() {

  return (

    <div
      id="App">

      <Header />

      <div
        id='container'>
        
        <Outlet />
      </div>
    </div>
  );
}

export default App;
