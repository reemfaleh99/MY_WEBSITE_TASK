import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ articles }) => {
  return (
    <div className="w-full 2xl:w-2/3 mt-5 md:mt-10 text-white px-12">
      {articles.map((item, index) => (
        <React.Fragment key={index}>
          <span className="w-full h-px block bg-white my-5" />
          <div className="flex items-center flex-col md:flex-row gap-5 md:gap-10 my-5">
            <img
              className="md:w-64 md:h-64 w-32 h-32 object-cover rounded-lg"
              src={item.urlToImage}
              alt=""
            />
            <div className="flex flex-col">
              <h4 className="text-2xl md:text-3xl text-second line-clamp-2">
                {item.title}
              </h4>
              <p className="text-xs md:text-sm text-gray-200 my-3 line-clamp-2">
                {item.description}
              </p>
              <Link
                to={`/blog-details/${index}`}
                className="text-xl text-second border-b-2 border-white my-3 font-jet cursor-pointer w-fit"
              >
                Read more &gt;&gt;
              </Link>
              <div className="flex flex-col lg:flex-row gap-5 mt-7 lg:items-center">
                <span className="bg-gray-700 py-2 px-3 rounded-full w-fit">
                  {item.source.name}
                </span>
                <div className="flex">
                  <div className="me-3">
                    <span className="font-semibold text-md">author:</span>
                    <span className="text-gray-300 text-md ms-1">
                      {item.author}
                    </span>
                  </div>
                  <div className="me-3">
                    <span className="font-semibold text-md">date:</span>
                    <span className="text-gray-300 text-md ms-1">
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="w-full h-px block bg-white my-5" />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Blog;
