import { Box, Typography } from "@mui/material";

function PageHeader({

    title,

    subtitle

}) {

    return (

        <Box
            mb={4}
        >

            <Typography
                variant="h4"
                fontWeight={700}
            >

                {title}

            </Typography>

            <Typography
                sx={{
                    color: "#94A3B8",
                    mt: .5
                }}
            >

                {subtitle}

            </Typography>

        </Box>

    );

}

export default PageHeader;