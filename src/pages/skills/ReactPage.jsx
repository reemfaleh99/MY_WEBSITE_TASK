import React from "react";

const ReactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <img
        className="md:w-1/2 h-72 rounded-t-2xl w-full"
        src="https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd3f0ff2ab5398aaffb00fa0b3afcb238772f42e7-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75"
        alt=""
      />
      <p className="md:w-1/2 bg-white p-6 leading-7 font-medium rounded-b-2xl">
        <strong>React.js</strong> has become one of the most popular JavaScript
        libraries for building modern user interfaces and dynamic web
        applications. Developed and maintained by Meta, React enables developers
        to create fast, scalable, and interactive user experiences through its
        component-based architecture. By efficiently updating and rendering only
        the necessary components using the Virtual DOM, React significantly
        improves application performance and responsiveness. This React.js
        overview highlights how the library simplifies frontend development by
        encouraging reusable components, unidirectional data flow, and seamless
        state management. It is widely adopted in single-page applications
        (SPAs), dashboards, and large-scale platforms due to its flexibility and
        strong ecosystem. With continuous community support and integration with
        modern tools and frameworks, React.js remains a key technology for
        building robust and future-ready web applications.
      </p>
    </div>
  );
};

export default ReactPage;
