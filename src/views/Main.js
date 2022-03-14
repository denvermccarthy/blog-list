import React from 'react';
import BlogCard from '../components/BlogCard/BlogCard';
import { useState, useEffect } from 'react';
import { fetchBlogs } from '../services/blogs';

export default function Main() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const resp = await fetchBlogs();
        setBlogs(resp);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <div>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </>
  );
}
