import { Paper } from "@mui/material";
import { PaperComponentProps } from "./types";

const PaperComponent =  (props: PaperComponentProps) => (
 <Paper
sx={{
  borderRadius: '20px',
  marginTop: '10px',
}}
{...props}
/>
)

export default PaperComponent;