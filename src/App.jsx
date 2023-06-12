import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import DefaultLayout from './layout/defaultLayout/DefaultLayout';
import About from './pages/About/About';
import Detail from './pages/Detail/';
import Create from './pages/Create/';

function App() {

  return (
    <Routes>
      <Route element={<DefaultLayout/>}>
      <Route path='' element={<Home />} />
      <Route path='/item/:id' element={<Detail />} />
      <Route path='create' element={<Create />} />
      </Route>
    </Routes>
  )
}
export default App
