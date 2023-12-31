'use client'
import FormComponent from "@/components/FormComponent";
import Head from "next/head";
import Lottie from 'lottie-react'
import animationData from "@/app/delivery.json"
import { useFormik } from "formik";
import * as yup from "yup";


export default function Home() {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  //Getting values
  const formik = useFormik({
    initialValues:{
      name: "",
      email: "",
      phone: "",
      city: "Select City",
      terms: ""
    },

    validationSchema: yup.object({
      name: yup.string().max(20, 'Name must be 20 characters or less').required('Name is required'),
      email: yup.string().email('Invalid email address').required('Email is required'),
      terms: yup.array().required('Terms of Use must be checked'),
      phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),

    }),

    onSubmit: (values) => {
      console.log(values);
      console.log('Errors here')
    }

  });

  //Form validation


  //Submit  


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
        <form
        onSubmit={formik.handleSubmit}
        className="bg-white flex rounded-lg w-1/2 font-latoRegular">
          <div className="flex-1 text-gray-700 p-10">
            <h1 className="text-4xl pb-2 font-latoRegular">Hello there 👋🏿</h1>
            <p>Create your <span className="text-green-500">High Five</span> account.</p>


            <div className="mt-6">


            <FormComponent
                htmlFor={'name'}
                label={'Full Name'}
                type={'text'}
                id={'name'}
                error={formik.errors.name}
                value={formik.values.name}
                touchName={formik.touched.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />


            <FormComponent
                htmlFor={'Email'}
                label={'Email'}
                type={'email'}
                id={'email'}
                touchName={formik.touched.name}
                error={formik.errors.email}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />


            <FormComponent
                htmlFor={'Phone '}
                label={'Phone'}
                type={'phone'}
                id={'phone'}
                touchName={formik.touched.name}
                error={formik.errors.phone}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />


              <div className="pb-4">
                <label htmlFor='city' className="text-sm text-gray-500 block">
                  City
                </label>
                <select

                id='city' 
                className="border-2 text-sm focus:ring-0 focus:border-green-600 outline-none border-gray-500 p-2 rounded-md w-full"
                value={formik.values.city}
                onChange={formik.handleChange}
                >
                  <option>Select City</option>
                  <option>Harare</option>
                  <option>Bulawayo</option>
                  <option>Gweru</option>
                  <option>Mutare</option>
                  <option>Victoria Falls</option>
                </select>
              </div>


              <div className="pb-4 text-sm">

                <div className="pb-2">
                  <label htmlFor="terms">
                    Terms of Service
                  </label>
                </div>


                <div className="flex gap-2">
                  <input type="checkbox"
                  value="checked"
                  name="terms"
                  onChange={formik.handleChange}
                  className="h-4 w-4 text-green-500 focus:border-green-600 hover:ring-green-500 focus:ring-0" />
                  <p>I agree to the <a href="#" className="text-green-500 hover:underline">terms of service</a> & also that your data may be sold for additional revenue.</p>
                </div>

              </div>


              <button
                type="submit"
                className="bg-green-500 font-latoBold text-sm text-white py-2 my-2 rounded-lg w-full">
                Sign up
              </button>


              <div className="flex items-center justify-center text-sm">
              
                  <p>Have an account? <a href="#" className="text-green-500 hover:underline">login in</a></p>

                </div>

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
