import { Box } from "@mui/material";
import { MenuItemComponentValue } from "../types";
import { getBoldSplitElement } from "../../../utils";

const MenuItemBox = ({ valueObject, highlightText }: {valueObject: MenuItemComponentValue, highlightText: string}) => {
    const nameElement = getBoldSplitElement(valueObject.name, highlightText);
    const episodes = valueObject.episode.length;
    return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src={valueObject.image}
          alt={valueObject.name}
          loading="lazy"
          style={{borderRadius: '10px'}}
          width={50}
          height={50}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
            {nameElement}
          <div>{`${episodes} Episode${episodes > 1 ? 's' : ''}`}</div>
        </Box>
      </Box>
    </div>
  );
};

export default MenuItemBox;
