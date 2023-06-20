import FormComponent from "@/components/FormComponent";
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
              <FormComponent 
                labelName={'Name'}
                type={'text'}
                htmlFor={'name'}
                id={'id'}
                placeholder={'Fill in your name'}
              />


              <FormComponent 
                labelName={'Name'}
                type={'text'}
                htmlFor={'name'}
                id={'id'}
                placeholder={'Fill in your name'}
              />
            </div>


          </div>
        </form>
      </main>

    </div>
  )
}
