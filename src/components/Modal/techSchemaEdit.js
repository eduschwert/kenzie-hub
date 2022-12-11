import * as yup from "yup"

export const techSchemaEdit = yup.object().shape({
  status: yup.string().required("O status é obrigatório!"),
})
