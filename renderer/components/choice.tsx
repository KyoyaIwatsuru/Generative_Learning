'use client'

import { works } from '@/lib/main_data';
import { useContext } from 'react'
import { ValueContext } from '@/components/value'

export default function Choice ({
  work,
  id,
}: {
  work: string
  id: string 
}) {
  const {paragraph, setParagraph} = useContext(ValueContext)
  const choices = works[Number(work) - 1].work[Number(id) - 1].paragraph[paragraph].choices
  const Choice = choices.trim().split(/\r\n|\r|\n/).map(choice => choice.trim())
  const {choice, setChoice} = useContext(ValueContext)
  const answer = works[Number(work) - 1].work[Number(id) - 1].paragraph[paragraph].answer

  if (works[Number(work) - 1].work[Number(id) - 1].paragraph[paragraph].answer_id === choice) {
    return (
      <>
        <h1 className="mt-[12%] text-2xl font-bold text-center text-gray-900">答えは正解です！</h1>
        <h1 className="mt-[3%] text-xl font-bold text-center text-gray-900">あなたの解答 {Choice[Number(choice) - 1]}</h1>
        <h1 className="mt-[3%] text-xl font-bold text-center text-gray-900">{answer}</h1>
      </>
    )
  } else {
    return (
      <>
        <h1 className="mt-[12%] text-2xl font-bold text-center text-gray-900">答えは不正解です...</h1>
        <h1 className="mt-[3%] text-xl font-bold text-center text-gray-900">あなたの解答 {Choice[Number(choice) - 1]}</h1>
        <h1 className="mt-[3%] text-xl font-bold text-center text-gray-900">{answer}</h1>
      </>
    )
  }
}
