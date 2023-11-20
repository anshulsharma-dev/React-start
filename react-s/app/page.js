"use client"
import React, { useState } from 'react'
import Header from "@/Components/Header"
import Link from 'next/link'

const page = () => {
  const [user, setUser] = useState("Anshul");
  const [band, setband] = useState("Linkin Park");
  const [song, setsong] = useState("Iridescent");
  return (
    <>
    <Header name={user} rock={band} lightSong={song}/>
    
    <div>
      <h1 >This is Home Page</h1>

       {/* Routing without reloading */}
     <Link href='/About'>About</Link>
     <Link href={'/Courses'}>Courses</Link>
     <Link href={'/Product'}>Product</Link>
    </div>
    
    </>
  )
}

export default page
