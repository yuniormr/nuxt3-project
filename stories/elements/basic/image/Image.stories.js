import { commonArgTypes } from "../../../common/common";
import DsImages from "~/components/DesignSystem/Elements/basic/images/DsImages.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Elements/Basic/Image",
  component: DsImages,
  tags: ["autodocs"],

  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: [
        "xSmall",
        "small",
        "normal",
        "medium",
        "large",
        "xLarge",
        "xxLarge",
        "auto",
      ],
      description: "xSmall,small, normal, medium, large,xLarge,xxLarge,auto",
    },
    radius: {
      description: "border radius - boolean",
    },

    Information: {
      description:
        "To use this component with the Nuxt native option, switch to the NuxtImage tag with the same properties.",
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
export const xxLarge = {
  args: {
    size: "xxLarge",
  },
};
export const auto = {
  args: {
    size: "auto",
  },
};
export const rounded = {
  args: {
    radius: true,
  },
};
export const Src = {
  args: {
    src: "/images/avatar.jpg",
  },
};
