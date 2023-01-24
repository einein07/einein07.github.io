import React from 'react';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function Greeting() {
  const termsOfEndearment: string[] = ['Traveller', 'Friend', 'There'];
  const randNum: number = getRandomInt(3);
  return (
    <>
      <div className="grid place-items-center">
        <h1 className="font-bold text-4xl content-center">Hello {termsOfEndearment[randNum]}</h1>
        {randNum == 2 && <p className="font-thin">-Obi Wan Kenobi</p>}
      </div>

    </>
  );
}
