'use client'

import { useContext, useEffect } from 'react'
import { ValueContext } from '@/components/value'

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  const {question_time, setQuestion_time} = useContext(ValueContext)
  useEffect(() => {
    setQuestion_time(new Date().getTime())
  }, [])

  return (
    <>
      {children}
    </>
  )
}
