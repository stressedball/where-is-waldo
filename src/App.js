import { Header } from './components/ImportCaller';
import { Outlet } from 'react-router-dom'

function App() {

  
  return (

    <div
      className="App"
      style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
      }}>
      
      <Header />

      <div
        id='container'
        style={{
        flex: "1 0 auto",
        }}>
        
        <Outlet />

      </div>
    </div>
  );
}

export default App;
