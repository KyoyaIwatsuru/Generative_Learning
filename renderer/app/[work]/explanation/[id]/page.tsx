import { works, page } from '@/lib/data';
import Choice from '@/components/choice'

export async function generateStaticParams() {
  return await page
}

export default function Page ({
  params,
}: {
  params: { work: string; id: string }
}) {
  const { work, id } = params
  const text = works[Number(work) - 1].work[Number(id) - 1].text
  const question = works[Number(work) - 1].work[Number(id) - 1].question
  const choices = works[Number(work) - 1].work[Number(id) - 1].choices
  const answer = works[Number(work) - 1].work[Number(id) - 1].answer
  const explanation_tmp = works[Number(work) - 1].work[Number(id) - 1].explanation
  const Explanation = explanation_tmp.trim().split(/\r\n|\r|\n/).map(choice => choice.trim())
  const explanation = Explanation.map(explanation => '\n' + explanation)

  return (
    <main className="h-body">
      <Choice work={work} id={id}/>
      <h1 className="mt-[2%] text-xl font-bold text-center text-gray-900">{answer}</h1>
      <div className='w-full flex justify-center text-sm'>
        <p className='w-1/2 mt-[2%] ml-[5%] font-medium text-justify'>
          <br />
          Paragraph:
          <br />
          {text}
          <br />
          <br />
          Question:
          <br />
          <br />
          {question}
          <br />
          {choices}
        </p>
        <p className='w-1/2 mt-[2%] mx-[5%] font-medium text-justify'>{explanation}</p>
      </div>
    </main>
  )
}
