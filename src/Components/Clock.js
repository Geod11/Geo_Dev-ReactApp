import React, { useEffect, useState } from 'react'

function Clock() {

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

export default Clock 