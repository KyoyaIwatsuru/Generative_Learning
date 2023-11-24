'use client'

import { useContext, useEffect } from 'react'
import { ValueContext } from '@/components/value'

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  const {start_time, setStart_time} = useContext(ValueContext)
  useEffect(() => {
    setStart_time(new Date().getTime())
  }, [])

  return (
    <>
      {children}
    </>
  )
}
