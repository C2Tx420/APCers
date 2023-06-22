import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import DefaultLayout from './layout/defaultLayout/DefaultLayout';
import About from './pages/About/About';
import Detail from './pages/Product/Detail';
import Create from './pages/Product/Create';
import NotFound from './pages/notFound/';
import Airdrop from './pages/Airdrop/';

function App() {

  return (
    <Routes>
      <Route element={<DefaultLayout/>}>
      <Route path='' element={<Home />} />
      <Route path='/product/:id' element={<Detail />} />
      <Route path='/create' element={<Create />} />
      <Route path='/airdrop' element={<Airdrop />} />
      <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}
export default App
