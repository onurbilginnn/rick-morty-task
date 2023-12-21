import React from "react";

export const useGetSearchText = () => {
    const [searchText, setSearchText] = React.useState("");
    return {searchText, setSearchText};
    }