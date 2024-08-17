'use server'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function DeletePost(id: string){
    const isExist = prisma.post.findFirst({
        where:{
            id,
        }
    })

    if (isExist !== null){
    return await prisma.post.delete({
        where: {
            id,
        }
    })}
    else{
        return "Hello";
    }

}

export async function AddPost({title, content}: {title: string, content: string}){
    return await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            author: {create: {
                name: 'Sumona'
            }}
        }
    })
}


export async function getPosts(){
    const posts = await prisma.post.findMany({
      where:
        {published: true},
        include: {
          author: {
            select: {name: true}
          }
        }
    })
    return posts;
  }
  