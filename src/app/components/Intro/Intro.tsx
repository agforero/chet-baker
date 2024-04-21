import theme from "@/theme";
import { ArrowForwardOutlined } from "@mui/icons-material";
import { Box, Button, Container, ThemeProvider, Typography } from "@mui/material";

export default function Intro() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Box sx={{ width: "100%", overflowY: "auto" }}>
					<Box sx={{ display: "flex", flexDirection: "column", width: "100%", overflowY: "auto" }} gap={3}>
						<Typography>Welcome to</Typography>
						<Typography variant="h1" id="mainBanner" style={{ textAlign: "center", fontWeight: 500 }}>
							Chet Baker's Fame and Impact
						</Typography>
						<Typography variant="subtitle1" style={{ textAlign: "center" }}>
							A report by Maximos Forero.
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
							<Button color="amber" variant="outlined" endIcon={<ArrowForwardOutlined />}>
								Proceed
							</Button>
						</Box>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
