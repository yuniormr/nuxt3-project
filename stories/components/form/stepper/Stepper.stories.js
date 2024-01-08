import DsStepper from "~/components/DesignSystem/components/form/stepper/DsStepper.vue";
import DsStep from "~/components/DesignSystem/components/form/stepper/DsStepper.vue";

export default {
  components: { DsStep },
  title: "UiKit/Form/Stepper",
  component: DsStepper,
  tags: ["autodocs"],

  argTypes: {
    stepCount: {
      description:
        "This property defines the total number of steps that will be " +
        "rendered in the Stepper component. Simple yet concise, it should be a number " +
        "representing the amount of steps needed in your process flow. By default, " +
        "this value could be 01. Use this " +
        "prop to dynamically control the number of steps in your Stepper according to" +
        " your process flow requirements.",
    },
    selected: {
      description:
        "This property defines the step that is currently active or selected. " +
        "It should be a number representing the step you want to highlight as the current " +
        "one in your set of steps. Based on this prop, you can customize the appearance of " +
        "the active step to make it stand out from the others, perhaps by changing its color " +
        "or size. It is an effective way to guide the user through your process flow, always" +
        " clearly indicating what step they are in.",
    },
    changeStep: {
      description:
        "This property is typically a function or a method that allows you to programmatically" +
        " control the active step of the Stepper component. When invoked, it should update the selected" +
        " prop, effectively changing the highlighted step. It can be used to dynamically navigate through " +
        "the steps of your process flow based on user input or program logic. By controlling which step is " +
        "currently active, it helps guide the user through the steps in your application's process flow. " +
        "The parameter passed to this function should typically be the number of the step you want to switch " +
        "to.",
    },
  },
};

export const Default = {
  args: {},
};
export const ActionTemplate = (args) => ({
  components: { DsStepper },
  setup() {
    const step = ref(1);

    const handleStep = (newStep) => {
      step.value = newStep;
    };

    return {
      step,
      handleStep,
    };
  },
  template:
    '<div><DsStepper :selected="step" @change-step="handleStep"/> </div>',
});
ActionTemplate.storyName = "ActionTemplate";
ActionTemplate.parameters = {
  docs: {
    description: {
      story: `This story demonstrates the use of the DsStepper component with an initial selection
      and a function to handle the step change. In the template, the 'selected' property is bound 
      to 'step' and the 'change-step' event calls the 'handleStep' function. When the 'change-step' 
      event is triggered on the component, 'handleStep' runs, changing the value of 'step'.`,
    },
    source: {
      code: `
      <template>
    <DsStep :selected="step" @change-step="handleStep" />
</template>
<script>

const step = ref(1);


function handleStep(step) {
  step.value = step;
}
</script>`,
    },
  },
};
export const StepCount = {
  args: {
    stepCount: 8,
  },
};
