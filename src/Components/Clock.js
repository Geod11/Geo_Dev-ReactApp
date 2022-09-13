import React, { useEffect, useState } from 'react';

export default function Clock() {
    console.log("Time");
    const [clockState, setClockState] = useState();

useEffect(() => {
  setInterval(() => {
  const date = new Date();
  setClockState(clockState => setClockState(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})));
}, 1000);
}, []);

  return (
    <div>{clockState}</div>
  )
}


