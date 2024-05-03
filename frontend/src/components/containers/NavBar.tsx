import Search from '../Search';

const NavBar = () => {
  return (
    <header className='h-10 w-full bg-black'>
      <nav className='h-full w-full flex justify-center items-center'>
        <Search />
      </nav>
    </header>
  );
};

export default NavBar;
