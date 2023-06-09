// src/components/RightNavbar.js
import React, { useState } from 'react'
import Link from 'next/link'

const RightNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-0 h-full bg-white p-4 z-50">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/">
                <p className="text-blue-500">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/ai-reactions">
                <p className="text-blue-500">AI Reactions</p>
              </Link>
            </li>
            <li>
              <Link href="/additional-content">
                <p className="text-blue-500">Additional Content</p>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default RightNavbar
