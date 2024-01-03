import { works, page } from '@/lib/main_data';
import { RadioVerticalList } from '@/components/button'

export async function generateStaticParams() {
  return await page
}

export default function Page ({
  params,
}: {
  params: { work: string; id: string }
}) {
  const { work, id } = params
  const question = works[Number(work) - 1].work[Number(id) - 1].question_1
  const choices = works[Number(work) - 1].work[Number(id) - 1].choices_1

  return (
    <main className="h-body">
      <h1 className="mt-[8%] text-xl font-bold text-center text-gray-900">問題： {question}</h1>
      <RadioVerticalList choices={choices}/>
    </main>
  )
}
