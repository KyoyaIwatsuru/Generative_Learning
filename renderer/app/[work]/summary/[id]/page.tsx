import { page } from '@/lib/main_data';
import { SelectValidations } from '@/components/select'

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
      <SelectValidations params={params}/>
    </main>
  )
}
