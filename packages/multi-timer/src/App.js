import React, { useState, useEffect, memo, useCallback } from "react";
import styled from "styled-components";
import Timer from "./components/Timer";
import TimeInput from "./components/TimeInput";

function App() {
  const [areTimesToAdd, setTimesToAdd] = useState([]);

  const addTime = (hours, minutes, seconds) => {
    let addedTime =
      Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
    console.log("addedTime:", addedTime);
    setTimesToAdd(areTimesToAdd.concat(addedTime));
  };

  // const time = new Date();
  // time.getSeconds(time.getSeconds() + 300);

  function ListOfTimers() {
    const List = areTimesToAdd.map((expiration) => {
      const time = new Date();
      time.setSeconds(time.getSeconds() + expiration);
      return <Timer expiryTimestamp={time} />;
    });
    return List;
  }

  useEffect(() => {
    console.log("areTimesToAdd:", areTimesToAdd);
  }, [areTimesToAdd]);

  return (
    <AppContainer>
      <InnerContainer>
        <TimeInput onClickAddTimer={addTime} />
        <ListOfTimers />
      </InnerContainer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  padding-left: auto;
  padding-right: auto;
`;

export default App;
