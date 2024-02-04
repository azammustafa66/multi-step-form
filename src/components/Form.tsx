import { FormProvider, useForm } from "react-hook-form";
import { useFormStore } from "../utils/store";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import Summary from "./steps/Summary";
import ThankYou from "./steps/ThankYou";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  number: yup
    .string()
    .required("Number is required")
    .matches(/^[+][0-9]+$/, "Must start with a +")
    .min(10, "Must be exactly 10 digits")
    .max(13, "Must be exactly 10 digits"),
});

export default function Form() {
  const { currentStep, setCurrentStep, setFormData, formData } = useFormStore();
  const totalSteps = 5;

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
  });

  const onSubmit = (data: object) => {
    setFormData(data);
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToNextStep = methods.handleSubmit(onSubmit);

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <FormProvider {...methods}>
      <main className="p-3">
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        {currentStep === 4 && <Summary />}
        {currentStep === 5 && <ThankYou />}

        <div className="flex items-end justify-between text-center mt-12">
          {currentStep > 1 && currentStep < 5 && (
            <p
              onClick={goToPreviousStep}
              className="text-[#9699AA] hover:text-[#022959] cursor-pointer mb-2 font-semibold"
            >
              Go Back
            </p>
          )}
          {currentStep < 5 && (
            <button
              type="submit"
              onClick={goToNextStep}
              className="bg-[#022959] hover:bg-[#164A8A] text-white px-5 py-3 rounded-lg outline-none focus:outline-none"
            >
              {currentStep === 4 ? "Confirm" : "Next Step"}
            </button>
          )}
        </div>
      </main>
    </FormProvider>
  );
}
