import { Switch } from "@mui/material";
import { useDispatch, } from "react-redux";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function ThemeSwitch({darkMode,ToggleTheme}) {

    return (
        <Switch
            checked={darkMode}
            onChange={ToggleTheme}
            icon={<Brightness7 sx={{ color: "orange" }} />}
            checkedIcon={<Brightness4 sx={{ color: "yellow" }} />}
        />
    );
}