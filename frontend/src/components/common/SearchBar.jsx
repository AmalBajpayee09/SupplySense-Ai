import {
    TextField,
    InputAdornment
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function SearchBar({

    value,

    onChange,

    placeholder = "Search..."

}) {

    return (

        <TextField

            size="small"

            value={value}

            onChange={onChange}

            placeholder={placeholder}

            sx={{
                width: 320,

                "& .MuiOutlinedInput-root": {

                    background: "#162033",

                    borderRadius: 3
                }
            }}

            slotProps={{

                input: {

                    startAdornment: (

                        <InputAdornment position="start">

                            <SearchRoundedIcon />

                        </InputAdornment>

                    )

                }

            }}

        />

    );

}

export default SearchBar;