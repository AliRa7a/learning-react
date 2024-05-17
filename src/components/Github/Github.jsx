import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-8 text-3xl'>
    <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-full' />
    Github followers: {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/AliRa7a')
    return response.json()
}