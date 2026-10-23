import React from 'react'
import { useState } from 'react'
import userContext from './userContext'

function userContextProvider({children}) {

    const [data , setData] = useState(null);

  return (
    <userContext.Provider value = { {data , setData} }>
        {children}
    </userContext.Provider>
  )
}

export default userContextProvider