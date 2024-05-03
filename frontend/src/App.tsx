import { Routes, Route } from 'react-router-dom';
import NotFound from './components/containers/NotFound';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';

const App = () => {
  return (
    <div className='max-w-screen h-screen'>
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/:id' element={<ProductDetail />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
