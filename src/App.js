import './App.scss';
import { AreaContextProvider } from './context/AreaContext';
import { UserContextProvider } from './context/UserContext';
import Legend from './Legend';
import Map from './Map';
import Navbar from './Navbar';

function App() {
  return (
    <AreaContextProvider>
      <UserContextProvider>
        <div className='App'>
          <Navbar />
          <Legend />
          <Map />
        </div>
      </UserContextProvider>
    </AreaContextProvider>
  );
}

export default App;
