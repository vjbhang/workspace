import { useEffect, useState, useRef } from "react";
import Timer from "./Timer";

export default function TimerWrapper({ expiration }) {
  if (expiration) {
    return <Timer expiryTimestamp={expiration} />;
  }
}
