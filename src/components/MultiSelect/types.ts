import {
  DefaultComponentProps,
  OverridableTypeMap,
} from "@mui/material/OverridableComponent";

export type PaperComponentProps = DefaultComponentProps<OverridableTypeMap>;

export type MenuItemComponentConfigs = React.HTMLAttributes<HTMLLIElement>;

export interface MenuItemComponentValue {
  id: number;
  status: string;
  name: string;
  episode: string[];
  image: string;
}

export interface MenuItemComponentProps {
  configs: MenuItemComponentConfigs;
  value: MenuItemComponentValue;
  selected: boolean;
  colors: {
    backgroundColor: string;
    borderColor: string;
  };
  searchText: string;
}
