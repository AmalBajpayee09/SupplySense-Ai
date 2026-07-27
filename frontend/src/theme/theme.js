import { createTheme } from "@mui/material/styles";

export const theme = createTheme({

    palette: {

        mode: "dark",

        primary: {

            main: "#7C4DFF"
        },

        secondary: {

            main: "#00E5FF"
        },

        background: {

            default: "#0F172A",

            paper: "#1E293B"
        },

        success: {

            main: "#22C55E"
        },

        warning: {

            main: "#F59E0B"
        },

        error: {

            main: "#EF4444"
        }
    },

    typography: {

        fontFamily: "Inter, Roboto, sans-serif",

        h4: {

            fontWeight: 700
        },

        h5: {

            fontWeight: 700
        },

        h6: {

            fontWeight: 600
        },

        button: {

            textTransform: "none",

            fontWeight: 600
        }
    },

    shape: {

        borderRadius: 12
    }
});