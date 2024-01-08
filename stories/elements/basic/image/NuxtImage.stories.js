import DsNuxtImage from "~/components/DesignSystem/Elements/basic/images/DsNuxtImage.vue";

export default {
  title: "UiKit/Elements/Basic/NuxtImage",
  component: DsNuxtImage,
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
  },
};

export const Default = {
  args: {
    src: "/images/sample-image.jpg",
    server: process.server,
  },
};
