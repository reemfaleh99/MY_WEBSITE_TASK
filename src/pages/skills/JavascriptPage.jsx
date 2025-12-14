import React, { useEffect } from "react";

const JavascriptPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <img
        className="md:w-1/2 h-72 rounded-t-2xl w-full"
        src="https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?s=612x612&w=0&k=20&c=H9FI5X3ZBQIyEijvhJc-jv5McwCh-BxqQPxee9Aoa08="
        alt="rere"
      />
      <p className="md:w-1/2 bg-white p-6 leading-7 font-medium rounded-b-2xl">
        <strong>JavaScript</strong> is a powerful programming language that
        brings interactivity and dynamic behavior to web applications. It
        enables developers to control user interactions, manipulate the DOM,
        handle events, and communicate with servers through asynchronous
        operations such as APIs and AJAX. JavaScript plays a vital role in
        building modern web experiences by allowing real-time updates, form
        validation, animations, and complex application logic directly in the
        browser. With the rise of frameworks and libraries like React, Vue, and
        Angular, JavaScript has become essential for developing scalable
        single-page applications. Combined with HTML and CSS, JavaScript forms
        the backbone of modern web development, enabling fast, responsive, and
        highly interactive user interfaces.
      </p>
    </div>
  );
};

export default JavascriptPage;
