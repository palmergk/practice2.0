import React, { useState } from 'react'

const UsersComponent = ({userArray, altUserArray, setAltUserArray, setUserArray}) => {
    const [search, setSearch] = useState('')
    

    const HandleSearch = () => {
        if(search){
            const searchFilter = altUserArray.filter(object => object.username.includes(search.toLowerCase()) || object.email.includes(search.toLowerCase()) )
            setAltUserArray(searchFilter)
        }else {
            setAltUserArray(userArray)
        }
    }

    const DeleteObjects = (id) => {
       const nonDeletedObjects = altUserArray.filter(object => object.id !== id)
       setAltUserArray(nonDeletedObjects)
       setUserArray(nonDeletedObjects)
    }

    return (
        <div className='mt-16 bg-white h-[75vh] p-8 shadow-2xl w-7/12 mx-auto rounded-md overflow-y-auto scroll '>
            <div className='border-b text-xl font-bold text-center uppercase'>The company users</div>
            <div className='mt-4 flex items-center justify-center'>
                <input className='w-60 h-fit px-2 py-1 border border-zinc-500 text-sm rounded-sm outline-none' value={search} placeholder='search by username or email' onChange={(event) => setSearch(event.target.value)} onKeyUp={HandleSearch}></input>
            </div>
            <div className='flex flex-col gap-6 mt-10'>
                {altUserArray.map((ele, index) => (
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
                        <div className='ml-auto'>
                            <button className='py-1 px-3 text-xs capitalize rounded-md bg-yellow-800 text-white' onClick={() => DeleteObjects(ele.id)}>delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsersComponent