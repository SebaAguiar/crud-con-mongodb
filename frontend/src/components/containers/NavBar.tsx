import HomePageButton from '../HomePageButton';
import Search from '../Search';

const NavBar = () => {
  return (
    <header className='h-10 w-full bg-black'>
      <nav className='h-full w-full flex justify-center items-center'>
        <HomePageButton />
        <Search />
        <a
          className='border border-white rounded-md text-white text-center h-7 w-20 ml-3'
          href='/create'
        >
          Create
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
