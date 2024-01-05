import { commonArgTypes } from "~/stories/common/common";
import Check from "~/components/DesignSystem/Elements/form/check/Check.vue";

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
  title: "UiKit/Elements/Form/Check",
  component: Check,
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
    checkText: {
      description: "Check text",
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

export const MainCheck = {
  args: {},
};
