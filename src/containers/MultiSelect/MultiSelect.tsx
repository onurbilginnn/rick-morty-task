import React from "react";
import { TextField, Autocomplete } from "@mui/material";
import { colors, characterUrl } from "../../constants";
import {
  MenuItemComponent,
  PaperComponent,
} from "../../components/MultiSelect";
import { classes } from "./utils";
import { useGetData } from "../../hooks";
import { NO_DATA_ERROR } from "../../constants/errors";
import { MenuItemComponentValue } from "../../components/MultiSelect/types";
import { useGetSearchText } from "./hooks";

const { dropDownMenuBackground, dropDownMenuBorder } = colors;

const MultiSelect = () => {
  const {searchText, setSearchText} = useGetSearchText();

  const textChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchText(e.target.value);
  };

  const { data, error } = useGetData<any>(characterUrl, {
    params: { name: searchText },
    fetchLimiterText: searchText,
    minFetchLengthLimit: 3,
  });

  return (
    <Autocomplete
      sx={classes}
      multiple
      options={data ? data.data.results : []}
      noOptionsText={error ?? NO_DATA_ERROR}
      getOptionLabel={(option: MenuItemComponentValue) => option.name}
      disableCloseOnSelect
      PaperComponent={(props) => <PaperComponent {...props} />}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={textChangeHandler}
          variant="outlined"
        />
      )}
      renderOption={(props, option, { selected }) => (
        <MenuItemComponent
          configs={props}
          key={option.name}
          selected={selected}
          value={option as MenuItemComponentValue}
          colors={{
            backgroundColor: dropDownMenuBackground,
            borderColor: dropDownMenuBorder,
          }}
          searchText={searchText}
        />
      )}
    />
  );
};

export default MultiSelect;
