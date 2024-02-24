import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too Long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too Long")
    .required("Required"),
});

export default function ContactForm({ addContact }) {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label name="name" className={css.formItem} htmlFor="name">
          Name
        </label>
        <Field type="text" name="name" className={css.input} id="name" />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label name="number" className={css.formItem} htmlFor="number">
          Number
        </label>
        <Field type="number" name="number" className={css.input} id="number" />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
