import { useFormContext } from "react-hook-form";

const StepOne = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <article className="flex flex-col justify-evenly gap-y-4">
      <div className="flex flex-col items-start gap-y-3">
        <h1 className="text-[#022959] text-4xl font-black tracking-wide">Personal Info</h1>
        <p className="text-[#9699AA] text-lg">Enter your name, email and phone number</p>
      </div>

      <form className="flex flex-col justify-between gap-y-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register("name")}
          placeholder="e.g. Stephen King"
          className="border border-[#9699AA] p-3 rounded-lg outline-none focus:border-[2px] focus:border-[#6259FF]"
          id="name"
        />
        {errors.name && typeof errors.name.message === "string" && (
          <p className="text-red-500">{errors.name.message}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="e.g. stephenking@lorem.com"
          className="border border-[#9699AA] p-3 rounded-lg outline-none focus:border-[2px] focus:border-[#6259FF]"
          id="email"
        />
        {errors.email && typeof errors.email.message === "string" && (
          <p className="text-red-500">{errors.email.message}</p>
        )}

        <label htmlFor="number">Phone Number</label>
        <input
          type="text"
          {...register("number")}
          placeholder="e.g. +1 236 555 890"
          className="border border-[#9699AA] p-3 rounded-lg outline-none focus:border-[2px] focus:border-[#6259FF]"
          id="number"
        />
        {errors.number && typeof errors.number.message === "string" && (
          <p className="text-red-500">{errors.number.message}</p>
        )}
      </form>
    </article>
  );
};

export default StepOne;
