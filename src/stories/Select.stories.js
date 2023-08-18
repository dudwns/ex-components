import Select from "../components/Select";

export default {
  title: "Component/Select",
  component: Select,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    block: false,
    invalid: false,
    disabled: false,
    required: false,
  },
  argTypese: {
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    block: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
  },
};

export const Default = (args) => {
  return <Select data={["Item1", "Item2", { label: "Item3", value: "value" }]} {...args} />;
};
