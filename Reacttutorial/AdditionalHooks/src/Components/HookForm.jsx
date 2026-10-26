import React from "react";
import { useForm } from "react-hook-form";

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const getFormData = async (data) => {
    await new Promise((res, rej) => {
      return setTimeout(res, 5000);
    });
    console.log(data);
  };

  return (
    <>
      <form>
        <label htmlFor="firstName">
          First Name:
          <input
            className={errors.firstName ? "errorStyle" : ""}
            type="text"
            id="firstName"
            {...register("firstName", {
              required: true,
              minLength: { value: 3, message: "Atleast Three Characters." },
            })}
          />
          {/* Used to show error Message: */}
          {errors.firstName && (
            <p className="errorMsg">{errors.firstName.message}</p>
          )}
        </label>
        <br />
        <br />
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true, minLength: 3 })}
          />
        </label>
        <br />
        <br />
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
              pattern:
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
            })}
          />
        </label>
        <br />
        <br />
        {/* <input type="submit" /> */}
        <button
          onClick={handleSubmit(getFormData)}
          disabled={isSubmitting ? true : false}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default HookForm;
