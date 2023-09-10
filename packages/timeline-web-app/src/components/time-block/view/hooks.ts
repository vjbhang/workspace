import {useState, useEffect} from "react";
import moment from "moment";


export function useRelativeTimer() {
  const [isStartTime, setStartTime] = useState<moment.Moment>();
  const [isEndTime, setEndTime] = useState<moment.Moment>();

  useEffect(() => {
    console.log(moment());
    setStartTime(moment());
  }, []);

  useEffect(() => {
    function settingEndTime() {
      console.log("setting end time to:", moment());
      setEndTime(moment());
    }

    let timer: NodeJS.Timer;

    if (isStartTime) {
      timer = setInterval(settingEndTime, 1000)
    } 

    return () => {
      clearInterval(timer);
    }
  },[isStartTime])
    

  return [isStartTime, isEndTime];
}