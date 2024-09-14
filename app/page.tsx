
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-8 lg:p-12">
      <h1 className="text-md md:text-4xl lg:text-4xl font-extrabold mb-4 md:mb-6">Milestone 04 Assignments</h1>
      <div className="bg-gray-200 text-black p-4 md:p-6 lg:p-8 shadow-lg shadow-gray-400 rounded-xl w-full max-w-lg">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold border-b-4 border-blue-900"> User Authentication</h1>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold border-b-4 border-blue-900">& Api Integration</h1>
      <div className="flex flex-col md:flex-row md:space-x-3 md:space-y-0 space-y-3 justify-center px-4 py-8 text-center">
      <Link href={'/auth/sign_in'} className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-bold"> <button>Signin</button></Link>
      <Link href={'/auth/sign_up'} className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-bold"> <button>Signup</button></Link>
      </div>
      </div> 
    </main>
  );
}
