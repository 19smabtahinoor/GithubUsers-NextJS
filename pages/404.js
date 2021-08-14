import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'


export default function Developers() {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },1500)
    },[])
    return (
        <div className="">
            <Head>
                <title>Page Not Found</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="max-w-screen-xl mx-auto px-12 ">
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-5xl text-indigo-700 text-center font-bold">Page Not found!!!</h1>

                    <Link href="/">
                        <a className="text-gray-500 mt-4">Go to <span className="text-white bg-indigo-600 text-base px-3 py-2 rounded-md hover:bg-white hover:text-indigo-600 border border-indigo-600 transition duration-300 active:scale-105 inline-block">Homepage</span></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
