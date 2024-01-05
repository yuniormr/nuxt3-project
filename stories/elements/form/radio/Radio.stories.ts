import { commonArgTypes } from "~/stories/common/common";
import Radio from "~/components/DesignSystem/Elements/form/radio/Radio.vue";

const {
  backgroundColor,
  border,
  borderRight,
  borderTop,
  borderLeft,
  borderBottom,
  ...otherProps
} = commonArgTypes;

export default {
  title: "UiKit/Elements/Form/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Check",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "Disabled",
      defaultValue: false,
    },
    required: {
      control: "boolean",
      description: "Required",
      defaultValue: false,
    },
    radioText: {
      description: "Radio text",
      default: "Input default",
    },
    inputSize: {
      description: "Input text size",
      control: { type: "select" },
      options: ["small", "normal", "medium", "large"],
    },

    ...otherProps,
  },
};

export const MainRadio = {
  args: {},
};
