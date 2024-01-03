'use client'

import { useState, createContext, useReducer } from "react"
import { useParams } from 'next/navigation';
import { works } from '@/lib/main_data';

export const ValueContext = createContext({} as {
  text_time: number
  setText_time: React.Dispatch<React.SetStateAction<number>>
  understand_time: number
  setUnderstand_time: React.Dispatch<React.SetStateAction<number>>
  question_time: number
  setQuestion_time: React.Dispatch<React.SetStateAction<number>>
  explanation_time: number
  setExplanation_time: React.Dispatch<React.SetStateAction<number>>
  understand: string
  setUnderstand: React.Dispatch<React.SetStateAction<string>>
  choice: string
  setChoice: React.Dispatch<React.SetStateAction<string>>
  flag: boolean
  setFlag: React.Dispatch<React.SetStateAction<boolean>>
  paragraph: number
  setParagraph: React.Dispatch<React.SetStateAction<number>>
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
  const [text_time, setText_time] = useState(0)
  const [understand_time, setUnderstand_time] = useState(0)
  const [question_time, setQuestion_time] = useState(0)
  const [explanation_time, setExplanation_time] = useState(0)
  const [understand, setUnderstand] = useState('1')
  const [choice, setChoice] = useState('0')
  const [flag, setFlag] = useState(true)
  const [paragraph, setParagraph] = useState(0)
  let answer = -1
  if (works[work_id].work[id].paragraph[paragraph].answer_id === choice) {
    answer = 1
  } else {
    answer = 0
  }

  const initialState = [];
  function reducer(results, action) {
    switch (action.type) {
      case 'result': {
        return [...results, {
          text_time: text_time,
          understand_time: understand_time,
          question_time: question_time,
          explanation_time: explanation_time,
          understand: understand,
          choice: choice,
          answer: answer,
        }];
      }
      case 'download': {
        const csvText =
          'index,text_time,understand_time,question_time,explanation_time,understand,choice,answer\n' +
          String(
            results.map(
              ({ text_time, understand_time, question_time, explanation_time, understand, choice, answer }, index) => [
                index,
                text_time,
                understand_time,
                question_time,
                explanation_time,
                understand,
                choice,
                answer
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
      <ValueContext.Provider value={{ text_time, setText_time, understand_time, setUnderstand_time, question_time, setQuestion_time, explanation_time, setExplanation_time, understand, setUnderstand, choice, setChoice, flag, setFlag, paragraph, setParagraph }}>
        {children}
      </ValueContext.Provider >
    </ValueDispatch.Provider>
  );
}
