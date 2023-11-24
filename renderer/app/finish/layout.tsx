import { Metadata } from 'next'
import Header from '@/components/header';
import Next from '@/components/next';

export const metadata: Metadata = {
  title: 'Finish',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <Header />
      {children}
      <Next />
    </>
  )
}
