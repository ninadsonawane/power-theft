import React from 'react'

const Form = () => {
  return (
    <div class="w-full max-w-xs">
        <h3>Upload KHW values</h3>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
   <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
     Date (UNIX value)
   </label>
   <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Date"/>
   </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
        Location
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Location"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="values">
        Values
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="KWH"/>
      <p class="text-red-500 text-xs italic">Please put only values...</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
    </div>
    </form>
    </div>
  );
}

export default Form;