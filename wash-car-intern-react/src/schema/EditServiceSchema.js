import * as yup from "yup"

const EditServiceSchema=yup.object().shape({
  service_name:yup.string().required("this filed is required").trim(),
  description:yup.string().required("this field is required").min(7).max(255),
  price:yup.number("this should be number").required("this field is required"),
  image_url:yup.string().required(),
})
export default EditServiceSchema;