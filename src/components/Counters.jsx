import React, { useState } from 'react'

export default function Counters() {
  const [counts, setCounts] = useState(0)

  const incre = () => {
    setCounts(counts+1)
  }
  const decre = () => {
    setCounts(counts-1)
  }
  return (
    <div>
      <button onClick={incre}>+</button>
      {JSON.stringify(counts)}
      <button onClick={decre}>-</button>
    </div>
  )
}

