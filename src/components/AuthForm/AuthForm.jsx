import { Form, Formik } from "formik";
import * as Yup from "yup";
import { StyledField } from "../common/styles/StyledField";
import { StyledButton } from "../common/styles/Button";
import { Header } from "../common/styles/Header";
import authimg from "../../images/Auth.png";
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email().required("Это обязательное поле"),
  password: Yup.string()
    .min(6, "Должно быть минимум 6 символов")
    .required("Это обязательное поле"),
});

const AuthForm = ({ auth }) => {
  const registerHandler = (e, values) => {
    e.preventDefault();
    auth(values, false);
  };

  return (
    <>
    
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => auth(values, true)}
        validationSchema={validationSchema}
      >
        {({ errors, touched, values, ...rest }) => (
          <Form>
            <StyledField
              type="email"
              name="email"
              placeholder="Email"
              $isInvalid={errors.email && touched.email}
              autoFocus
            />

            <StyledField
              type="password"
              name="password"
              placeholder="Пароль"
              $isInvalid={errors.password && touched.password}
            />

            <div style={{ textAlign: "center" }}>
              <StyledButton
                styleType="success"
                type="submit"
                disabled={!(rest.isValid && rest.dirty)}
              >
                Ввійти
              </StyledButton>
              <StyledButton
                styleType="primary"
                disabled={!(rest.isValid && rest.dirty)}
                onClick={(e) => registerHandler(e, values)}
              >
                Зареєстуватися
              </StyledButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthForm;
