import './App.css';
import {Routes, Route} from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { CertificatesPage } from './components/CertificatesPage/CertificatesPage';
import { ContactPage } from './components/ContactPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/certificates' element={<CertificatesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
