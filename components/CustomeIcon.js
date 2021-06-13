import styled from "styled-components";
import Link from "next/link";

const CustomeIcon = ({
  Icon,
  link,
  marginAll,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  padding,
  border,
  borderColor,
  borderRadius,
  iconColor,
  iconSize,
}) => {
  return (
    <Div
      marginAll={marginAll}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      padding={padding}
      border={border}
      borderColor={borderColor}
      borderRadius={borderRadius}
      iconColor={iconColor}
      iconSize={iconSize}
    >
      <Link href={link} replace scroll={false}>
        <a target="_blank">
          <Icon />
        </a>
      </Link>
    </Div>
  );
};

export default CustomeIcon;

const Div = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: ${({ marginAll }) => (marginAll ? marginAll : "none")}rem;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "none")}rem;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "none")}rem;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "none")}rem;
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "none"}rem;

  padding: ${({ padding }) => (padding ? padding : "0.2")}rem;
  border-width: ${({ border }) => (border ? border : "1")}px;
  border-color: ${({ borderColor }) => (borderColor ? borderColor : "#000")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "0.5"}rem;
  color: ${({ iconColor }) => (iconColor ? iconColor : "#000")};
  font-size: ${({ iconSize }) => (iconSize ? iconSize : "1.5")}rem;
  transform: scaleX(1) scaleY(1);
  transition: transform 100ms ease-in-out;

  :hover {
    transform: scaleX(1.2) scaleY(1.2);
  }
`;
