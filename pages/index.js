import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-8">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Github User List" />
      </Head>

      <div className="max-w-screen-xl mx-auto my-24 px-12 p-6 rounded-xl shadow-xl bg-gray-50 ">
        <h1 className="text-5xl text-indigo-700 text-center font-bold">Home Page</h1>

        <p className="text-base text-gray-400 mt-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci veniam iusto delectus? Eveniet recusandae animi voluptates fugit soluta, molestias sint iure aspernatur quod repudiandae magni similique exercitationem natus nemo officiis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci veniam iusto delectus? Eveniet recusandae animi voluptates fugit soluta, molestias sint iure aspernatur quod repudiandae magni similique exercitationem natus nemo officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam possimus incidunt nostrum voluptatibus sint minima deserunt expedita, unde odio impedit voluptate placeat aliquid eum provident laboriosam assumenda repellendus? Praesentium.</p>

        <Link href="/developers">
          <a className="flex justify-center w-48 mx-auto text-white bg-indigo-600 text-base px-3 py-2 rounded-md hover:bg-indigo-200  hover:text-indigo-600 border border-indigo-600 transition duration-300 active:scale-105 my-6">See the developers</a>
        </Link>
 
      </div>
    </div>
  )
}
