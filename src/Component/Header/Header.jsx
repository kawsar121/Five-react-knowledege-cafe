import profile from '../../assets/images.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 p-4 mx-2'>
            <h1 className='text-xl'>Knowledge Cafe</h1>
            <img className='w-[50px]' src={profile} alt="" srcset="" />
        </div>
    );
};

export default Header;