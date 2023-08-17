import styled from "@emotion/styled";

const IconWrapper = styled.i`
  display: inline-block;
`;

const Icon = ({ name, size = 16, strokeWidth = 2, rotate, color = "#222", ...props }) => {
  const shapeStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined,
  };
  const iconStyle = {
    "stroke-width": strokeWidth,
    stroke: color,
    width: size,
    height: size,
  };
  const { Buffer } = require("buffer");
  const icon = require("feather-icons").icons[name]; // icon을 불러옴
  const svg = icon ? icon.toSvg(iconStyle) : ""; // icone이 존재하면 svg를 불러옴 (스타일 전달)
  const base64 = Buffer.from(svg, "utf8").toString("base64"); // base64로 인코딩

  return (
    <IconWrapper {...props} style={shapeStyle}>
      <img src={`data:image/svg+xml;base64,${base64}`} alt={name}></img>
    </IconWrapper>
  );
};

export default Icon;
