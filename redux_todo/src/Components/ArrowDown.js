import { FaChevronDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const CustomButton = styled(Button)`
  color: rgba(128, 128, 128);
  height: 60px;
`;

function ArrowDown(props) {
  return (
    <Box>
      {props.countAll ? (
        <CustomButton onClick={props.checkAll}>
          <FaChevronDown />
        </CustomButton>
      ) : (
        <CustomButton />
      )}
    </Box>
  );
}

export default ArrowDown;
