import Head from 'next/head'
import Image from 'next/image'

export const getStaticPaths = async () => {
    const response = await fetch('https://api.github.com/users')
    const data = await response.json()
    const paths = data.map(devloperName => {
        return {
            params: { username: devloperName.login }
        }
    })
    return {
        paths: paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const username = context.params.username
    const response = await fetch('https://api.github.com/users/' + username)
    const data = await response.json()


    return {
        props: {
            developerDetails: data
        }
    }
}

export default function Details({ developerDetails }) {
    return (
        <div>
            <Head>
                <title>{developerDetails.login}'s Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1 className="text-3xl text-indigo-500 font-semibold text-center my-12">{developerDetails.login}'s  Profile</h1>

                <div className="bg-indigo-100 rounded-lg shadow-xl p-8 box-border max-w-screen-lg mx-auto px-12 flex flex-col">

                    <div className="flex items-center flex-col">
                        <Image src={developerDetails.avatar_url} width="150px" height="150px" className="rounded-full" />
                        <h1 className="text-2xl text-indigo-800 py-4">{developerDetails.login}</h1>

                        <div className="flex items-center space-x-6 my-4">

                            <div className="flex flex-col bg-indigo-200 border border-indigo-400 px-5 py-2 rounded-lg">
                                <h3 className="text-xl text-gray-600">Followers</h3>
                                <span className="text-2xl font-bold text-indigo-700">{developerDetails.followers}</span>
                            </div>
                            <div className="flex flex-col bg-indigo-200 border border-indigo-400 px-5 py-2 rounded-lg">
                                <h3 className="text-xl text-gray-600">Following</h3>
                                <span className="text-2xl font-bold text-indigo-700">{developerDetails.following}</span>
                            </div>
                            <div className="flex flex-col bg-indigo-200 border border-indigo-400 px-5 py-2 rounded-lg ">
                                <h3 className="text-xl text-gray-600">Repos</h3>
                                <span className="text-2xl font-bold text-indigo-700">{developerDetails.public_repos}</span>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <a href={developerDetails.html_url} target="_blank" className="text-white bg-indigo-600 text-base px-3 py-2 rounded-md hover:bg-indigo-200 hover:text-indigo-600 border border-indigo-600 transition duration-300 active:scale-105">Go to Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
