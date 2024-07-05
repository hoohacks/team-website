import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col h-screen justify-center items-center">
        <div className="text-4xl font-bold mb-4 text-gray-700">
          Page Not Found
        </div>
        <div className="text-lg text-center text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist.
        </div>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
