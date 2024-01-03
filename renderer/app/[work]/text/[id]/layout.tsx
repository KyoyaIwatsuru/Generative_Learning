'use client'

import { useContext, useEffect } from 'react'
import { ValueContext } from '@/components/value'

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  const {text_time, setText_time} = useContext(ValueContext)
  useEffect(() => {
    setText_time(new Date().getTime())
  }, [])

  const {paragraph, setParagraph} = useContext(ValueContext)
  let para = [0, 0, 0, 0]
  const ws = new WebSocket('ws://localhost:8765/tobii_pro/fixation')
  ws.onmessage = (e) => {
    let d = e.data.split(',')
    if (d[1] === 0 || d[1] === 'nan') {
      return
    }
    if (250.0 <= d[2] && d[2] < 440.0) {
      para[0] += 1
    } else if (440.0 <= d[2] && d[2] < 580.0) {
      para[1] += 1
    } else if (580.0 <= d[2] && d[2] < 720.0) {
      para[2] += 1
    } else if (720.0 <= d[2] && d[2] <= 860.0) {
      para[3] += 1
    }
    const max = para.reduce((a, b) => Math.max(a, b), -Infinity);
    setParagraph(para.indexOf(max));
  }

  return (
    <>
      {children}
    </>
  )
}
