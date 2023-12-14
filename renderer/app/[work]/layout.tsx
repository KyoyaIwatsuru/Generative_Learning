import ValueProvider from '@/components/value';
import Header from '@/components/header';
import Next from '@/components/next';

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <ValueProvider>
        <Header />
        {children}
        <Next />
      </ValueProvider>
    </>
  )
}
