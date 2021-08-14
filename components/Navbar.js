import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <header className="bg-indigo-200 py-6 shadow-xl">
            <div className="flex items-center px-12 max-w-screen-lg mx-auto">
                <div className="flex flex-grow items-center">
                    <Image src="/dc.svg" width={60} height={50} />
                    <a className="text-indigo-800  font-bold text-2xl">Github Users</a>
                </div>
                <div className="flex items-center space-x-3 justify-end">
                    <Link href="/"><a className="text-indigo-600 text-base">Home</a></Link>
                    <Link href="/about"><a className="text-indigo-600 text-base">About</a></Link>
                    <Link href="/developers"><a className="text-white bg-indigo-600 text-base px-3 py-2 rounded-md hover:bg-indigo-200 hover:text-indigo-600 border border-indigo-600 transition duration-300 active:scale-105">All Developers</a></Link>
                </div>
            </div>
        </header>
    )
}
