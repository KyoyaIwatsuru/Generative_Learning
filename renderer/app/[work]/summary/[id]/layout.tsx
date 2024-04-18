'use client'

import { useContext, useEffect } from 'react'
import { ValueContext } from '@/components/value'

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  const {summary_time, setSummary_time} = useContext(ValueContext)
  useEffect(() => {
    setSummary_time(new Date().getTime())
  }, [])

  return (
    <>
      {children}
    </>
  )
}
