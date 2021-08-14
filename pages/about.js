import Head from 'next/head'

export default function About() {
    return (
        <div className="mx-8">
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-screen-xl mx-auto my-24 px-12 p-12 rounded-xl shadow-xl bg-gray-50 ">
                <h1 className="text-5xl text-indigo-700 text-center font-bold">About</h1>

                <p className="text-base text-gray-400 mt-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci veniam iusto delectus? Eveniet recusandae animi voluptates fugit soluta, molestias sint iure aspernatur quod repudiandae magni similique exercitationem natus nemo officiis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci veniam iusto delectus? Eveniet recusandae animi voluptates fugit soluta, molestias sint iure aspernatur quod repudiandae magni similique exercitationem natus nemo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam possimus incidunt nostrum voluptatibus sint minima deserunt expedita, unde odio impedit voluptate placeat aliquid eum provident laboriosam assumenda repellendus? Praesentium.</p>
            </div>
        </div>
    )
}


