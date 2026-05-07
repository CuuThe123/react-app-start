import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const setTimeoutId = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(setTimeoutId);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
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
        className={mode}
      ></progress>
    </>
  );
}
