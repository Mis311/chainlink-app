import { useState } from 'react';
import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(
  () => import('react-quill'), 
  { ssr: false }
);

export default function WriterInterface() {
  const [value, setValue] = useState('');

  return (
    <div className="py-5">
      <h2 className="text-2xl font-bold mb-5">Compose your masterpiece</h2>
      <QuillNoSSRWrapper value={value} onChange={setValue} />
    </div>
  );
}
