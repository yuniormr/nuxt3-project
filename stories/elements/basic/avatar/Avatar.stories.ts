import { commonArgTypes } from "../../../common/common";
import DsAvatar from "~/components/DesignSystem/Elements/basic/avatar/DsAvatar.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;

export default {
  title: "UiKit/Elements/Basic/Avatar",
  component: DsAvatar,
  tags: ["autodocs"],

  argTypes: {
    types: {
      control: { type: "select" },
      options: ["default", "upload image"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["xSmall", "small", "normal", "medium", "large", "xLarge"],
      description: "16px, 32px, 48px, 64px, 96px",
    },

    ...otherProps,
  },
};

export const Default = {
  args: {},
};

export const xSmall = {
  args: {
    size: "xSmall",
  },
};

export const small = {
  args: {
    size: "small",
  },
};

export const normal = {
  args: {
    size: "normal",
  },
};
export const medium = {
  args: {
    size: "medium",
  },
};

export const large = {
  args: {
    size: "large",
  },
};

export const xLarge = {
  args: {
    size: "xLarge",
  },
};
