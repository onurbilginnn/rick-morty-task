import { colors } from "../../constants";

const { dropDownMenuBorder } = colors;

export const classes = {
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
}
