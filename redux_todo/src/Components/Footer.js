import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const CustomBox = styled(Box)`
  width: 600px;
  height: 60px;
  margin: 0px auto;
  border: 1px solid grey;
  box-shadow: 0px 4px rgba(128, 128, 128, 0.3), 0px 8px rgba(128, 128, 128, 0.3);
  display: flex;
`;

const Items = styled(Box)`
  margin: auto 0px auto 16px;
  color: #404040;
`;

const Buttons = styled(Box)`
  display: flex;
  margin-left: 30px;
`;

const CustomizedButton = styled(Button)`
  color: #404040;
  height: 25px;
  margin: auto 0px;
  :focus {
    border: 1px solid grey;
    border-radius: 3px;
  }
`;

const ClearButton = styled(Button)`
  color: #404040;
  height: 30px;
  margin: auto 2px auto auto;
  :hover {
    text-decoration: underline;
  }
`;

function Footer(props) {
  return (
    <CustomBox>
      <Items>
        {props.left} {props.left === 1 ? "item" : "items"} left
      </Items>
      <Buttons>
        <CustomizedButton onClick={props.all}>All</CustomizedButton>
        <CustomizedButton onClick={props.active}>Active</CustomizedButton>
        <CustomizedButton onClick={props.clickcompleted}>
          Completed
        </CustomizedButton>
      </Buttons>
      {props.completed > 0 && (
        <ClearButton onClick={props.clear}>Clear Completed</ClearButton>
      )}
    </CustomBox>
  );
}

export default Footer;
