import { HomeButton } from '@/components/button'

export default function Header () {
  return (
    <header className="h-header flex flex-col">
      <nav className="my-auto mx-[2%]">
        <HomeButton />
      </nav>
      <hr className="border-gray-200" />
    </header>
  )
}
