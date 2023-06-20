import FormComponent from "@/components/FormComponent";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <title>React Forms Tutorial</title>
        <meta name="description" content="React Forms Tutorial" />
      </Head>

      <main className="h-screen flex items-center justify-center">
        <form className="bg-white flex rounded-lg w-1/2 font-latoRegular">
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-latoRegular">Hello there 👋🏿</h1>
            <p>Sign up to start shipping.</p>


            <div className="mt-6">
              <FormComponent
                labelName={'Name'}
                type={'text'}
                htmlFor={'name'}
                id={'name'}
                placeholder={'Enter your name'}
              />


              <FormComponent
                labelName={'Email'}
                type={'email'}
                htmlFor={'email'}
                id={'email'}
                placeholder={'Enter your email'}
              />

              <div className="pb-4">
                <label
                  htmlFor= 'city'
                  className="block text-sm pb-2 font-latoBold text-gray-700">Select City</label>
                <select className="border-2 text-sm focus:border-green-600 outline-none border-gray-500 p-2 rounded-md w-1/2">
                  <option>Harare</option>
                  <option>Bulawayo</option>
                  <option>Gweru</option>
                  <option>Mutare</option>
                  <option>victoria Falls</option>
                </select>
              </div>
            </div>


          </div>
        </form>
      </main>

    </div>
  )
}
