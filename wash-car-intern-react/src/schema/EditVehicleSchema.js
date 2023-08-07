import * as yup from "yup"

const EditVehicleSchema=yup.object().shape({
  vehicle_type:yup.string().required("this filed is required").trim(),
  image_url:yup.string().required(),
})
export default EditVehicleSchema;