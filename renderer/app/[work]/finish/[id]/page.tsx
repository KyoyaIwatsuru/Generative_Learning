import { works,page } from '@/lib/main_data';

export async function generateStaticParams() {
  return await page
}

export default function Page ({
  params,
}: {
  params: { work: number; id: number }
}) {
  const { work, id } = params
  const last = works[work - 1].work.length - 1

  return (
    <main className="h-body">
      {id == works[work - 1].work[last].id
        ? (
          <>
            <h1 className="mt-[5%] text-2xl font-bold text-center text-gray-900">お疲れ様でした！<br/><br/>ファイルの保存を忘れずに！</h1>
            <p className="mt-[10%] text-2xl font-semibold text-center text-gray-900">Nextボタンで<br/>Homeに戻ります</p>
          </>
        )
        : (
          <h1 className="mt-[20%] text-2xl font-bold text-center text-gray-900">次の文章へ</h1>
        )
      }
    </main>
  )
}
