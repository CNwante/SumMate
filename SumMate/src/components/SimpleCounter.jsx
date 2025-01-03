import { useState } from "react";
import { Button } from "./Button";

export const SimpleCounter = () => {
  let [count, setCount] = useState(0);

  const handleMinus = () => setCount((count -= 1));
  const handleReset = () => setCount((count = 0));
  const handlePlus = () => setCount((count += 1));

  return (
    <div className="h-screen flex items-center justify-center bg-purple-700">
      <div className="bg-gray-200 w-80 p-8 rounded-2xl text-center shadow-sm shadow-orange-400">
        <h1 className="font-extrabold text-4xl">Sum-Mate</h1>
        <p className="text-8xl py-7 font-medium">{count}</p>
        <div className="space-x-4">
          <Button
            content="—"
            onClick={handleMinus}
            className="bg-red-600 text-gray-200 text-3xl font-extrabold size-12 rounded-full hover:bg-red-800 hover:shadow-md hover:shadow-purple-400"
          />
          <Button
            content="RESET"
            onClick={handleReset}
            className="bg-gray-500 text-gray-100 text-xl font-extrabold py-3 px-4 rounded-full hover:bg-gray-800 hover:shadow-md hover:shadow-purple-400"
          />
          <Button
            content="+"
            onClick={handlePlus}
            className="bg-green-600 text-gray-200 text-3xl font-extrabold size-12 rounded-full hover:bg-green-800 hover:shadow-md hover:shadow-purple-400"
          />
        </div>
      </div>
    </div>
  );
};
