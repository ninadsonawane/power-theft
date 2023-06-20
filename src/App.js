import './App.css';
import StorePower from './artifacts/contracts/StorePower.sol/StorePower.json'
import { useState } from 'react';
const ethers = require("ethers");

function App() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const [input, setInput] = useState({
    date:0,
    place:0,
    kwh:0,
    a:0,
    pf:0
   });

   const [query, setQuery] = useState({
    dateq:0,
    placeq:0,
   });

  const handleClick = () => {
    async function set() {
      if(typeof window.ethereum !== 'undefined' ) {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, StorePower.abi, signer);
        const transaction = await contract.uploadKWH(input.date, input.place, input.kwh);
        await transaction.wait();
        const transaction1 = await contract.uploadA(input.date, input.place, input.a);
        await transaction1.wait();
        const transaction2 = await contract.uploadPF(input.date, input.place, input.pf);
        await transaction2.wait();
      }
  }
  set();
  }

  const getQuery = () => {
    async function set() {
      if(typeof window.ethereum !== 'undefined' ) {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, StorePower.abi, signer);
        const data = await contract.getKWH(input.date, input.place);
        // eslint-disable-next-line no-undef
        alert("Your value of KWH is "+ parseInt(data._hex) +" KWH");
      }
  }
  set();
  }


  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }    


const handleSubmit = (e) => {
  e.preventDefault();
  handleClick();
  // var ciphertext = CryptoJS.AES.encrypt(input.cid, input.key).toString();
  // setInput((api) => ({...api, cipher: ciphertext}));
}

const handleQuery = (e) => {
  e.preventDefault();
  getQuery();
  // var ciphertext = CryptoJS.AES.encrypt(input.cid, input.key).toString();
  // setInput((api) => ({...api, cipher: ciphertext}));
}

  return (
    <>
      <h1 class="text-2xl font-bold  ">Theft Prevention- Web app</h1>
      <br/>
      <body>  Note: Indexing of Location is in following order: PG1, PG2, Data Centre, Architecture Block</body>
      <br/>

    <div class="flex flex-row items-center  ml-40">
      <div class="w-full max-w-xs  content-center">
        <h3>Upload  values</h3>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
     Date (UNIX value)
    </label>
    <input onChange={(e) => setInput((input) => ({...input,date:e.target.value }))} value={input.date} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Date"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
        Location
      </label>
      <input onChange={(e) => setInput((input) => ({...input,place:e.target.value }))} value={input.place} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Location"/>
     </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="values">
        KWh
      </label>
      <input onChange={(e) => setInput((input) => ({...input,kwh:e.target.value }))} value={input.kwh} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="KWH"/>
      <p class="text-red-500 text-xs italic">Please put only KWH values.</p>
    </div>
    <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="values">
      Current
    </label>
    <input onChange={(e) => setInput((input) => ({...input,a:e.target.value }))} value={input.a} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="A"/>
    <p class="text-red-500 text-xs italic">Please put only Current Values..</p>
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="values">
    Power factor 
    </label>
    <input onChange={(e) => setInput((input) => ({...input,pf:e.target.value }))} value={input.pf} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="PF"/>
    <p class="text-red-500 text-xs italic">Please put only Power factor values</p>
  </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
    </div>
    </form>
     </div>
     <div class="w-full max-w-xs  ml-40 content-center	">
        <h3>Get values</h3>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleQuery}>
    <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
     Date (UNIX value)
    </label>
    <input onChange={(e) => setQuery((input) => ({...input,dateq:e.target.value }))} value={query.dateq} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Date"/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
        Location
      </label>
      <input onChange={(e) => setQuery((input) => ({...input,placeq:e.target.value }))} value={query.placeq} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Location"/>
     </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
    </div>
    </form>
     </div>
     </div>
       </>
  );
};


export default App;
