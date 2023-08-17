import Badge from "../components/Badge";
import Image from "../components/Image";

export default {
  title: "Component/Badge",
  component: Badge,
  args: {
    count: 10,
    maxCount: 100,
    showZero: false,
  },
  argTypes: {
    count: { control: "number" },
    maxCount: { control: "number" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    showZero: { control: "bool" },
  },
};

export const Default = (args) => {
  return (
    <Badge {...args}>
      <Image src="https://picsum.photos/60" width={60} style={{ borderRadius: 8 }} />
    </Badge>
  );
};

export const Dot = () => {
  return (
    <Badge dot>
      <Image src="https://picsum.photos/40" width={40} />
    </Badge>
  );
};
