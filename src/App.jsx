import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Solicitudes from './components/Solicitudes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Solicitudes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
