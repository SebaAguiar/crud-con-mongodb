import React from 'react';
import { LuTrash2 } from 'react-icons/lu';
import { API_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

interface IDeleteButtonProps {
  id: string;
}

const DeleteButton: React.FC<IDeleteButtonProps> = ({ id }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    });
    navigate('/');
  };
  return (
    <>
      <button
        onClick={handleDelete}
        className='h-10 w-20 flex items-center justify-center z-40 text-black bg-white border border-black rounded-md'
      >
        <LuTrash2 />
      </button>
    </>
  );
};

export default DeleteButton;
