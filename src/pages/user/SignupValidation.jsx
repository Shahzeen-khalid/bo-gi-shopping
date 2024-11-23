import * as Yup from 'yup'


export const SignupValidation = Yup.object({
  name: Yup.string().min(3).required("Please enter name"),
  email: Yup.string().email("Please enter valid email").required("Please enter email"),
  password: Yup.string().min(5).required("Please enter the password"),
  cpassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched").required("Please enter confirm password")
})