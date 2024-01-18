import { NextButton } from '@/components/button'

export default function Next () {
  return (
    <footer className="h-footer flex flex-col">
      <hr className="border-gray-200" />
      <nav className="my-auto ml-auto mr-[2%]">
        <NextButton />
      </nav>
    </footer>
  )
}
