import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const UserTopbar = () => {
  return (
    <div className='h-[6vh] w-full flex justify-center items-center shadow-sm shadow-primary'>
    <div className='w-[95%] h-full flex items-center justify-end gap-4'>
      
        <Avatar>
            <AvatarImage src="https://gitfghhub.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SH</AvatarFallback>
        </Avatar>
    </div>
</div>
  )
}

export default UserTopbar