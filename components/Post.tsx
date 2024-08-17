'use client'
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import DeletePostButton from './DeletePostButton';

interface PostProps {
    id: number | string;
    title: string;
    content: string | null;
    authorName: string | null;
    deleteThis: deleteThis
}
interface deleteThis {
    (idx: string): void;
  }

const Post: React.FC<PostProps> = ({ id, title, content, authorName, deleteThis }) => {
    const truncateContent = (text: string | null, maxLength: number) => {
        if (!text) return '';
        const words = text.split(' ');
        return words.length > maxLength ? words.slice(0, maxLength).join(' ') + '...' : text;
    };

    const displayedContent = truncateContent(content, 70);

    return (
        <div>
            <Card className="w-full max-w-md">
                <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Avatar className="w-6 h-6 border">
                                    <AvatarImage src="/placeholder-user.jpg" />
                                    <AvatarFallback>SU</AvatarFallback>
                                </Avatar>
                                <span>{authorName}</span>
                            </div>
                            <Separator orientation="vertical" className="h-4" />
                            <span>July 31, 2024</span>
                        </div>
                    </div>
                    <div className="text-muted-foreground">
                        {displayedContent}
                    </div>
                    <div className='flex items-center justify-between'>
                        <Button variant="link" className="justify-start">
                            Read more
                        </Button>
                        <span onClick={()=>deleteThis(id as string)}>
                        <DeletePostButton postId={id} />
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Post;
