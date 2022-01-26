import React from "react";

const Blog = () => {
  return (
    <>
      <div class="w-full ">
        <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <div class="bg-white w-full shadow rounded p-8">
            <div class="grid grid-cols-1 gap-8 mt-6">
              <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-6/12 rounded overflow-hidden">
                  <img
                    class="object w-full h-auto"
                    src="https://images.unsplash.com/photo-1626169740183-702d6421beeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                </div>
                <div class="w-full md:w-6/12 mt-4 md:mt-0 md:ml-4">
                  <h2 class="text-lg font-semibold leading-tight text-gray-800">
                    Ready to use components
                  </h2>
                  <p class="leading-normal pt-2">
                    It provides a very simple start, no need to write a lot of
                    code, you just import it and start the primitive components
                    and create the ones you need.
                  </p>
                  <a
                    class="leading-normal pt-2 hover:underline text-blue-600"
                    href="/"
                  >
                    Read more...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
