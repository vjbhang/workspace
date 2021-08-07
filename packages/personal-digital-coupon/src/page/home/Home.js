import React, { useState } from "react";
import { Container } from "./Home.styled";

// component
import Screen from "../../component/atom/screen";
import Coupon from "../../component/molecule/coupon";

export function Home() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <Screen>
      <Coupon />
    </Screen>
  );
}
