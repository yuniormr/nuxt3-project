import { commonArgTypes } from "../../../common/common";
import Label from "~/components/DesignSystem/Elements/form/label/Label.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Elements/Form/Label",
  component: Label,
  tags: ["autodocs"],

  argTypes: {
    textLabel: {
      description: "Text of the label",
    },
    textColor: {
      description: "dark, primary, danger, success, gray",
      control: {
        type: "select",
      },
      options: ["dark", "primary", "danger", "success", "gray"],
    },
    ...otherProps,
  },
};
export const MainLabel = {
  args: {},
};

export const OtherText = {
  args: {
    textLabel: "Other text",
  },
};

export const Primary = {
  args: {
    textColor: "primary",
  },
};

export const Danger = {
  args: {
    textColor: "danger",
  },
};
export const Roboto = {
  args: {
    textColor: "success",
  },
};
export const robotoSlab = {
  args: {
    textColor: "gray",
  },
};
