import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Card from '@/components/Card';
import 'tailwindcss/tailwind.css';

const provider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const contractAddress = 'MyContractAddress';
const abi = [// ABIs from contract ]; // Paste the ABI of contract here
]
// Create a new contract instance
const contract = new ethers.Contract(contractAddress, abi, provider);

function Fundraising() {
  const [works, setWorks] = useState([]);

  // Fetch works data from the contract
  useEffect(() => {
    const loadWorks = async () => {
      // const workCount = await contract.workCount();


      // Create an array to save the promises
      let promises = [];

      // Fetch each work and save the promise in the array
      // for(let i = 0; i < workCount.toNumber(); i++) {
      //   promises.push(contract.works(i));
      // }

      // Resolve all promises and set the results
      const workData = await Promise.all(promises);
      setWorks(workData);
    };

    loadWorks();
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
      {works.map((work, index) => (
        <Card key={index} work={work} />
      ))}
    </div>
  );
}

export default Fundraising;
