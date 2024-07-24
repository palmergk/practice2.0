import React, { useState } from 'react'
import UsersComponent from './UsersComponent'

const App = () => {

  const [search, setSearch] = useState('')
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
  })


  const HandleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const [userArray, setUserArray] = useState([])
  const [altUserArray, setAltUserArray] = useState([])
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

    const date = new Date()
    const formdata = {
      ...form,
      id: date.getTime(),
    }

    setUserArray([
      ...userArray,
      formdata
    ])

    setAltUserArray([
      ...altUserArray,
      formdata
    ])

    setForm({
      username: "",
      email: "",
      phone: ""
    })
  }

  const HandleSearch = () => {
    if (search) {
      const searchFilter = altUserArray.filter(object => object.username.includes(search.toLowerCase()) || object.email.includes(search.toLowerCase()))
      setAltUserArray(searchFilter)
    } else {
      setAltUserArray(userArray)
    }
  }





  return (
    <div className='w-3/4 mx-auto my-10 '>
      <div className='flex items-center gap-4 mx-auto relative w-fit'>
        <div className='flex flex-col gap-4'>
          <input type='text' className='border outline-none p-1.5 text-sm w-64 border-zinc-300' name='username' value={form.username} placeholder='Enter a username' onChange={HandleForm} />
          <input type='email' className='border outline-none p-1.5 text-sm w-64 border-zinc-300' name='email' value={form.email} placeholder='Enter a email' onChange={HandleForm} />
          <input type='text' className='border outline-none p-1.5 text-sm w-64 border-zinc-300' name='phone' value={form.phone} placeholder='Enter a phone number' onChange={HandleForm} />
        </div>
        <button className='bg-yellow-800 px-6 py-2 rounded-lg font-medium text-white capitalize' onClick={AddUsers}>add</button>
        <div className='text-xs text-red-500 text-center absolute -bottom-6 left-0'>{error}</div>
      </div>

      <div className='mt-16 bg-white h-[75vh] p-8 shadow-2xl w-7/12 mx-auto rounded-md overflow-y-auto scroll '>
        <div className='border-b text-xl font-bold text-center uppercase'>The company users</div>
        <div className='mt-4 flex items-center justify-center'>
          <input className='w-60 h-fit px-2 py-1 border border-zinc-400 text-sm rounded-sm outline-none' value={search} placeholder='search by username or email' onChange={(event) => setSearch(event.target.value)} onKeyUp={HandleSearch}></input>
        </div>
        <div className='flex flex-col gap-6 mt-10'>
          {altUserArray.map((ele, index) => (
            <UsersComponent
              key={index}
              ele={ele}
              userArray={userArray}
              setUserArray={setUserArray}
              altUserArray={altUserArray}
              setAltUserArray={setAltUserArray}
            />
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default App