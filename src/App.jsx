import React, { useState } from 'react'
import UsersComponent from './UsersComponent'

const App = () => {

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: ""
  })

  const HandleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const [userArray, setUserArray] = useState([])
  const [error, setError] = useState('')

  // const Array = [
  //   "option",
  //   "ready",
  //   "go"
  // ]
  // console.log(Array[1])


  const AddUsers = () => {
    setTimeout(() => {
      setError('')
    }, 1000)

    if (!form.username) return setError('Enter fields correctly')
    if (!form.email) return setError('Enter fields correctly')
    if (!form.phone) return setError('Enter fields correctly')

    setUserArray([
      ...userArray,
      form
    ])

    setForm({
      username: "",
      email: "",
      phone: ""
    })
  }




  return (
    <div className='w-3/4 mx-auto my-10 '>
      <div className='flex items-center gap-4 mx-auto relative w-fit'>
        <div className='flex flex-col gap-4'>
          <input type='text' className='border outline-none p-1.5 text-sm w-64 border-zinc-300' name='username' value={form.username} onChange={HandleForm} />
          <input type='email' className='border outline-none p-1.5 text-sm w-64 border-zinc-300' name='email' value={form.email} onChange={HandleForm} />
          <input type='text' className='border outline-none p-1.5 text-sm w-64 border-zinc-300' name='phone' value={form.phone} onChange={HandleForm} />
        </div>
        <button className='bg-yellow-400 px-6 py-2 rounded-lg font-medium text-white capitalize' onClick={AddUsers}>add</button>
        <div className='text-xs text-red-500 text-center absolute -bottom-6 left-0'>{error}</div>
      </div>
      <UsersComponent
        userArray={userArray}
      />
    </div>
  )
}

export default App