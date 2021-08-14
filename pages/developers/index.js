import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const getStaticProps = async () => {
    const response = await fetch('https://api.github.com/users')
    const data = await response.json()
    return {
        props:{
            developers:data,
        }
    }
}

export default function Developers({ developers}) {
    return (
        <div className="">
            <Head>
                <title>All Developers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="max-w-screen-xl mx-auto px-12">
                <h1 className="text-4xl text-indigo-500 font-bold text-center my-12">Github Users</h1>
                <div className="flex flex-col my-12">
                    {developers.map(developer => {
                        return(
                            <Link href={`/developers/${developer.login}`} key={developer.login} >
                                <div className="flex items-center space-x-3 my-2 select-none cursor-pointer bg-indigo-100 p-4 rounded-lg hover:border-l-4 border-indigo-600 transition duration-700 ease-linear">
                                    <Image src={developer.avatar_url} width="50px" height="50px" className="rounded-full" />
                                    <h1 className="text-lg text-gray-600 hover:text-indigo-800 hover:font-bold transition duration-700 ease-in-out">{developer.login}
                                    </h1>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
