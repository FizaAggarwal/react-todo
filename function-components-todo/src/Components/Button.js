import { FaChevronDown } from "react-icons/fa";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomButton=styled(Button)`
    color: rgba(128,128,128);
`;

function ArrowDown(props){
    return(
        <>{props.countAll?
        <CustomButton onClick={props.checkAll}>
  <FaChevronDown/></CustomButton>:<CustomButton/>}</>
    );
}

export default ArrowDown;

