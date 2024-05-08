import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string } from "yup";

const registerSchema = object({
  username: string()
    .max(20, "Kullanıcı adı 20 karakterden az olmalıdır")
    .required("Kullanıcı adı zorunludur"),
  firstname: string()
    .max(20, "İsim 20 karakterden az olmalıdır")
    .required("İsim zorunludur"),
  lastname: string()
    .max(20, "Soyisim 20 karakterden az olmalıdır")
    .required("Soyisim zorunludur"),
  email: string()
    .max("Lütfen geçerli bir email giriniz.")
    .required("Email zorunludur"),
  password: string()
    .required("Şifre zorunludur")
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .max(20, "Şifre en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Şifre en az 1 sayı içermelidir")
    .matches(/[a-z]/, "Şifre en az 1 küçük harf içermelidir")
    .matches(/[A-Z]/, "Şifre en az 1 BÜYÜK harf içermelidir")
    .matches(/[!/[@$!%*?&]]+/, "Şifre en az 1 özel karakter içermelidir"),
});

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="User Name"
          name="username"
          id="userName"
          type="text"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
          helperText={touched.username && errors.username}
        />
        <TextField
          label="First Name"
          name="first_name"
          id="firstName"
          type="text"
          variant="outlined"
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstname && Boolean(errors.firstname)}
          helperText={touched.firstname && errors.firstname}
        />
        <TextField
          label="Last Name"
          name="last_name"
          id="last_name"
          type="text"
          variant="outlined"
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastname && Boolean(errors.lastname)}
          helperText={touched.lastname && errors.lastnalast}
        />
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Box>
    </Form>
  );
};

export default RegisterForm;
