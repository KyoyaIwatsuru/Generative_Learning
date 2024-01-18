'use client'

import { useContext } from 'react'
import { Select, Option } from "@material-tailwind/react";
import { works } from '@/lib/main_data';
import { ValueContext } from '@/components/value'

export function SelectValidations({
  params,
}: {
  params: { work: number; id: number }
}) {
  const { work, id } = params
  const question = works[work - 1].work[id - 1].summary.question
  const choices = works[work - 1].work[id - 1].summary.choices
  const {selects, setSelects} = useContext(ValueContext)
  const {flags, setFlags} = useContext(ValueContext)
  const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

  function handleSelect(value, index) {
    const nextSelects = selects.map((v, i) => {
      if (i === index) {
        return value;
      } else {
        return v;
      }
    });
    const nextFlags = flags.map((b, i) => {
      if (i === index) {
        return false;
      } else {
        return b;
      }
    });
    setSelects(nextSelects);
    setFlags(nextFlags);
  }

  return (
    <>
      <h1 className="mt-[2%] text-xl font-bold text-center text-gray-900">要約問題</h1>
      <p className="mt-[1%] mx-[10%] text-lg text-justify">{question}</p>
      <p className="mx-[25%] text-lg">{choices}</p>
      <div className="mx-[5%] flex justify-between gap-3">
        {selects.map((select, index) => (
          <Select
            key={index}
            size="lg"
            label={`${index + 1}問目`}
            onChange={value => handleSelect(value, index)}
            error={flags[index]}
            success={!flags[index]}
          >
            {alphabets.map((alphabet, i) => (
              <Option key={i} value={`${i + 1}`} className='text-center'>{alphabet}</Option>
            ))}
          </Select>
        ))}
      </div>
    </>
  );
}