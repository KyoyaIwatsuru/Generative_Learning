'use client'

import { useContext, useEffect } from 'react'
import { ValueContext } from '@/components/value'

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  const {text_time, setText_time} = useContext(ValueContext)
  useEffect(() => {
    setText_time(new Date().getTime())
  }, [])

  return (
    <>
      {children}
    </>
  )
}
