'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search } from '@/icons/Search'

export function SearchInput() {
  const searchParams = useSearchParams()
  const [term, setTerm] = useState<string>(() => searchParams.get('q') ?? '')

  
  useEffect(() => {
    const q = searchParams.get('q') ?? ''
    setTerm((current) => (current === q ? current : q))
  }, [searchParams])



  return (
    <div className="relative w-80 h-10">
      <input
        type="text"
        placeholder="Buscar..."
        value={term}
        onChange={(e) => {
          const v = e.target.value
          setTerm(v)
         
        }}
        className="w-full h-full px-4 pr-12 text-sm border border-cyan-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder:text-gray-400"
      />
      <span className="absolute right-[15px] top-1/2 -translate-y-1/2 ">
        <Search />
      </span>
    </div>
  )
}
