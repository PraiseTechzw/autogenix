import { UserButton } from '@clerk/nextjs'
import React from 'react'

function home() {
  return (
    <div>
      <p>Home</p>

      <UserButton afterSwitchSessionUrl='/'/>
    </div>
  )
}

export default home