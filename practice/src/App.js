import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Todo from './pages/Todo';
import Footer from './components/Footer';

function App() {
  return (
   <BrowserRouter>
  <div className="w-dvw h-dvh  flex flex-col justify-between">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
      </Routes>
      <Footer />
  </div>
</BrowserRouter>
  );
}

export default App;
