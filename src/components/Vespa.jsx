import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getPallete from '../helpers/pallete';

const Vespa = ({
  icon: url, name, description, id,
}) => {
  const navigate = useNavigate();
  const [pallete, setPallete] = useState();

  useEffect(() => {
    (async () => {
      const vibrant = await getPallete(url);
      const pallete = await vibrant
      setPallete(pallete);
    })();
  }, []);

  const myShade = pallete?.LightVibrant.getHex();

  const handleVespaClicked = () => {
    navigate('/details', { state: { url, name, id } });
  };

  return (
    <div className="flex flex-col bg-white  relative items-center justify-between px-10 h-96 w-full md:w-80 peer">

      <div
        className="relative flex items-center p-2 mt-8 rounded-full w-60 h-60 hover:outline hover:outline-dotted hover:outline-sky-400 hover:outline-2xl hover:outline-offset-4 hover:cursor-pointer "
        style={{ backgroundColor: myShade }}
        onClick={handleVespaClicked}
      >
        <img
          src={url}
          alt=""
          className="absolute translate-x-1/2 -translate-y-1/2 rounded-full top-2/4 right-2/4 h-52 w-52 "
        />
      </div>

      <div className="mb-3">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-400">...................</p>
        <p className="text-gray-400">{description}</p>
      </div>

      <div className="hidden md:flex lg:flex">
        <div className="p-1 mr-4 border-2 hover:cursor-pointer  border-gray-400 rounded-full">
          <svg
            className="w-4 h-4 text-slate-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
        </div>
        <div className="p-1 mr-4 hover:cursor-pointer  border-2 border-gray-400 rounded-full">
          <svg
            className="w-4 h-4 text-slate-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
          </svg>
        </div>
        <div className="p-1 border-2 border-gray-400 hover:cursor-pointer rounded-full">
          <svg
            className="w-4 h-4 text-slate-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Vespa;
