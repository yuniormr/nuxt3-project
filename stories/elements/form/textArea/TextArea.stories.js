import { commonArgTypes } from "../../../common/common";
import TextArea from "~/components/DesignSystem/Elements/form/textArea/TextArea.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Elements/Form/TextArea",
  component: TextArea,
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
    value: {
      description: "Init value to the element",
    },

    // disabled: {
    //   description: 'border radius - boolean',
    // },

    ...otherProps,
  },
};
export const MainTextArea = {
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

export const Readonly = {
  args: {
    readOnly: true,
  },
};
