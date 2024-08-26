import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useAuth();

  console.log(blogs);
  return (
    <div>
      <div className="container mx-auto my-12 p-4">
        <h1 className="text-2xl font-bold mb-6">All Blogs goes here!!!</h1>
        <p className="text-center mb-8">
          The concept of gods varies widely across different cultures,
          religions, and belief systems
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <Link
                to={`/blog/${blog.id}`}
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={blog?.blogImage?.url}
                  alt={blog?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-lg font-semibold">{blog?.title}</h2>
                  <p className="text-sm">{blog?.category}</p>
                </div>
              </Link>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
