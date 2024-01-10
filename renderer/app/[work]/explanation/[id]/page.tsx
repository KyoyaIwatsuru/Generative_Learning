import { page } from '@/lib/main_data';
import Choice from '@/components/choice'

export async function generateStaticParams() {
  return await page
}

export default function Page ({
  params,
}: {
  params: { work: number; id: number }
}) {
  return (
    <main className="h-body relative">
      <h1 className='absolute top-5 left-20 font-bold text-2xl text-white bg-gray-900 rounded-lg px-8 py-3'>解説</h1>
      <Choice params={params}/>
    </main>
  )
}
