import Image from 'next/image';
import 'tailwindcss/tailwind.css';

function Card({ work }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Image className="w-full" src="/image.jpg" alt="Sunset in the mountains" width={400} height={200} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{work.title}</div>
        <p className="text-gray-700 text-base">
          {work.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Words: {work.numberOfWords}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">State: {work.currentState}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Total Fund: {ethers.utils.formatEther(work.totalFund)} ETH</span>
      </div>
    </div>
  );
}

export default Card;
