"use client";

import SearchBar from './SearchBar';
import { useState } from 'react';

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      // Handle sign out
      setIsAuthenticated(false);
    } else {
      // Handle sign in
      setIsAuthenticated(true);
    }
  };
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#0d141c]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em]">HomeFinder</h2>
        </div>
        <div className="flex items-center gap-9">
          <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Buy</a>
          <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Rent</a>
          <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Sell</a>
          <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">Agents</a>
          <a className="text-[#0d141c] text-sm font-medium leading-normal" href="#">News</a>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="h-10 max-w-64 min-w-40">
          <SearchBar placeholder="Search" />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleAuthClick}
            className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 ${
              isAuthenticated 
                ? 'bg-[#e7edf4] text-[#0d141c]' 
                : 'bg-[#0c7ff2] text-slate-50'
            } text-sm font-bold leading-normal tracking-[0.015em]`}
          >
            {isAuthenticated ? (
              <>
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </>
            ) : (
              <span className="truncate">Sign In</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}