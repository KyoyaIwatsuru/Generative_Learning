import { works, page } from '@/lib/data';

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

  return (
    <main className="h-body">
      <h1 className="mt-[3%] text-2xl font-bold text-center text-gray-900">第{id}文章</h1>
      <p className='mt-[1%] mx-[20%] text-lg text-justify'>{text}</p>
    </main>
  )
}
