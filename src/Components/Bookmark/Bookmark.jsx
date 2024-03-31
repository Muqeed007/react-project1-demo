import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const{title} = bookmark;
    return (
        <div className='bg-gray-300 p-4 m-4 text-center'>
            <h3 className='text-xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}
export default Bookmark;