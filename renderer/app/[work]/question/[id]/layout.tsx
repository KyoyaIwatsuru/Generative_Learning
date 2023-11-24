'use client'

import { useContext, useEffect } from 'react'
import { ValueContext } from '@/components/value'

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  const {end_time, setEnd_time} = useContext(ValueContext)
  useEffect(() => {
    setEnd_time(new Date().getTime())
  }, [])

  return (
    <>
      {children}
    </>
  )
}
