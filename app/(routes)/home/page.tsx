import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-6">
      {/* About Me Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">About Me</h2>
        <p className="text-md text-gray-black">
          I am a student at GIAIC <span className="text-blue-900 font-bold">Kanwal Heer</span>, where we were given the opportunity to take a free course in Artificial Intelligence, thanks to the support of <span className="text-blue-900 font-bold">Governor Kamran Tesori</span> and <span className="text-blue-900 font-bold">Sir Zia</span>. Our next quarter has begun, where we are tasked with completing five milestones in Next.js. I have completed three of these milestones, and now Im working on the fourth one, titled Milestone 04 Assignments.
        </p>
      </section>

      {/* Milestone 04 Assignments Section */}
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Milestone 04 Assignments</h1>
        <p className="text-lg text-black mb-4">
          This assignment involved two main tasks: first, fetching data from a public API, and second, implementing authentication. I have successfully completed both tasks, demonstrating my skills in working with APIs and securing applications.
        </p>
        <p className="text-lg text-blue-800 mb-4 font-bold">
          Weather App Projects<Link href="/projects" className="hover:underline"> here</Link>.
        </p>
      </section>
{/* 
      {/* Previous Milestones Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Previous Milestones</h2>
        <div className="list-disc list-inside text-lg text-gray-600 flex flex-col"> 
          <Link href="https://milestone-1-hello-world-application-in-next-js.vercel.app/" className="text-blue-800 hover:underline font-semibold">Hello World</Link>
          <Link href="https://milestone-02-personal-portfolio-oyy9.vercel.app/" className="text-blue-800 hover:underline font-semibold">Personal Portfolio</Link>
          <Link href="https://milestone-03-blog-post.vercel.app/blogs" className="text-blue-800 hover:underline font-semibold">Blog Post App</Link>
          <Link href="https://milestone-03-project-k3tm.vercel.app/" className="text-blue-800 hover:underline font-semibold">E-Commerce App</Link>
        </div>
      </section>
    </div>
  );
}
