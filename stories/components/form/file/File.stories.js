import DsFiles from "~/components/DesignSystem/components/form/Files/DsFiles.vue";

export default {
  title: "UiKit/Form/File",
  component: DsFiles,
  tags: ["autodocs"],

  argTypes: {
    buttonColor: {
      control: {
        type: "select",
      },
      options: ["primary", "white", "danger"],
      description: "primary, secondary",
    },
    onSelectedDsFile: {
      control: {
        type: "none",
      },
      description:
        "This is the event that is executed in the onChange of the component",
    },
    disabled: {
      description: "Disable component. - boolean",
    },
    labelText: {
      description: "Text for the label",
    },
    placeHolderText: {
      description: "Short text for the example",
    },
    buttonText: {
      description: "Text for the button",
    },
  },
};
export const Default = {
  args: {},
};
