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
  summary_time: number
  setSummary_time: React.Dispatch<React.SetStateAction<number>>
  finish_time: number
  setFinish_time: React.Dispatch<React.SetStateAction<number>>
  websocket: boolean
  setWebSocket: React.Dispatch<React.SetStateAction<boolean>>
  paragraph: number
  setParagraph: React.Dispatch<React.SetStateAction<number>>
  understand: string
  setUnderstand: React.Dispatch<React.SetStateAction<string>>
  choice: string
  setChoice: React.Dispatch<React.SetStateAction<string>>
  flag: boolean
  setFlag: React.Dispatch<React.SetStateAction<boolean>>
  selects: string[]
  setSelects: React.Dispatch<React.SetStateAction<string[]>>
  flags: boolean[]
  setFlags: React.Dispatch<React.SetStateAction<boolean[]>>
})
export const ValueDispatch = createContext({} as React.Dispatch<any>)

export default function ValueProvider({
  children,
}: {
  children: React.ReactNode,
}) {
  const work = Number(useParams().work) - 1
  const id = Number(useParams().id) - 1
  const title = works[work].title
  const [text_time, setText_time] = useState(0)
  const [understand_time, setUnderstand_time] = useState(0)
  const [question_time, setQuestion_time] = useState(0)
  const [explanation_time, setExplanation_time] = useState(0)
  const [summary_time, setSummary_time] = useState(0)
  const [finish_time, setFinish_time] = useState(0)
  const [websocket, setWebSocket] = useState(true)
  const [paragraph, setParagraph] = useState(0)
  const [understand, setUnderstand] = useState('1')
  const [choice, setChoice] = useState('0')
  const [flag, setFlag] = useState(true)
  const [selects, setSelects] = useState(['0', '0', '0', '0', '0', '0'])
  const [flags, setFlags] = useState([true, true, true, true, true, true])
  let answer = -1
  if (works[work].work[id].paragraph[paragraph].answer_id === choice) {
    answer = 1
  } else {
    answer = 0
  }
  let answers = [-1, -1, -1, -1, -1, -1]
  for (let i = 0; i < 6; i++) {
    if (works[work].work[id].summary.answer_ids[i] === selects[i]) {
      answers[i] = 1
    } else {
      answers[i] = 0
    }
  }
  const sum = answers.reduce((a, b) => a + b, 0)

  const initialState = [];
  function reducer(results, action) {
    switch (action.type) {
      case 'result': {
        return [...results, {
          text_time: text_time,
          understand_time: understand_time,
          question_time: question_time,
          explanation_time: explanation_time,
          summary_time: summary_time,
          finish_time: finish_time,
          paragraph: paragraph,
          understand: understand,
          choice: choice,
          answer: answer,
          selects_1: selects[0],
          selects_2: selects[1],
          selects_3: selects[2],
          selects_4: selects[3],
          selects_5: selects[4],
          selects_6: selects[5],
          answers_1: answers[0],
          answers_2: answers[1],
          answers_3: answers[2],
          answers_4: answers[3],
          answers_5: answers[4],
          answers_6: answers[5],
          sum: sum,
        }];
      }
      case 'download': {
        const csvText =
          'index,text_time,understand_time,question_time,explanation_time,summary_time,finish_time,paragraph,understand,choice,answer,selects_1,selects_2,selects_3,selects_4,answers_1,answers_2,answers_3,answers_4,answers_5,answers_6,sum\n' +
          String(
            results.map(
              ({ text_time, understand_time, question_time, explanation_time, summary_time, finish_time, paragraph, understand, choice, answer, selects_1, selects_2, selects_3, selects_4, answers_1, answers_2, answers_3, answers_4, answers_5, answers_6, sum }, index) => [
                index,
                text_time,
                understand_time,
                question_time,
                explanation_time,
                summary_time,
                finish_time,
                paragraph,
                understand,
                choice,
                answer,
                selects_1,
                selects_2,
                selects_3,
                selects_4,
                answers_1,
                answers_2,
                answers_3,
                answers_4,
                answers_5,
                answers_6,
                sum
              ]
            ).join('\n')
          )
        const now = new Date()
        const blob = new Blob([csvText], { type: 'text/csv' })
        const downloadLink = document.createElement('a')
        downloadLink.href = URL.createObjectURL(blob)
        downloadLink.download = `${title}_${now
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
      <ValueContext.Provider value={{ text_time, setText_time, understand_time, setUnderstand_time, question_time, setQuestion_time, explanation_time, setExplanation_time, summary_time, setSummary_time, finish_time, setFinish_time, websocket, setWebSocket, paragraph, setParagraph, understand, setUnderstand, choice, setChoice, flag, setFlag, selects, setSelects, flags, setFlags }}>
        {children}
      </ValueContext.Provider >
    </ValueDispatch.Provider>
  );
}
