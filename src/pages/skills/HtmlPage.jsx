import React, { useEffect } from "react";

const HtmlPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <img
        className="md:w-1/2 h-72 rounded-t-2xl w-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tZWVFCDi-UBtRvugXE-AcaDj-dx6QPRChw&s"
        alt=""
      />
      <p className="md:w-1/2 bg-white p-6 leading-7 font-medium rounded-b-2xl">
        <strong>HTML</strong> (HyperText Markup Language) is the foundation of
        the web and is used to structure content on websites and web
        applications. It defines the layout of elements such as headings,
        paragraphs, images, links, and forms, allowing browsers to display
        content in a clear and organized way. By providing a semantic structure,
        HTML improves accessibility, SEO, and overall user experience across
        different devices and platforms. is the core technology used to build
        and structure web pages. It allows developers to organize content using
        elements such as headings, paragraphs, images, links, tables, and forms.
        HTML provides a clear and semantic structure that helps browsers
        correctly interpret and display content while improving accessibility
        and search engine optimization. As the foundation of all web
        applications, HTML works seamlessly with CSS and JavaScript to create
        responsive, user-friendly, and well-structured websites.
      </p>
    </div>
  );
};

export default HtmlPage;
