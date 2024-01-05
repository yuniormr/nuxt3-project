import DsModal from "~/components/DesignSystem/components/basic/modal/DsModal.vue";
import Confirmation from "~/components/DesignSystem/pages/Confirmation/Confirmation.vue";

//probando git
export default {
  components: { Confirmation },
  title: "UiKit/Components/Basic/Modal",
  component: DsModal,
  tags: ["autodocs"],

  argTypes: {
    isOpen: {
      description:
        "This property is assigned to a boolean reference and with it we open and close the modal.",
    },
    isFooter: {
      description: "This property hides or shows the Footer panel.",
    },
    isHeader: {
      description: "This property hides or shows the Header panel.",
    },
    header: {
      description: "Any Nuxt3 component can be inserted in this slot.",
    },
    close: {
      description:
        "Emitted when the button is clicked to indicate that the component should be closed.",
    },
    actionButton: {
      description:
        "Emitted when the button is clicked to trigger a specific action.",
    },
    default: {
      description: "Any Nuxt3 component can be inserted in this slot.",
    },
    footer: {
      description: "A Vue 3 component to be inserted in the footer slot.",
    },
  },
};
export const Default = {
  args: {
    isOpen: true,
  },
};
export const WithBodyComponent = ({ isOpen }, { argTypes }) => ({
  components: { DsModal, Confirmation },
  props: Object.keys(argTypes),
  data() {
    return {
      args: {
        isOpen: isOpen,
      },
    };
  },
  template: `
    <DsModal :is-open="args.isOpen" :is-header="false" :is-footer="false">
      <Confirmation />
    </DsModal>
  `,
});
WithBodyComponent.args = {
  isOpen: true,
};
