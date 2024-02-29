import imgSrc from '../assets/cancerLogo.png'
const Header = () => {
  return (<header className='px-4 py-3 flex items-center border-b  shadow z-10'>
    <img src={imgSrc} className='size-10'/>
    <h1 className='font-bold md:text-2xl text-xl'>Cancer drug search</h1>
  </header>)
}
export default Header;
