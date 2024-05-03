import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';
import { IProducts } from '../../types';

const EditProductContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [product, setProduct] = useState<IProducts | null>(null);
  useEffect(() => {
    const getProduct = async () => {
      if (!product) {
        const fetchedProduct = await fetch(`${API_URL}/products/${id}`);
        const json = await fetchedProduct.json();
        setProduct(json.response);
      }
    };
    getProduct();
  }, [product, setProduct, id]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.length ? name : product?.name,
        image: image.length ? image : product?.image,
        cost: cost.length ? cost : product?.cost,
        description: description.length ? description : product?.description,
      }),
    });
    navigate('/');
  };
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='flex flex-col w-5/6 h-5/6 border border-black rounded-md justify-center items-center'>
        <h1 className='text-center font-medium text-xl text-green'>
          Edit Product: {product?.name}
        </h1>
        <form
          className='w-5/6 h-5/6 flex flex-col justify-center items-center'
          onSubmit={handleFormSubmit}
        >
          <div className='flex flex-col w-4/6 justify-center items-center'>
            <input
              className='border border-black m-2 rounded-sm p-1 w-full'
              placeholder={product?.image}
              type='text'
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <input
              className='border border-black m-2 rounded-sm p-1 w-full'
              placeholder={product?.name}
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              className='border border-black m-2 rounded-sm p-1 w-full'
              placeholder={product ? `${product.cost}` : ''}
              type='number'
              onChange={(e) => setCost(e.target.value)}
              value={cost}
            />
          </div>
          <div className='flex flex-col w-4/6 justify-center items-center'>
            <textarea
              className='border border-black m-2 rounded-sm p-1 w-full'
              placeholder={product?.description}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <button
              className='w-36 h-12 border border-black rounded-s-full rounded-e-full'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductContainer;
