'use client'

import { useContext, useEffect } from 'react'
import { ValueContext } from '@/components/value'
import { works } from '@/lib/main_data';

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { work: number; id: number }
}) {
  const { work, id } = params
  const {text_time, setText_time} = useContext(ValueContext)
  const {paragraph, setParagraph} = useContext(ValueContext)
  const {websocket, setWebSocket} = useContext(ValueContext)

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8765/tobii_pro/fixation')
    if (websocket === true) {
      setText_time(new Date().getTime())
      if (id % 2 === 1) {
        const y_position = works[work - 1].work[id - 1].y_position
        let para = [0, 0, 0, 0]
        ws.onmessage = (e) => {
          let d = e.data.split(',')
          if (d[1] === 0 || d[1] === 'nan') {
            return
          }
          const y = d[2]*1.25
          if (y_position[0] <= y && y < y_position[1]) {
            para[0] += Number(d[3])
          } else if (y_position[1] <= y && y < y_position[2]) {
            para[1] += Number(d[3])
          } else if (y_position[2] <= y && y < y_position[3]) {
            para[2] += Number(d[3])
          } else if (y_position[3] <= y && y <= y_position[4]) {
            para[3] += Number(d[3])
          }
          const max = para.reduce((a, b) => Math.max(a, b), -Infinity);
          setParagraph(para.indexOf(max));
        }
      } else {
        const random = Math.floor(Math.random()*4)
        setParagraph(random)
      }
    } else {
      console.log('Message rejected.')
    }
    return () => {
      ws.close()
    }
  }, [websocket])

  return (
    <>
      {children}
    </>
  )
}
