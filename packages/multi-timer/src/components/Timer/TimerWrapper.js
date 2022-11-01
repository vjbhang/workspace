import { useEffect, useState, useRef } from "react";
import Timer from "./Timer";

export default function TimerWrapper({ expiration }) {
  const [isSetTime, setSetTime] = useState();
  const isInitRef = useRef(false);
  const isSetTimeRef = useRef();

  useEffect(() => {
    if (!isInitRef.current) {
      setSetTime(expiration);
      isSetTimeRef.current = expiration;
      isInitRef.current = true;
    }
  }, []);

  if (isInitRef.current) {
    return <Timer expiryTimestamp={isSetTimeRef.current} />;
  }
}
