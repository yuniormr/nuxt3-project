import DsBreadcrumb from "~/components/DesignSystem/components/nav/breadcrumb/DsBreadcrumb.vue";
import { otherData } from "~/stories/components/nav/breadcrumb/otherData.ts";

export default {
  title: "UiKit/Components/Nav/Breadcrumb",
  component: DsBreadcrumb,
  tags: ["autodocs"],

  argTypes: {
    breadcrumbData: {
      description:
        "The data provided to the breadcrumb component that determines its structure" +
        " and content. This object contains an array of objects, with each" +
        " object representing a breadcrumb link.",
    },
    hideSeparator: {
      description:
        "A flag indicating whether separators in the breadcrumb component " +
        "should be hidden or not. If set to true, separator symbols" +
        "between breadcrumb links will not be displayed.",
    },
  },
};
export const Default = {
  args: {},
};
export const OtherData = {
  args: {
    breadcrumbData: otherData,
  },
};
export const HideSeparator = {
  args: {
    hideSeparator: true,
  },
};
