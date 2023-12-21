import { TextField, Autocomplete} from "@mui/material";
import { colors } from "../../constants";
import { MenuItemComponent, PaperComponent } from "./components";

const names: string[] = [
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn"
];

const { dropDownMenuBackground, dropDownMenuBorder } = colors;
const MultiSelect = () => {
  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value);
  }
    return (
        <Autocomplete
          sx={{
            m: 1, width: 500,
            '& .MuiInputBase-root': {
              borderRadius: '20px',
            },
            "& .MuiAutocomplete-inputRoot": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: dropDownMenuBorder,
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: dropDownMenuBorder,
              },
            },
          }}
          multiple
          options={names}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          PaperComponent={(props) => (
            <PaperComponent {...props}
            />
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={textChangeHandler}
              variant="outlined"
            />
          )}
          renderOption={(props, option, { selected }) => (
              <MenuItemComponent configs={props} value={option} selected={selected} colors={{backgroundColor: dropDownMenuBackground, borderColor: dropDownMenuBorder}} />
            )}
        />
    );
  }

export default MultiSelect;