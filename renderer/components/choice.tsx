'use client'

import { works } from '@/lib/main_data';
import { useContext } from 'react'
import { ValueContext } from '@/components/value'

export default function Choice ({
  params,
}: {
  params: { work: number; id: number }
}) {
  const { work, id } = params
  const {paragraph, setParagraph} = useContext(ValueContext)
  const {choice, setChoice} = useContext(ValueContext)
  const choices = works[work - 1].work[id - 1].paragraph[paragraph].choices
  const Choices = choices.trim().split(/\r\n|\r|\n/).map(choice => choice.trim())
  const answer = works[work - 1].work[id - 1].paragraph[paragraph].answer
  const text = works[work - 1].work[id - 1].paragraph[paragraph].text
  const question = works[work - 1].work[id - 1].paragraph[paragraph].question
  const explanation = works[work - 1].work[id - 1].paragraph[paragraph].explanation
  const Explanation = explanation.trim().split(/\r\n|\r|\n/).map(choice => choice.trim())

  return (
    <>
      {works[work - 1].work[id - 1].paragraph[paragraph].answer_id === choice 
        ? <h1 className="mt-[2%] text-2xl font-bold text-center text-gray-900">答えは正解です！</h1>
        : <h1 className="mt-[2%] text-2xl font-bold text-center text-gray-900">答えは不正解です...</h1>
      }
      <h1 className="mt-[2%] text-xl font-bold text-center text-gray-900">あなたの解答 {Choices[Number(choice) - 1]}</h1>
      <h1 className="mt-[2%] text-xl font-bold text-center text-gray-900">{answer}</h1>
      <div className='w-full flex justify-center font-medium'>
        <p className='w-3/5 ml-[5%] text-justify'>
          <br />
          第{paragraph + 1}段落：
          <br />
          {text}
          <br />
          <br />
          問題：{question}
          <br />
          {choices}
        </p>
        <p className='w-2/5 mx-[5%] text-justify'>
          <br />
          解説：
          <br />
          <br />
          {Explanation}
        </p>
      </div>
    </>
  )
}
