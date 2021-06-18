import styled from "styled-components";

const primaryColor = "#022F47";
const secondaryColor = "#14CDDB";

const Button = styled.button`
  background-color: ${(props) =>
    props.theme.bgSecondaryColor || secondaryColor};
  padding: ${(props) => props.theme.paddingAll || "10"}px;
  color: ${(props) => props.theme.textColor || "#fff"};
  border: none;
  outline: none;
  outline-width: 0;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize || "18px"}px;
  border-radius: ${(props) => props.theme.borderRadius || "10px"};
  min-width: ${(props) => props.theme.minWidth || "140px"};
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  position: relative;
  z-index: 1;
  font-weight: ${(props) => props.theme.fontWeight};
  transition: color 500ms, box-shadow 400ms ease-in-out;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    outline-width: 0;
    background-color: ${(props) => props.theme.bgPrimaryColor || primaryColor};
    border-top-left-radius: ${(props) => props.theme.borderRadius || "10px"};
    border-bottom-left-radius: ${(props) => props.theme.borderRadius || "10px"};
    transition: width 500ms, opacity 250ms linear;
    z-index: -1;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    outline-width: 0;
    background-color: ${(props) => props.theme.bgPrimaryColor || primaryColor};
    border-top-right-radius: ${(props) => props.theme.borderRadius || "10px"};
    border-bottom-right-radius: ${(props) =>
      props.theme.borderRadius || "10px"};
    transition: width 500ms, opacity 250ms linear;
    z-index: -1;
  }

  :hover:before {
    width: 0%;
    opacity: 0;
  }

  :hover:after {
    width: 0%;
    opacity: 0;
  }

  :hover {
    color: ${(props) => props.theme.hoverTextColor || "#fff"};
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  }
`;

export default Button;
