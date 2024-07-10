import React from 'react'

const UsersComponent = ({userArray}) => {
    return (
        <div className='mt-16 bg-white h-[75vh] p-8 shadow-2xl w-1/2 mx-auto rounded-md overflow-y-auto scroll'>
            <div className='border-b text-xl font-bold text-center uppercase'>The company users</div>
            <div className='flex flex-col gap-6 mt-10'>
                {userArray.map((ele, index) => (
                    <div key={index} className='w-full border h-fit p-2 flex flex-col gap-2'>
                        <div className='flex justify-between text-sm capitalize'>
                            <div className='font-medium'>Username:</div>
                            <div>{ele.username}</div>
                        </div>
                        <div className='flex justify-between text-sm'>
                            <div className='font-medium'>Email:</div>
                            <div>{ele.email}</div>
                        </div>
                        <div className='flex justify-between text-sm '>
                            <div className='font-medium'>Phone:</div>
                            <div>{ele.phone}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsersComponent