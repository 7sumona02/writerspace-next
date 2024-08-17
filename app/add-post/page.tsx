'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { AddPost } from "@/actions/db";

export default function Page() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    }

    const handleSubmit = async () => {
        const res = await AddPost({title, content})
        console.log(res)
        router.replace('/')
        setTitle('');
        setContent('');
    }

    return (
        <div className="h-screen w-full max-w-3xl mx-auto px-4 py-32">
            <div className="space-y-6">
                <div>
                    <Input
                        type="text"
                        placeholder="Enter blog post title"
                        className="text-2xl font-bold"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="prose prose-gray dark:prose-invert">
                    <Textarea
                        placeholder="Start writing your blog post..."
                        className="min-h-[400px] resize-none"
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <div className="flex justify-end">
                    <Button type="submit" onClick={handleSubmit}>Publish</Button>
                </div>
            </div>
        </div>
    );
}