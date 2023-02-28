import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("O Email é obrigatório!"),
  password: yup.string().required("A senha é obrigatória!"),
});
