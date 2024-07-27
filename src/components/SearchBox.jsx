"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
    const router = useRouter();
    const [search,setSearch] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`)
        setSearch("")
    }

  return (
    <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handelSubmit}>
       <input type="text" placeholder='Search Keywords...'  className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       /> 
       <button className="text-amber-600 disabled:text-gray-400 rounded-md px-[13px]" disabled={search === ''}><FaSearch size={25} /></button>
    </form>
  )
}
