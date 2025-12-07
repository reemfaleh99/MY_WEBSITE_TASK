import React from "react";
import { Link } from "react-router-dom";

const info = [
  { name: "Text", info: "Reem" },
  { name: "Date", info: "10.oct.2025" },
  { name: "Read", info: "1 min" },
];

const Blog = () => {
  return (
    <div className="w-full xl:w-1/2 mt-5 md:mt-10 text-white px-12">
      {/* line */}
      <span className="w-full h-px block bg-white my-5 " />

      <div className="flex flex-col sm:flex-row gap-5 md:gap-10">
        {/* blog img */}
        <img
          className="  md:w-64 md:h-64 w-32 h-32 object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1678227547309-f25998d4fc86?fm=jpg&q=60&w=3000"
          alt=""
        />
        {/* blog info */}
        <div className="  flex flex-col">
          {/* title */}
          <h4 className="text-2xl md:text-4xl text-second">
            what does it take to become a web developer
          </h4>
          {/* paragraph */}
          <p className="text-xs md:text-sm text-gray-200 my-3">
            web development, also known as website development, encompasses a
            variety of tasks and processes involved in creating websites for the
            internet
          </p>
          {/* button */}
          <Link
            to="/blog-details"
            className="text-xl text-second border-b-2 border-white my-3 font-jet cursor-pointer w-fit"
          >
            Read more &gt;&gt;
          </Link>
          {/* blog details */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 mt-7 lg:items-center">
            <span className="bg-gray-700 py-2 px-3 rounded-full w-fit">
              web developer
            </span>

            <div className="flex">
              {info.map((item, index) => (
                <div key={index} className="me-3">
                  <span className=" font-semibold text-md">{item.name}:</span>
                  <span className="text-gray-300 text-md ms-1">
                    {item.info}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* line */}
      <span className="w-full h-px block bg-white my-5 " />
    </div>
  );
};

export default Blog;
