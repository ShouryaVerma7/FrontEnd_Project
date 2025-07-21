import React from 'react'

const FailedTask = () => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg bg-yellow-400 rounded-xl'>

    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4>24 Jan 2025</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
    <p className='text-sm mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium quae sit porro molestiae minus voluptatem ex! Eaque placeat, quas blanditiis quod incidunt minus dolores, pariatur non commodi aliquam quasi?
    </p>

    <div className='mt-2'>
        <button className='w-full'>Failed</button>
    </div>
            </div>
  )
}

export default FailedTask
