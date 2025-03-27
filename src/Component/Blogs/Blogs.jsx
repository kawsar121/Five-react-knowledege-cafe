import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({receive}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div>
            <p className="text-xl">Blogs : {blogs.length}</p>
            {
                blogs.map(blogCall=> <Blog key={blogCall.id} blogData={blogCall} accept={receive} ></Blog>)
            }
        </div>
    );
};

export default Blogs;