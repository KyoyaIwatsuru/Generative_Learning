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

  return (
    <main className="h-body">
      <RadioVerticalList work={work} id={id}/>
    </main>
  )
}
