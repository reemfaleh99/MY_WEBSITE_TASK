import React, { useEffect } from "react";

const CssPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <img
        className="md:w-1/2 h-72 rounded-t-2xl w-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8bobD27EIy1-VXrMLtM3fLnO3dVwv1Ipz4A&s"
        alt=""
      />
      <p className="md:w-1/2 bg-white p-6 leading-7 font-medium rounded-b-2xl">
        <strong>CSS</strong> (Cascading Style Sheets) is a powerful styling
        language used to control the visual appearance and layout of web pages.
        It allows developers to apply colors, fonts, spacing, animations, and
        responsive designs, transforming basic HTML structures into visually
        engaging user interfaces. By separating content from presentation, CSS
        improves maintainability and scalability while enabling consistent
        design across entire websites and applications. Modern CSS features such
        as Flexbox, Grid, transitions, and media queries make it possible to
        build complex layouts that adapt smoothly to different screen sizes and
        devices. As a core web technology, CSS plays a crucial role in creating
        accessible, performant, and aesthetically pleasing user experiences when
        combined with HTML and JavaScript.
      </p>
    </div>
  );
};

export default CssPage;
