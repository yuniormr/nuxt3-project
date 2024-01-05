import { commonArgTypes } from "~/stories/common/common.ts";
import DsButton from "~/components/DesignSystem/components/basic/button/DsButton.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Components/Basic/Button",
  component: DsButton,
  tags: ["autodocs"],

  argTypes: {
    // type: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['spinner', 'dots'],
    //   description: 'Select the type of loading',
    // },
    // isDefaultText: {
    //   description: 'Select the component text, only work in loading type',
    // },
    textAlignment: {
      control: {
        type: "select",
      },
      options: ["left", "center", "right"],
      description: "Position of the text",
    },
    type: {
      control: {
        type: "select",
      },
      options: ["anchor", "button", "submit"],
      description:
        "HTMLAnchorElement, HTMLButtonElement, HTMLSubmitButtonElement",
    },
    textColor: {
      control: {
        type: "select",
      },
      options: ["white", "primary"],
      description: "white, primary",
    },
    backgroundColor: {
      control: {
        type: "select",
      },
      options: ["primary", "danger", "white"],
      description: "primary, danger, white",
    },
    borderColor: {
      control: {
        type: "select",
      },
      options: ["primary", "danger"],
      description: "primary, danger",
    },

    ...otherProps,
  },
};
export const Default = {
  args: {},
};
export const FontLeft = {
  args: {
    awesomeLeft: "las la-plus",
  },
};

export const FontRight = {
  args: {
    awesomeRight: "las la-plus",
  },
};

export const ImageLeft = {
  args: {
    urlImageLeft: "/images/claveunica-icon.svg",
  },
};
export const ImageRight = {
  args: {
    urlImageRight: "/images/claveunica-icon.svg",
  },
};
export const OtherText = {
  args: {
    text: "Other text",
    urlImageRight: "/images/claveunica-icon.svg",
  },
};
export const Primary = {
  args: {
    backgroundColor: "primary",
    textColor: "white",
  },
};
export const Danger = {
  args: {
    backgroundColor: "danger",
    textColor: "white",
    borderColor: "danger",
  },
};
export const IsSmall = {
  args: {
    isSmall: true,
  },
};
export const BorderRadius = {
  args: {
    isRadius: true,
  },
};
export const Disabled = {
  args: {
    disabled: true,
  },
};
