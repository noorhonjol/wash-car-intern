import { Form, useRouteLoaderData } from 'react-router-dom'
import InputField from '../components/InputField';
import { Formik } from 'formik';
import EditServiceSchema from '../schema/EditServiceSchema';


const EditServices = () => {
  const {  serviceData,availableVehicles } = useRouteLoaderData('editservice');
  
  const inputsname = Object.keys(serviceData)

  const filteredinput= inputsname.filter(item => ! ["id", "vehicle_id"].includes(item));
  
  return (
    
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 w-full ">
      <div className="w-full bg-white rounded-3xl shadow md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h3 className=" text-base leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Edit Servies
          </h3>
          <Formik 
          initialValues={{...serviceData,availableVehicles}}
          validationSchema={EditServiceSchema}>

              <Form className="space-y-4 md:space-y-6 text-black" method='post'>
                {filteredinput.map((at,index) => 
                <InputField type="text" key={index} placeholder={at} label={at} name={at} />)}
                <InputField defaultOption={serviceData.id} type="select" label="select vehicle" name="vehicle_id" options={availableVehicles}/>
                <button type="submit" className="w-full text-white bg-bblue hover:bg-basic-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5">Save</button>
              </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default EditServices