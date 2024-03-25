import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, cover_image, author_name, author_image, published_date,reading_time,hashtags} = blog;
    return (
        <div>
                <img className='' src={cover_image} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
               <div className='flex'>
                    <img className='w-12' src={author_image} alt="" />
                <div className='mx-4'>
                    <p>{author_name}</p>
                    <p>{published_date}</p>
                </div>
               </div>
               <div className='flex items-center gap-2'>
                <p>
                    <span>{reading_time}</span> min reading
                </p>
                <button>add</button>
               </div>
            </div>
            <div>
                <h2 className="text-4xl">{title}</h2>
            </div>
            <p className='ml-2'>
                {
                    hashtags.map(( hash , idx) => <span key={idx}><a href="">#{hash}</a></span> )
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;