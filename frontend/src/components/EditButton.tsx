import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IEditButtonProps {
  id: string;
}

const EditButton: React.FC<IEditButtonProps> = ({ id }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <>
      <button
        onClick={handleEdit}
        className='h-10 w-20 flex items-center justify-center z-40 text-black bg-white border border-black rounded-md'
      >
        Edit
      </button>
    </>
  );
};

export default EditButton;
