import { works, page } from '@/lib/main_data';
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
  // const text = works[Number(work) - 1].work[Number(id) - 1].text
  // const question = works[Number(work) - 1].work[Number(id) - 1].question
  // const choices = works[Number(work) - 1].work[Number(id) - 1].choices
  // const answer = works[Number(work) - 1].work[Number(id) - 1].answer
  // const explanation_tmp = works[Number(work) - 1].work[Number(id) - 1].explanation
  // const Explanation = explanation_tmp.trim().split(/\r\n|\r|\n/).map(choice => choice.trim())
  // const explanation = Explanation.map(explanation => '\n' + explanation)
  const last = works[Number(work) - 1].work.length - 1

  if (Number(id) === works[Number(work) - 1].work[last].id) {
    return (
      <main className="h-body relative">
        <h1 className="mt-[20%] text-2xl font-bold text-center text-gray-900">Nextボタンで保存を行います</h1>
      </main>
    )
  } else {
    return (
      <main className="h-body relative">
        {/* <h1 className='absolute top-5 left-20 font-bold text-2xl text-white bg-button-home rounded-xl px-8 py-3'>解説</h1> */}
        {/* <Choice work={work} id={id}/>
        <h1 className="mt-[3%] text-xl font-bold text-center text-gray-900">{answer}</h1> */}
        <h1 className="mt-[20%] text-2xl font-bold text-center text-gray-900">次の文章へ</h1>
        {/* <div className='w-full flex justify-center text-sm'>
          <p className='w-1/2 mt-[1%] ml-[5%] font-medium text-justify'>
            <br />
            Paragraph:
            <br />
            {text}
            <br />
            <br />
            Question:&nbsp;&nbsp;&nbsp;
            {question}
            <br />
            {choices}
          </p>
          <p className='w-1/2 mt-[1%] mx-[5%] font-medium text-justify'>{explanation}</p>
        </div> */}
      </main>
    )
  }
}
