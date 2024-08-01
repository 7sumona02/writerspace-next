'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'

interface DeletePostButtonProps {
    postId: string;
}

const DeletePostButton: React.FC<DeletePostButtonProps> = ({postId}) => {
    const router = useRouter();

    async function handleClick() {
        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE'
            })
            router.refresh
        } catch(e){
            console.error(e)
        }
    }
  return (
    <div>
      <Button onClick={handleClick}>Delete Post</Button>
    </div>
  )
}

export default DeletePostButton
