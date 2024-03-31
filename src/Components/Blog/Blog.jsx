import PropTypes from 'prop-types';
import { BsBookmarkStarFill } from "react-icons/bs";



const Blog = ({ blog, handleBookmark , handleMarkAsRead}) => {
    const {id,title, cover_image, author_name, author_image, published_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-12'>
            <img className='mb-3' src={cover_image} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-3'>
                    <img className='w-12 ' src={author_image} alt="" />
                    <div className='mx-4'>
                        <p>{author_name}</p>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-xl'>
                    <p>
                        <span>{reading_time}</span> min reading
                    </p>
                    <button 
                        onClick={() => handleBookmark(blog)}
                        className='text-blue-800'>
                        <BsBookmarkStarFill></BsBookmarkStarFill></button>
                </div>
            </div>
            <div>
                <h2 className="text-4xl mb-3 underline">{title}</h2>
            </div>
            <div className='mb-3'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='m-1' href="">#{hash}</a></span>)
                }
            </div>
            <div>
                <button 
                onClick={ () => handleMarkAsRead(id,reading_time)}
                className="btn mb-3 text-blue-800 font-extrabold underline">Mark as read</button>
            </div>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.function,
    handleMarkAsRead: PropTypes.function
}
export default Blog;