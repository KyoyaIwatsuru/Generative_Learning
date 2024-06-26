import { page } from '@/lib/main_data';
import { RadioVerticalList } from '@/components/button'

export async function generateStaticParams() {
  return await page
}

export default function Page ({
  params,
}: {
  params: { work: number; id: number }
}) {
  return (
    <main className="h-body">
      <RadioVerticalList params={params}/>
    </main>
  )
}
