import { MenuItem, Checkbox } from "@mui/material";
import { MenuItemComponentProps } from "./types";
import { MenuItemBox } from "./components";

const MenuItemComponent = ({
  configs,
  value,
  selected,
  colors,
  searchText,
}: MenuItemComponentProps) => {
  const { backgroundColor, borderColor } = colors;
  const optionElement = <MenuItemBox valueObject={value} highlightText={searchText}/>
  return (
    <MenuItem
      {...configs}
      key={value.id ?? '0'}
      value={value.name}
      sx={{
        justifyContent: "space-between",
        backgroundColor,
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      {selected ? <Checkbox checked={true} /> : <Checkbox checked={false} />}
      {optionElement}
    </MenuItem>
  );
};

export default MenuItemComponent;
