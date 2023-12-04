/* eslint-disable no-unused-vars */
import InputField from '../components/InputField'
import { Form, Formik, } from 'formik';
import LoginSchema from '../schema/LoginSchema';
import { Link } from 'react-router-dom';

const inputAttributes=[
  { 
    name:"serviesname",
    type:"text" ,
    label:"Servies Name",
    placeholde:"Servies Name "
  },
  { 
    name:"typevehicle" ,
    type:"text",
    label:"Vehicle Type",
    placeholde:"Type of Vehicle"
  },
  { 
    name:"price" ,
    type:"text",
    label:"Price",
    placeholde:"Price"
  },
  { 
    name:"descrption" ,
    type:"text",
    label:"Descrption",
    placeholde:"Enter Decrption of Servies"
  },
]

const AddServies = () => {
  return (
    <div>

      <Link to="/dashboard/addvehicle" className="text-white bg-bblue hover:bg-White-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 " >
      Add New elements
      </Link>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full">
          <div className="w-full bg-white rounded-3xl shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h3 className=" text-base leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Add New Servies  
              </h3>
              <Formik
                initialValues={{
                  email:'',
                  password:'',
                }}
                >
                {(props) => (
                  <Form className="space-y-4 md:space-y-6">
                    {inputAttributes.map((at,index)=><InputField key={index} placeholde={at.placeholder} label={at.label} name={at.name} type={at.type}/>)}
                    <button type="submit" className="w-full text-white bg-bblue hover:bg-basic-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5">ADD</button>
                  </Form>
                )}
              </Formik>
            </div>
        </div>
      </div>
    </div>
  )
}

export default  AddServies
