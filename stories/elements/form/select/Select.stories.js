import { commonArgTypes } from "../../../common/common";
import Select from "~/components/DesignSystem/Elements/form/select/Select.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Elements/Form/Select",
  component: Select,
  tags: ["autodocs"],

  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["small", "normal", "medium", "large"],
      description: "Small, normal, medium, large",
    },
    radius: {
      description: "border radius - boolean",
    },
    required: {
      description: "Required fields - boolean",
    },
    option: {
      description: "One array with options for the select",
    },
    "update:modelValue": {
      description: "This event update the value on the select",
    },

    // disabled: {
    //   description: 'border radius - boolean',
    // },

    ...otherProps,
  },
};
export const Classic = {
  args: {},
};

export const Rounded = {
  args: {
    rounded: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const ReadOnly = {
  args: {
    readOnly: true,
  },
};
