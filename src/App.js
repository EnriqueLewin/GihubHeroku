import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Facu from './componentes/facu/Facu';
import Mate from './componentes/mate/Mate';
import Quique from './componentes/quique/Quique';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quique" element={<Quique />} />
        <Route path="/facu" element={<Facu />} />
        <Route path="/mate" element={<Mate />} />
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
