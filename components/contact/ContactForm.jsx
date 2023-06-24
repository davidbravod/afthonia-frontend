import { Formik } from "formik";
const ContactForm = () => {
  return (
    <section className="relative">
      <div className="bg-white ">
        <div className="bg-[url('/images/contact/form-bg.png')] bg-no-repeat opacity-30 h-full w-full absolute top-0 flex items-center justify-center bg-cover"></div>

        <div className="  max-w-[1296px] flex justify-center items-center flex-col text-center mx-3 md:mx-auto h-full z-10 relative">
          <div className="max-w-4xl flex flex-col justify-center">
            <h5 className="text-[var(--color-primary)] heading-5 mt-[65px] md:mt-[115px]">
              Contact us
            </h5>
            <h2 className="text-center text-[#222] heading-2 pt-2  mb-6">
              Start Your Business Today
            </h2>
            <p className="text-[#444] paragraph-default md:px-40  text-center mb-8 md:mb-14">
              Still have doubts? Please feel free to get in touch with one of our support specialists.
            </p>
          </div>
          <div className="w-full md:w-[635px] text-left mx-auto">
            <Formik
              initialValues={{
                name: "",
                email: "",
                website: "",
                message: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email is Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.name) {
                  errors.name = "Name is Required";
                }

                if (!values.message) {
                  errors.message = "Message is Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <input
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      type="text"
                      placeholder="Full Name"
                      className="p-3 md:p-5 figure-caption w-full bg-white text-[#5a5a5a] rounded-md mb-1 focus:outline-none"
                    />
                    <span className="text-red-500 text-sm h-5">
                      {errors.name && touched.name && errors.name}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <input
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      type="email"
                      placeholder="Email"
                      className="p-3 md:p-5 figure-caption w-full bg-white text-[#5a5a5a] rounded-md mt-1 mb-1 focus:outline-none"
                    />
                    <span className="text-red-500 text-sm h-5">
                      {" "}
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <input
                      name="website"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.website}
                      type="text"
                      placeholder="Website"
                      className="p-3 md:p-5 figure-caption w-full bg-white text-[#5a5a5a] rounded-md mt-1 mb-1 focus:outline-none"
                    />
                    <span className="text-red-500 text-sm h-5">
                      {" "}
                      {errors.website && touched.website && errors.website}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <textarea
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      rows="8"
                      placeholder="Type a Message"
                      className="mt-1 p-3 md:p-5 figure-caption w-full bg-white text-[#5a5a5a] rounded-md focus:outline-none"
                    />
                    <span className="text-red-500 text-sm h-5">
                      {" "}
                      {errors.message && touched.message && errors.message}
                    </span>
                  </div>
                  <div className="flex justify-center mt-8 md:mt-[50px]  mb-[70px] md:mb-[120px]">
                    <button type="submit"
                      className={`px-6 relative z-10 py-3 cursor-pointer rounded-[5px] shadow-[#ff6f2c65] hover:shadow-none group overflow-hidden text-lg bg-[#FF6E2C] text-white inline-block font-semibold`}
                    >
                      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                      <span className="relative group-hover:text-[#222] paragraph-default text-white duration-500">
                        Send Message
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
