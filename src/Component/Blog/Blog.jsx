import { FaBookmark } from "react-icons/fa";
const Blog = ({blogData, accept, readAccept}) => {
    const {author, author_img, title, posted_date, reading_time, cover, hashtags} = blogData
    console.log(blogData)
    return (
        <div className="mb-5 space-y-3">
            <img className="w-[450px]" src={cover} alt="" srcset="" />
            <div className="flex justify-between my-2">
                <div className="flex gap-2">
                    <img className="w-[2rem] h-[2.5rem] rounded-full" src={author_img} alt="" srcset="" />
                <div>
                    <p className="text-2xl">{author}</p>
                    <p className="text-xs">{posted_date}</p>
                </div>
                </div>
                <div>
                    <span>{reading_time} min red</span>
                    <button onClick={()=> accept(blogData)} className="ml-1 text-red-500"><FaBookmark /></button>
                </div>
            </div>
            
            <p>{title}</p>
            {
                hashtags.map(hash=> <span><a href="#">{hash}</a></span>)
            } <br />
            <button onClick={()=>readAccept(reading_time)} className="text-purple-600 underline">Mark AS Read</button>
        </div>
    );
};

export default Blog;