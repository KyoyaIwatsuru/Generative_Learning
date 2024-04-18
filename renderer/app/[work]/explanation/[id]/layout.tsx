'use client'

import { useContext, useEffect } from 'react'
import { ValueContext } from '@/components/value'

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  const {explanation_time, setExplanation_time} = useContext(ValueContext)
  useEffect(() => {
    setExplanation_time(new Date().getTime())
  }, [])

  return (
    <>
      {children}
    </>
  )
}
