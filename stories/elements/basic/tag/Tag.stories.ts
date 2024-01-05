import Tag from "~/components/DesignSystem/Elements/basic/tag/DsTag.vue";
import { commonArgTypes } from "../../../common/common";

// const { margin, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Elements/Basic/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    textTag: {
      description: "Text of the tag",
      defaultValue: "dark",
    },
    tagTextColor: {
      control: {
        type: "select",
      },
      options: ["primary", "dark", "white"],
      description: "Tag text color",
    },
    letter: {
      control: {
        type: "select",
      },
      options: ["roboto", "robotoSlab"],
      description: "Font style",
    },
    ...commonArgTypes,
  },
};
export const Neutral = {
  args: {},
};

export const Primary = {
  args: {
    backgroundColor: "primary",
    textTag: "primary",
  },
};

export const Danger = {
  args: {
    backgroundColor: "danger",
    textTag: "danger",
  },
};

export const Success = {
  args: {
    backgroundColor: "success",
    textTag: "success",
  },
};

export const Gray = {
  args: {
    backgroundColor: "gray",
    textTag: "gray",
  },
};
