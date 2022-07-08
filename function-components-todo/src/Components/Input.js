import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";

const CustomInput = styled(Input)`
  font-size: 25px;
  width: 550px;
`;

function InputContainer(props) {
  return (
    <CustomInput
      disableUnderline={true}
      placeholder="What needs to be done?"
      value={props.value}
      onChange={props.change}
      onKeyPress={props.enter}
    ></CustomInput>
  );
}

export default InputContainer;
