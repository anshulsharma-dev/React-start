import React from 'react'

const Header = (props) => {
    // console.log(props)
  return (
  <>
  <div className='h-14 px-5 bg-green-400 flex
   items-center justify-between'>
     
  <h2>{props.name} </h2>
  <div className='flex gap-8 mr-2'>
    <h4>{props.lightSong}</h4>
    <h4>{props.rock}</h4>
    <h4>Blog</h4>
    <h4>Account</h4>
  </div>
  </div>
  
  
  </>
  )
}

export default Header
