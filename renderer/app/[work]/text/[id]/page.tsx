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
  const title = works[Number(work) - 1].title
  const text = works[Number(work) - 1].work[Number(id) - 1].text

  if (id === '1') {
    return (
      <main className="h-body">
        <h1 className="mt-[2%] text-2xl font-bold text-center text-gray-900">{title}</h1>
        <p className='mt-[2%] mx-[20%] text-justify'>{text}</p>
      </main>
    )
  } else {
    return (
      <main className="h-body">
        <br/>
        <br/>
        <br/>
        <p className='mt-[2%] mx-[20%] text-justify'>{text}</p>
      </main>
    )
  }
}
