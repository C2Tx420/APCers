import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import DefaultLayout from './layout/defaultLayout/DefaultLayout';

function App() {

  return (
    <Routes>
      <Route element={<DefaultLayout/>}>
      <Route path='' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
