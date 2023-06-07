import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import DefaultLayout from './layout/defaultLayout/DefaultLayout';
import About from './pages/About/About';

function App() {

  return (
    <Routes>
      <Route element={<DefaultLayout/>}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
