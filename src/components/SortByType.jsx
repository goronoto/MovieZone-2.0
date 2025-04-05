import { FormControl, MenuItem, Select } from "@mui/material";

export default function SortByType({type,setType}){
    return(
        <FormControl sx={{minWidth:'100px' }}>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value='movie'>Movies</MenuItem>
                <MenuItem value='tv'>Serials</MenuItem>
            </Select>
        </FormControl>
    )
}