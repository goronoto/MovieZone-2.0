import React from "react";
import { MenuItem, Select, FormControl, } from "@mui/material";

const validSortOptions = {
    movie: [
        { value: "popularity.desc", label: "Popular" },
        { value: "release_date.desc", label: "Release Date" },
        { value: "revenue.desc", label: "Revenue" },
        { value: "vote_average.desc", label: "Rating" },
    ],
    tv: [
        { value: "popularity.desc", label: "Popular" },
        { value: "first_air_date.desc", label: "Release Date" },
        { value: "vote_average.desc", label: "Rating" },
    ],
};

export default function SortOption({ sortBy, setSortBy, type }) {
    return (
        <FormControl sx={{ minWidth: 100 }}>
            <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                {validSortOptions[type].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}