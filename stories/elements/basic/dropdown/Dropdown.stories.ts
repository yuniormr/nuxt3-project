import { commonArgTypes } from "~/stories/common/common";
import DsDropdown from "~/components/DesignSystem/Elements/basic/DsDropdown/DsDropdown.vue";

const { backgroundColor, ...otherProps } = commonArgTypes;

export default {
  title: "UiKit/Elements/Basic/Dropdown",
  component: DsDropdown,
  tags: ["autodocs"],

  argTypes: {
    DStypes: {
      control: {
        type: "select",
      },
      options: ["dropdown", "dropup"],
      description: "Dropdown o dropup",
    },
    DSbackgroundColor: {
      control: {
        type: "select",
      },
      options: ["white", "primary"],
      description: "Color style",
    },
    DStextColor: {
      control: {
        type: "select",
      },
      options: ["white", "primary"],
      description: "Color style",
    },
    disabled: {
      control: "boolean",
      description: "Disabled",
      defaultValue: false,
    },
    isRadius: {
      description: "border radius - boolean",
    },

    ...otherProps,
  },
};

export const Primary = {
  args: {},
};

export const Default = {
  args: {
    DStext: "default",
    DSbackgroundColor: "default",
    DStextColor: "primary",
  },
};

export const PrimaryDropup = {
  args: {
    DStypes: "dropup",
    DSawesome: "las la-angle-up",
  },
};
