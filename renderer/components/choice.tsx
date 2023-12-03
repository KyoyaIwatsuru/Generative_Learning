'use client'

import { works } from '@/lib/data';
import { useContext } from 'react'
import { ValueContext } from '@/components/value'

export default function Choice ({
  work,
  id,
}: {
  work: string
  id: string 
}) {
  const choices = works[Number(work) - 1].work[Number(id) - 1].choices
  const Choice = choices.trim().split(/\r\n|\r|\n/).map(choice => choice.trim())
  const {choice, setChoice} = useContext(ValueContext)

  return (
    <>
      <h1 className="mt-[1%] text-lg font-bold text-center text-gray-900">あなたの回答 {Choice[Number(choice) - 1]}</h1>
    </>
  )
}
