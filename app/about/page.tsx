import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh] mt-[10vh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Connect with Sumona</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow Sumona on social media to stay up-to-date with her latest projects and blog posts.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary p-3 text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <MailIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
