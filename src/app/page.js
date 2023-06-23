'use client'
import FormComponent from "@/components/FormComponent";
import Head from "next/head";
import Lottie from 'lottie-react'
import animationData from "@/app/delivery.json"


export default function Home() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
        },
      };

  return (
    <div>
      <Head>
        <title>React Forms Tutorial</title>
        <meta name="description" content="React Forms Tutorial" />
      </Head>

      <main className="h-screen flex items-center justify-center">
        <form className="bg-white flex rounded-lg w-1/2 font-latoRegular">
          <div className="flex-1 text-gray-700 p-10">
            <h1 className="text-4xl pb-2 font-latoRegular">Hello there 👋🏿</h1>
            <p>Create your <span className="text-green-500">High Five</span> account.</p>


            <div className="mt-6">
              <FormComponent
                htmlFor={'firstName'}
                label={'First name'}
                type={'text'}
                id={'firstName'}
                placeholder={'Enter your first name'}
              />

              <FormComponent
                htmlFor={'lastName'}
                label={'Last name'}
                type={'text'}
                id={'lastName'}
                placeholder={'Enter your last name'}
              />

              <FormComponent
                htmlFor={'phone'}
                label={'Phone'}
                type={'phone'}
                id={'phone'}
                placeholder={'Enter your phone number'}
              />

              <FormComponent
                htmlFor={'Email'}
                label={'Email'}
                type={'email'}
                id={'email'}
                placeholder={'Enter your email'}
              />

              <div className="pb-4">
                <label htmlFor='city' className="text-sm text-gray-500 block">
                  City
                </label>
                <select id='city' className="border-2 text-sm focus:ring-0 focus:border-green-600 outline-none border-gray-500 p-2 rounded-md w-full">
                  <option>Harare</option>
                  <option>Bulawayo</option>
                  <option>Gweru</option>
                  <option>Mutare</option>
                  <option>victoria Falls</option>
                </select>
              </div>


              <div className="pb-4 text-sm">

                <div className="pb-2">
                  <label htmlFor="terms">
                    Terms of Service
                  </label>
                </div>


                <div className="flex itmes-center gap-2">
                  <input type="checkbox" value="checked" name="terms" className="h-4 w-4 text-green-500 focus:border-green-600 hover:ring-green-500 focus:ring-0" />
                  <p>I agree the <a href="#" className="text-blue-600 hover:underline">terms of service</a> that your data may be sold for additional revenue.</p>
                </div>

              </div>


              <button
                type="submit"
                className="bg-green-500 font-latoBold text-sm text-white py-3 mt-2 rounded-lg w-full">
                Sign up
              </button>

            </div>


          </div>

          <div className="flex items-center h-50 w-50 p-5">
            <Lottie
              style={{ height: '600px', width: '400px' }}
              options={defaultOptions}
              animationData={animationData}
            />
          </div>


        </form>
      </main>

    </div>
  )
}
