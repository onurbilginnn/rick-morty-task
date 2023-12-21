import {
  DefaultComponentProps,
  OverridableTypeMap,
} from "@mui/material/OverridableComponent";

export type PaperComponentProps = DefaultComponentProps<OverridableTypeMap>;

export type MenuItemComponentConfigs = React.HTMLAttributes<HTMLLIElement>;

export interface MenuItemComponentProps {
  configs: MenuItemComponentConfigs;
  value: string;
  selected: boolean;
  colors: {
    backgroundColor: string;
    borderColor: string;
  };
}
