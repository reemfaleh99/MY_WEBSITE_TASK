import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { BiDownload } from "react-icons/bi";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=df2952b9f605473a8976d1749bb8acc2"
    )
      .then((res) => res.json())
      .then((data) => setArticle(data.articles[id]))
      .catch((err) => console.log(err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-24 text-white">
      <div className="w-full px-5 lg:w-1/2">
        {/* title */}
        <h4 className="text-4xl text-second capitalize">{article.title}</h4>
        {/* line */}
        <span className="w-full h-px block bg-gray-500 my-10" />
        {/* blog details */}
        <div className="flex justify-between mt-7 items-center">
          <div className="flex">
            <div className="me-3">
              <span className="font-semibold text-md">author:</span>
              <span className="text-gray-300 text-md ms-1">
                {article.author}
              </span>
            </div>
            <div className="me-3">
              <span className="font-semibold text-md">date:</span>
              <span className="text-gray-300 text-md ms-1">
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <BiDownload className="w-10 h-10 bg-second rounded-full p-2 text-third" />
        </div>
        <span className="w-full h-px block bg-gray-500 my-10" />
        {/* blog img */}
        <img
          className="w-full h-96 object-cover rounded-lg mb-10"
          src={article.urlToImage}
          alt=""
        />
        {/* blog paragraph */}
        <p>
          {article.description} {article.content}
        </p>
        <span className="w-full h-px block bg-gray-500 my-10" />
        {/* blog details */}

        <div className="flex justify-between mt-7 items-center">
          <div className="flex">
            <div className="me-3">
              <span className="font-semibold text-md">author:</span>
              <span className="text-gray-300 text-md ms-1">
                {article.author}
              </span>
            </div>
            <div className="me-3">
              <span className="font-semibold text-md">date:</span>
              <span className="text-gray-300 text-md ms-1">
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <BiDownload className="w-10 h-10 bg-second rounded-full p-2 text-third" />
        </div>
        <span className="w-full h-px block bg-gray-500 my-10" />
        <div className="flex gap-3 text-center md:gap-5 mt-7 items-center text-sm md:text-xl">
          <span className="bg-gray-700 py-2 px-3 rounded-full">
            {article.source.name}
          </span>
          <span className="bg-gray-700 py-2 px-3 rounded-full">
            {article.source.name}
          </span>
          <span className="bg-gray-700 py-2 px-3 rounded-full">
            {article.source.name}
          </span>
        </div>
        {/* button */}
        <div className="flex justify-center">
          <button className=" mt-10 text-white border border-second py-2 px-6 rounded-full capitalize">
            subscribe my blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
