import React from "react";

const Blogs = () => {
  return (
    <div className="border-2 md:w-3/4 md:mx-auto mx-3 border-slate-700 rounded-md p-3 my-3">
      <div className="md:w-3/4  md:mx-auto mx-6 my-4">
        <h1 className="text-3xl my-2 border-b-2 border-b-gray-400 pb-2">What is Context Api</h1>
        <p className="text-xl">
          context api is a alternative to 'props dilling'.it's kind of global
          variable..it solving prop-drilling from all levels of your
          application.. React.createContext() is all you need and it returns a
          consumer and a provider.provider is a component that as it's names
          suggests provides the state to its children.
        </p>
      </div>
      <div className="md:w-3/4  md:mx-auto mx-6 my-8">
        <h1 className="text-3xl my-2 border-b-2 border-b-gray-400 pb-2">Semantic tag ki?</h1>
        <p className="text-xl">
          context api is a alternative to 'props dilling'.it's kind of global
          variable..it solving prop-drilling from all levels of your
          application.. React.createContext() is all you need and it returns a
          consumer and a provider.provider is a component that as it's names
          suggests provides the state to its children.
        </p>
      </div>
      <div className="md:w-3/4  md:mx-auto mx-6 my-4">
        <h1 className="text-3xl my-2 border-b-2 border-b-gray-400 pb-2">What defferent to inline or inline-block elements</h1>
        <p className="text-xl">
          context api is a alternative to 'props dilling'.it's kind of global
          variable..it solving prop-drilling from all levels of your
          application.. React.createContext() is all you need and it returns a
          consumer and a provider.provider is a component that as it's names
          suggests provides the state to its children.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
