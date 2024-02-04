import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FormState = {
  currentStep: number;
  formData: {
    name: string;
    email: string;
    number: string;
  };
  selectedPlan: string;
  billingCycle: "monthly" | "yearly";
  addOns: string[];
};

type Actions = {
  setCurrentStep: (step: number) => void;
  setFormData: (data: Partial<FormState["formData"]>) => void;
  setSelectedPlan: (plan: string) => void;
  toggleBillingCycle: () => void;
  setAddOns: (addOn: string) => void;
};

export const useFormStore = create<FormState & Actions>()(
  persist(
    (set) => ({
      currentStep: 1,
      formData: {
        name: "",
        email: "",
        number: "",
      },
      setCurrentStep: (step) => set({ currentStep: step }),
      setFormData: (data) => {
        set((state) => ({
          formData: { ...state.formData, ...data },
        }));
      },
      selectedPlan: "Arcade",
      setSelectedPlan: (plan) => set({ selectedPlan: plan }),
      billingCycle: "monthly",
      toggleBillingCycle: () =>
        set((state) => ({
          billingCycle: state.billingCycle === "monthly" ? "yearly" : "monthly",
        })),
      addOns: [],
      setAddOns: (addOn) => {
        set((state) => ({
          addOns: state.addOns.includes(addOn)
            ? state.addOns.filter((item) => item !== addOn)
            : [...state.addOns, addOn],
        }));
      },
    }),

    {
      name: "form-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
