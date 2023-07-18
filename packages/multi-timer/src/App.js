import React, { useState, useEffect, memo, useCallback } from "react";
import styled from "styled-components";
import { Timer } from "./components/Timer";
import TimeInput from "./components/TimeInput";

function App() {
  const [areTimesToAdd, setTimesToAdd] = useState([]); // an array of integers

  const addTime = useCallback((hours, minutes, seconds) => {
    let addedTime =
      Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
    console.log("addedTime:", addedTime);
    // setTimesToAdd((prevState) => [...prevState, addedTime]);
    setTimesToAdd(prevState => prevState.map((item) => {
      console.log("item of prevState:", item);
      return addedTime;
    }))
  },[]);

  // const time = new Date();
  // time.getSeconds(time.getSeconds() + 300);

  const MemoizedTimer = memo(props => {
    console.log("memoized timer:", props);
    return <Timer expiration={props.expiration} />;
  })

  function ListOfTimers() {
    const List = areTimesToAdd.map((expiration, index) => {
      console.log("expiration, index:", expiration, index);
      const time = new Date();
      time.setSeconds(time.getSeconds() + expiration);
      return <MemoizedTimer expiration={time} key={index} />;
    });
    return List;
  }

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
