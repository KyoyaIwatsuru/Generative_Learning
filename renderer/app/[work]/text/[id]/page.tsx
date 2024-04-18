import { works, page } from '@/lib/main_data';

export async function generateStaticParams() {
  return await page
}

export default function Page ({
  params,
}: {
  params: { work: number; id: number }
}) {
  const { work, id } = params
  const paragraphs = works[work - 1].work[id - 1].paragraph

  return (
    <main className="h-body">
      <h1 className="mt-[3%] text-2xl font-bold text-center text-gray-900">第{id}文章</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className='mt-0 mx-[10%] text-lg text-justify'>{paragraph.text}</p>
      ))}
    </main>
  )
}
