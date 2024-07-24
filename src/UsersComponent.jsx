import React, { useState } from 'react'

const UsersComponent = ({ ele, userArray, altUserArray, setAltUserArray, setUserArray }) => {
    const [update, setUpdate] = useState(false)



    const [editform, setEditForm] = useState({
        username: '',
        email: '',
        phone: '',
    })


    const HandleEditForm = (event) => {
        setEditForm({
            ...editform,
            [event.target.name]: event.target.value,
        })
    }


    const DeleteObjects = (id) => {
        const nonDeletedObjects = altUserArray.filter(object => object.id !== id)
        setAltUserArray(nonDeletedObjects)
        setUserArray(nonDeletedObjects)
        setSingleUser({})
    }

    const PassObjectFunction = (ele) => {
        setEditForm({
            username: ele.username,
            email: ele.email,
            phone: ele.phone
        })
    }

    const UpdateChanges = (id) => {
        const updatedElement = altUserArray.map((ele) => {
            if (id === ele.id) {
                return {
                    ...ele,
                    username: editform.username,
                    email: editform.email,
                    phone: editform.phone
                }
            }
            return ele
        })

        setAltUserArray(updatedElement)
        setUserArray(updatedElement)
        setUpdate(false)

    }


    return (
        <div className='w-full text-black bg-[whitesmoke] rounded-md h-fit p-3 flex flex-col gap-2'>
            <div className='flex justify-between text-sm capitalize'>
                <div className='font-medium'>Username:</div>
                {!update ? <div>{ele.username}</div>
                    :
                    <input className='w-60 h-8 p-1 border outline-none' name='username' value={editform.username} onChange={HandleEditForm}></input>}
            </div>
            <div className='flex justify-between text-sm'>
                <div className='font-medium'>Email:</div>
                {!update ? <div>{ele.email}</div>
                    :
                    <input className='w-60 h-8 p-1 border outline-none' name='email' value={editform.email} onChange={HandleEditForm}></input>}
            </div>
            <div className='flex justify-between text-sm '>
                <div className='font-medium'>Phone:</div>
                {!update ? <div>{ele.phone}</div>
                    :
                    <input className='w-60 h-8 p-1 border outline-none' name='phone' value={editform.phone} onChange={HandleEditForm}></input>}
            </div>
            {update ?
                <div className='ml-auto flex gap-2 items-center'>
                    <button className='py-1 px-3 text-xs capitalize rounded-md bg-black text-white' onClick={() => { setUpdate(false); setSingleUser({}) }}>cancel</button>
                    <button className='py-1 px-3 text-xs capitalize rounded-md bg-black text-white' onClick={() => UpdateChanges(ele.id)}>save</button>
                </div>
                :
                <div className='ml-auto flex gap-2 items-center'>
                    <button className='py-1 px-3 text-xs capitalize rounded-md bg-yellow-800 text-white' onClick={() => { setUpdate(true); PassObjectFunction(ele) }}>update</button>
                    <button className='py-1 px-3 text-xs capitalize rounded-md bg-yellow-800 text-white' onClick={() => DeleteObjects(ele.id)}>delete</button>
                </div>
            }
        </div>
    )
}

export default UsersComponent