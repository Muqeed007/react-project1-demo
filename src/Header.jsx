import profile from './assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 mb-5'>
            <h1 className='text-5xl'>Knowledge Cafe</h1>
            <img className='' src={profile} alt="" />
        </div>
    );
};

export default Header;