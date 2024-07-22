import React, { useEffect, useState } from "react";
interface LiveProps {}

const Live = ({}: LiveProps) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleNewMessage = () => {
    const nextCount = count + 1;
    setMessage(`${nextCount}번째 메시지가 도착했습니다.`);
    setCount(nextCount);
  };

  return (
    <main className="p-10">
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
        <button onClick={handleNewMessage}>새 메시지 받기</button>
        <div>{message}</div>
      </div>
    </main>
  );
};

export default Live;
