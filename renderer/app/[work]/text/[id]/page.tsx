import { works, page } from '@/lib/main_data';

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

  const ws = new WebSocket('ws://localhost:8765/tobii_pro/fixation')
  ws.onmessage = (e) => {
    let d = e.data.split(',')
    if (d[1] === 0 || d[1] === 'nan') {
      return
    }
    const x = d[1] - window.screenX
    const y = d[2] - window.screenY - (window.outerHeight - window.innerHeight)
    console.log(x, y)
  }

  return (
    <main className="h-body">
      <h1 className="mt-[3%] text-2xl font-bold text-center text-gray-900">第{id}文章</h1>
      <p className='mt-[1%] mx-[10%] text-lg text-justify'>{text}</p>
    </main>
  )
}
