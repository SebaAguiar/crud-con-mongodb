import { useState } from 'react';
import { API_URL } from '../../constants';

const CreateProductContainer = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const handleFormSubmit = async () => {
    await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        image,
        cost,
        description,
      }),
    });
  };
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='flex flex-col w-5/6 h-5/6 border border-black rounded-md justify-center items-center'>
        <h1 className='text-center font-medium text-xl text-green'>
          Create new Product
        </h1>
        <form
          className='w-5/6 h-5/6 flex flex-col justify-center items-center'
          onSubmit={handleFormSubmit}
        >
          <div className='flex flex-col w-4/6 justify-center items-center'>
            <input
              className='border border-black m-2 rounded-sm p-1 w-full'
              placeholder='Image'
              type='text'
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <input
              className='border border-black m-2 rounded-sm p-1 w-full'
              placeholder='Name'
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              className='border border-black m-2 rounded-sm p-1 w-full'
              placeholder='Cost'
              type='number'
              onChange={(e) => setCost(e.target.value)}
              value={cost}
            />
          </div>
          <div className='flex flex-col w-4/6 justify-center items-center'>
            <textarea
              className='border border-black m-2 rounded-sm p-1 w-full'
              placeholder='Description'
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

export default CreateProductContainer;
