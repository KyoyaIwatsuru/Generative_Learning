'use client'

import { useState, createContext, useReducer } from "react"
import { useParams } from 'next/navigation';
import { works } from '@/lib/data';

export const ValueContext = createContext({} as {
  start_time: number
  setStart_time: React.Dispatch<React.SetStateAction<number>>
  end_time: number
  setEnd_time: React.Dispatch<React.SetStateAction<number>>
  choice: string
  setChoice: React.Dispatch<React.SetStateAction<string>>
  confidence: string
  setConfidence: React.Dispatch<React.SetStateAction<string>>
})
export const ValueDispatch = createContext({} as React.Dispatch<any>)

export default function ValueProvider({
  children,
}: {
  children: React.ReactNode,
}) {
  const work_id = Number(useParams().work) - 1
  const id = Number(useParams().id) - 1
  const title = works[work_id].title
  const [start_time, setStart_time] = useState(0)
  const [end_time, setEnd_time] = useState(0)
  const [choice, setChoice] = useState('1')
  const [confidence, setConfidence] = useState('1')
  let answer = -1
  if (works[work_id].work[id].answer_id === choice) {
    answer = 1
  } else [
    answer = 0
  ]

  const initialState = [];
  function reducer(results, action) {
    switch (action.type) {
      case 'result': {
        return [...results, {
          start_time: start_time,
          end_time: end_time,
          choice: choice,
          answer: answer,
          confidence: confidence,
        }];
      }
      case 'download': {
        const csvText =
          'index,start_time,end_time,choice,answer,confidence\n' +
          String(
            results.map(
              ({ start_time, end_time, choice, answer, confidence }, index) => [
                index,
                start_time,
                end_time,
                choice,
                answer,
                confidence
              ]
            ).join('\n')
          )
        const now = new Date()
        const blob = new Blob([csvText], { type: 'text/csv' })
        const downloadLink = document.createElement('a')
        downloadLink.href = URL.createObjectURL(blob)
        downloadLink.download = `${title}__${now
          .toISOString()
          .split('.')[0]
          .replace(/:/g, '-')}.csv`
        document.body.appendChild(downloadLink)
        downloadLink.hidden = true
        downloadLink.click()
        downloadLink.remove()
        break
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  const [results, dispatch] = useReducer(reducer, initialState)

  return (
    <ValueDispatch.Provider value={dispatch}>
      <ValueContext.Provider value={{ start_time, setStart_time, end_time, setEnd_time, choice, setChoice, confidence, setConfidence }}>
        {children}
      </ValueContext.Provider >
    </ValueDispatch.Provider>
  );
}
