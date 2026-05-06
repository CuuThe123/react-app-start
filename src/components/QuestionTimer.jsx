import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log("Timeout được gọi");
    const setTimeoutId = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(setTimeoutId);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("set interval được gọi");
    const interval = setInterval(() => {
      setRemainingTime((preRemainingTime) => preRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <progress
        max={timeout}
        value={remainingTime}
      ></progress>
    </>
  );
}
