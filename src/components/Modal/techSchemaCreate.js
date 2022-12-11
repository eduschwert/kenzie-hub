import * as yup from "yup"

export const techSchemaCreate = yup.object().shape({
  title: yup
    .string()
    .required("O nome é obrigatório!")
    .max(200, "O nome pode ter no máximo 200 caracteres."),
  status: yup.string().required("O status é obrigatório!"),
})
