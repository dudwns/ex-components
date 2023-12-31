import Input from "../components/Input";

export default {
  title: "Component/Input",
  component: Input,
  args: {
    label: "Label",
    block: false,
    invalid: false,
    required: false,
    disabled: false,
    readonly: false,
  },
  argTypes: {
    label: {
      control: "text",
    },
    block: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    readonly: {
      control: "boolean",
    },
  },
};

export const Default = (args) => {
  return <Input {...args} />;
};
