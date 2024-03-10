import React from 'react'

function News({item}) {
  return (
    <section className="text-gray-600 body-font md:px-20 py-10 md:py-0">
  <div className="container mx-auto flex md:px-5 py-14 md:flex-row flex-col-reverse items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
        {item.title}

      </h1>
      <p className="mb-8 leading-relaxed">
      {item.description}
      </p>
      <div className="flex justify-center">
        <a href ="/">
        <button className="ml-4 inline-flex text-gray-100 bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg capitalize">
          go Home 
        </button>
        </a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={item.image}
      />
    </div>
  </div>
</section>

  )
}

export default News