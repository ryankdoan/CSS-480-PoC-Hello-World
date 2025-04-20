'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [interests, setInterests] = useState([
    'Gaming',
    'Traveling',
    'Lifting Weights',
  ]);
  const [isAscending, setIsAscending] = useState(true);

  const sortList = () => {
    const sorted = [...interests].sort();
    setInterests(isAscending ? sorted.reverse() : sorted);
    setIsAscending(!isAscending);
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to my website!</h1>

      <p className="mb-4">
        Hi, I’m Ryan! I’m a CSSE student at the University of Washington Bothell.
      </p>

      <Image
        src="/me.jpg"
        alt="Picture of me"
        width={200}
        height={200}
        priority
      />

      <h2 className="text-xl font-semibold mb-2">My interests:</h2>
      <ul className="list-disc list-inside mb-4">
        {interests.map((interest, i) => (
          <li key={i}>{interest}</li>
        ))}
      </ul>

      <button
        onClick={sortList}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Sort Interests
      </button>
    </main>
  );
}
