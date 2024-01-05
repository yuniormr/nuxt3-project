import { commonArgTypes } from "~/stories/common/common";
import Link from "~/components/DesignSystem/Elements/basic/link/DsLink.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;
export default {
  title: "UiKit/Elements/Basic/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    color: {
      description: "dark, primary, white",
      control: {
        type: "select",
      },
      options: ["dark", "primary", "white"],
    },
    letter: {
      control: {
        type: "select",
      },
      options: ["roboto", "robotoSlab"],
    },
    textAlignment: {
      control: {
        type: "select",
      },
      options: ["left", "center", "right"],
      description: "Position of the text",
    },
    size: {
      control: {
        type: "select",
      },
      options: [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
      ],
    },
    isUnderlined: {
      control: "boolean",
      description: "Underlined",
      defaultValue: false,
    },
    hasLineAwesome: {
      control: "boolean",
      description: "Line awesome for links",
      defaultValue: true,
    },
    lineAwesomeColor: {
      description: "dark, primary, white",
      control: {
        type: "select",
      },
      options: ["dark", "primary", "white"],
    },
    lineAwesomeSize: {
      control: {
        type: "select",
      },
      options: [
        "text-xs",
        "text-sm",
        "text-base",
        "text-lg",
        "text-xl",
        "text-2xl",
        "text-3xl",
        "text-4xl",
        "text-5xl",
      ],
    },
    isDiplayBlock: {
      control: "boolean",
      description: "Displays as block to use as titles",
    },
    hasTitleAsComponent: {
      control: "boolean",
      defaultValue: false,
      description: "Displays an H2 tag as the title",
    },
    titleHasIcon: {
      type: "boolean",
      description: "Set an icon for the title",
    },

    ...otherProps,
  },
};
export const Default = {
  args: {},
};

export const Weight = {
  args: {
    bold: true,
  },
};

export const RobotoSlab = {
  args: {
    letter: "robotoSlab",
  },
};

export const Roboto = {
  args: {
    letter: "roboto",
  },
};
export const TextXs = {
  args: {
    size: "text-xs",
  },
};
export const TextSm = {
  args: {
    size: "text-sm",
  },
};

export const TextBase = {
  args: {
    size: "text-base",
  },
};
export const TextLg = {
  args: {
    size: "text-lg",
  },
};
export const TextXl = {
  args: {
    size: "text-xl",
  },
};
export const Text2xl = {
  args: {
    size: "text-2xl",
  },
};
export const Text3xl = {
  args: {
    size: "text-3xl",
  },
};
export const Text4xl = {
  args: {
    size: "text-4xl",
  },
};
export const Text5xl = {
  args: {
    size: "text-5xl",
  },
};
export const Rectangle = {
  args: {
    isRectangle: true,
  },
};
