import {useState, useEffect} from "react";
import moment from "moment";


export function useRelativeTimer() {
  const [isStartTime, setStartTime] = useState(null);
  const [isEndTime, setEndTime] = useState(null);

  useEffect(() => {
    console.log(moment().fromNow());
    setStartTime
  }, []);

  return isStartTime;
}