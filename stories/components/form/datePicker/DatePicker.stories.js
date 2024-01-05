import DsDatePicker from "~/components/DesignSystem/components/form/DatePicker/DsDatePicker.vue";

export default {
  title: "UiKit/Form/DatePicker",
  component: DsDatePicker,
  tags: ["autodocs"],

  argTypes: {
    getDate: {
      description: "Event to get date value",
    },
    disabled: {
      description: "Disabled date picker - boolean",
    },
    labelText: {
      description: "Edit text for the label",
    },
  },
};
export const Default = {
  args: {},
};
