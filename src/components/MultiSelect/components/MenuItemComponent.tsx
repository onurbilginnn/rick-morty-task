import { MenuItem, Checkbox } from "@mui/material";
import { MenuItemComponentProps } from "./types";

const MenuItemComponent = ({ configs, value, selected, colors }: MenuItemComponentProps) => {

const { backgroundColor, borderColor } = colors;

return (<MenuItem
    {...configs}
    key={value}
    value={value}
    sx={{ justifyContent: "space-between", backgroundColor, borderBottom: `1px solid ${borderColor}` }}
  >
    {selected ? <Checkbox checked={true} />: <Checkbox checked={false} />}
    {value}
  </MenuItem>)
}


export default MenuItemComponent;