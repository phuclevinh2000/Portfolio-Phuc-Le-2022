import SharedLayout from './components/SharedLayout/SharedLayout';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Work from './pages/Work/Work';
import Skills from './pages/Skills/Skills';
import Hobby from './pages/Hobby/Hobby';
import Taskbar from './components/Taskbar/Taskbar';
import Error from './pages/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/work' element={<Work />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/hobby' element={<Hobby />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <Taskbar />
    </BrowserRouter>
  );
}

export default App;
