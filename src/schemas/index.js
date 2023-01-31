import * as yup from "yup";

export const BasicScheme=yup.object().shape({
    title:yup.string().required("Please Enter a title"),
    body:yup.string().required("please enter a body"),
})