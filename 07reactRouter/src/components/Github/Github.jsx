import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/anshulsharma-dev")
    //     .then((res) => res.json())
    //     .then((res) => {
    //         console.log(res)
    //         setData(res)})
    // } , [])

    const data = useLoaderData([])

  return (
    <div className='m-6 p-5 bg-gray-700 text-white text-center text-4xl'>
      Name : {data.name}
      <div className='flex justify-center m-5 p-5'>
      <img src={data.avatar_url} alt="Github Picture" width={300}/>
      </div>
      <p>Bio : {data.bio}</p>
      
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const res = await fetch("https://api.github.com/users/anshulsharma-dev")
    return res.json();
}
