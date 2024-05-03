import { LuHome } from 'react-icons/lu';

const HomePageButton = () => {
  return (
    <div className='size-10 text-white flex items-center justify-center'>
      <a href='/'>
        <LuHome />
      </a>
    </div>
  );
};

export default HomePageButton;
