import Avatar from "../components/Avatar";

export default {
  title: "Component/Avatar",
  component: Avatar,
  args: {
    src: "https://picsum.photos/200",
    shape: "circle",
    size: 70,
    mode: "cover",
  },
  argTypes: {
    shape: {
      control: "inline-radio",
      options: ["circle", "round", "square"],
    },
    size: {
      control: { type: "range", min: 40, max: 200 },
    },
    mode: {
      control: "inline-radio",
      options: ["contain", "cover", "fill"],
    },
  },
};

export const Default = (args) => <Avatar {...args} />;

export const Group = () => {
  return (
    <Avatar.Group size={40}>
      <Avatar src="https://picsum.photos/200?1" />
      <Avatar src="https://picsum.photos/200?2" />
      <Avatar src="https://picsum.photos/200?3" />
      <Avatar src="https://picsum.photos/200?4" />
    </Avatar.Group>
  );
};
