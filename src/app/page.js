import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Forms Tutorial</title>
        <meta name = "description" content="React Forms Tutorial"/>
      </Head>

      <main className = "h-screen flex items-center justify-center">
        <form className = "bg-white flex rounded-lg w-1/2 font-latoRegular">
          <div className = "flex-1 text-gray-700 p-20">
            <h1 className = "text-3xl pb-2 font-latoRegular">Hello there 👋🏿</h1>
            <p>Sign up to start shipping.</p>


            <div className = "mt-6">
            <div className = "pb-4">
              <label htmlFor="name" className="block text-sm pb-2 font-latoBold">Name</label>
              <input placeholder = "Enter first name" id="name" type="text" ></input>
            </div>

            <div className = "pb-4">
              <label 
              htmlFor="name" 
              className="block text-sm pb-2 font-latoBold">
              Name
              </label>
              <input
              placeholder = "Enter first name" id="name" type="text"
              className = "border-2 border-gray-500 p-2 rounded-md w-1/2"
              />
            </div>
          </div>


          </div>
        </form>
      </main>

    </div>
  )
}
