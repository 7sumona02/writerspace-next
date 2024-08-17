'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import { DeletePost } from '@/actions/db';

interface DeletePostButtonProps {
    postId: string | number;
}

const DeletePostButton: React.FC<DeletePostButtonProps> = ({postId}) => {
    const router = useRouter();

    async function handleClick() {
        const res = await DeletePost(postId as string);
        console.log(res)
        router.refresh();
    }

    
  return (
    <div>
      <Button variant={'outline'} className='rounded-lg' onClick={handleClick}>Delete Post</Button>
    </div>
  )
}

export default DeletePostButton
