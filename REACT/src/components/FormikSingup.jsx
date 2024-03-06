import { useFormik } from "formik";
import * as Yup from 'yup';


const FormikSingup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

   validationSchema: Yup.object({
  firstName: Yup.string().required("required").max(20).min(4, "minimum of four characters"),
  lastName: Yup.string().required("required").max(20).min(4, "minimum of four characters"),
  email: Yup.string().email("valid email address").required("required"),
  password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, "Invalid password. Minimum eight characters, at least one letter and one number"),
}),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);

  return (
    <div>
      <h1 className="text-center ">Student Portal</h1>
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <div className="container-fluid p-5">
          <div className="row">
            <div className=".col-6 mx-auto shadow-sm">
              <input
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                className="my-2 form-control"
                required
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors.firstName}</span>


              <input
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                className="my-2 form-control"
                required
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors.lastName}</span>

              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="my-2 form-control"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors.email}</span>

              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                className="my-2 form-control"
                required
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors.password}</span>

              <center>
                <button className="btn btn-primary mb-4" type="submit">
                  SIGN UP
                </button>
              </center>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormikSingup;
