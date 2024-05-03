import { Routes, Route } from 'react-router-dom';
import NotFound from './components/containers/NotFound';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/CreateProduct';

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path='/' element={<ProductsPage />}></Route>
        <Route path='/:id' element={<ProductDetail />}></Route>
        <Route path='/create' element={<CreateProduct />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
