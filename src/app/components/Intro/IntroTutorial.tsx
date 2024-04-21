import theme from "@/app/theme";
import {
	Box,
	Button,
	Container,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	ThemeProvider,
	Typography,
} from "@mui/material";
import React from "react";
import NavigationButton from "../Navigation/NavigationButton";
import { ArrowBackOutlined, ArrowForwardOutlined, HelpOutlineOutlined, MusicNoteOutlined } from "@mui/icons-material";

export default function IntroTutorial() {
	const [step, setStep] = React.useState<number>(0);

	const handlePreviousStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

	const handleNextStep = () => {
		setStep((prevStep) => prevStep + 1);
	};

	// this code is awful but I feel silly abstracting these steps
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
				<Box sx={{ flex: "0 0 auto" }}>
					{step < 2 ? (
						<Box sx={{ display: "flex", flexDirection: "row-reverse", p: 1 }}>
							<NavigationButton
								text="About"
								disabled
								onPress={() => {}}
								tooltipContent={""}
								tooltipPlacement="top"
								endIcon={<HelpOutlineOutlined />}
							/>
						</Box>
					) : step === 2 ? (
						<Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
							<NavigationButton
								text="Music Player"
								disabled
								amber
								onPress={() => {}}
								tooltipContent={"Open the music player."}
								tooltipPlacement="bottom"
								startIcon={<MusicNoteOutlined />}
							/>
							<NavigationButton
								text="About"
								onPress={() => {}}
								tooltipContent={""}
								tooltipPlacement="top"
								endIcon={<HelpOutlineOutlined />}
							/>
						</Box>
					) : step === 3 ? (
						<Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
							<NavigationButton
								text="Music Player"
								amber
								onPress={() => {}}
								tooltipContent={"Open the music player."}
								tooltipPlacement="bottom"
								startIcon={<MusicNoteOutlined />}
							/>
							<NavigationButton
								text="About"
								onPress={() => {}}
								tooltipContent={""}
								tooltipPlacement="top"
								endIcon={<HelpOutlineOutlined />}
							/>
						</Box>
					) : (
						<React.Fragment />
					)}
				</Box>
				<Box
					sx={{ flex: "1 1 100%", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}
				>
					<Container>
						<Stepper activeStep={step} orientation="vertical">
							<Step>
								<StepLabel>
									<span style={{ display: "flex", justifyContent: "space-between" }}>
										<span>Tutorial</span>
									</span>
								</StepLabel>
								<StepContent>
									<Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
										<span style={{ color: "white" }}>
											<Typography>The following is a tutorial on how to navigate the page.</Typography>
										</span>
										<Box sx={{ display: "flex", width: "100%" }} gap={1}>
											<Button
												variant="outlined"
												size="small"
												startIcon={<ArrowBackOutlined />}
												onClick={() => handlePreviousStep()}
												onTouchStart={() => handlePreviousStep()}
											>
												Previous
											</Button>
											<Button
												variant="outlined"
												size="small"
												endIcon={<ArrowForwardOutlined />}
												onClick={() => handleNextStep()}
												onTouchStart={() => handleNextStep()}
											>
												Next
											</Button>
										</Box>
									</Box>
								</StepContent>
							</Step>
							<Step>
								<StepLabel>
									<span style={{ display: "flex", justifyContent: "space-between" }}>
										<span>Navigate between pages</span>
										<span>◱ ◲</span>
									</span>
								</StepLabel>
								<StepContent>
									<Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
										<span style={{ color: "white" }}>
											<Typography sx={{ display: "inline-block" }}>Use the</Typography>
											<Box sx={{ display: "inline-block", px: "0.25em" }}>
												<ArrowBackOutlined sx={{ fontSize: "1em" }} />
											</Box>
											<Typography sx={{ display: "inline-block" }} variant="button">
												Previous
											</Typography>
											<Typography sx={{ display: "inline-block" }}>&nbsp;and&nbsp;</Typography>
											<Typography sx={{ display: "inline-block" }} variant="button">
												Next
											</Typography>
											<Box sx={{ display: "inline-block", px: "0.25em" }}>
												<ArrowForwardOutlined sx={{ fontSize: "1em" }} />
											</Box>
											<Typography sx={{ display: "inline-block" }}>
												buttons to navigate the page. You can also use the [⇦] left and right [⇨] arrow keys on your
												keyboard.
											</Typography>
										</span>
										<Box sx={{ display: "flex", width: "100%" }} gap={1}>
											<Button
												variant="outlined"
												size="small"
												startIcon={<ArrowBackOutlined />}
												onClick={() => handlePreviousStep()}
												onTouchStart={() => handlePreviousStep()}
											>
												Previous
											</Button>
											<Button
												variant="outlined"
												size="small"
												endIcon={<ArrowForwardOutlined />}
												onClick={() => handleNextStep()}
												onTouchStart={() => handleNextStep()}
											>
												Next
											</Button>
										</Box>
									</Box>
								</StepContent>
							</Step>
							<Step>
								<StepLabel>
									<span style={{ display: "flex", justifyContent: "space-between" }}>
										<span>Access tutorial and more information</span>
										<span>◳</span>
									</span>
								</StepLabel>
								<StepContent>
									<Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
										<span style={{ color: "white" }}>
											<Typography sx={{ display: "inline-block" }}>Use the&nbsp;</Typography>
											<Typography sx={{ display: "inline-block" }} variant="button">
												About
											</Typography>
											<Box sx={{ display: "inline-block", px: "0.25em" }}>
												<HelpOutlineOutlined sx={{ fontSize: "1em" }} />
											</Box>
											<Typography sx={{ display: "inline-block" }}>
												button at the top of the page to see more info about the site.
											</Typography>
										</span>
										<Box sx={{ display: "flex", width: "100%" }} gap={1}>
											<Button
												variant="outlined"
												size="small"
												startIcon={<ArrowBackOutlined />}
												onClick={() => handlePreviousStep()}
												onTouchStart={() => handlePreviousStep()}
											>
												Previous
											</Button>
											<Button
												variant="outlined"
												size="small"
												endIcon={<ArrowForwardOutlined />}
												onClick={() => handleNextStep()}
												onTouchStart={() => handleNextStep()}
											>
												Next
											</Button>
										</Box>
									</Box>
								</StepContent>
							</Step>
							<Step>
								<StepLabel>
									<span style={{ display: "flex", justifyContent: "space-between" }}>
										<span>Use the Music Player</span>
										<span>◰</span>
									</span>
								</StepLabel>
								<StepContent>
									<Box sx={{ display: "flex", flexDirection: "column" }} gap={2}>
										<span style={{ color: "white" }}>
											<Typography sx={{ display: "inline-block" }}>
												It is difficult to enunciate the musical talent of a man like Chet Baker. The best way to
												understand his music is to listen to it.
											</Typography>
											<Typography sx={{ display: "inline-block" }}>
												There is a music player included with this project. You can find it by clicking the
											</Typography>
											<Box sx={{ display: "inline-block", px: "0.25em" }}>
												<MusicNoteOutlined sx={{ fontSize: "1em", color: theme.palette.amber.main }} />
											</Box>
											<Typography sx={{ display: "inline-block", color: theme.palette.amber.main }} variant="button">
												Music Player
											</Typography>
											<Typography sx={{ display: "inline-block" }}>&nbsp;button at the top of the page.</Typography>
										</span>
										<Box sx={{ display: "flex", width: "100%" }} gap={1}>
											<Button
												variant="outlined"
												size="small"
												endIcon={<ArrowBackOutlined />}
												onClick={() => handlePreviousStep()}
												onTouchStart={() => handlePreviousStep()}
											>
												Previous
											</Button>
											<Button
												variant="outlined"
												size="small"
												endIcon={<ArrowForwardOutlined />}
												onClick={() => handleNextStep()}
												onTouchStart={() => handleNextStep()}
											>
												Proceed
											</Button>
										</Box>
									</Box>
								</StepContent>
							</Step>
						</Stepper>
					</Container>
				</Box>
				<Box sx={{ flex: "0 0 auto", display: "flex", justifyContent: "space-between", p: 1 }}>
					<NavigationButton
						text="Previous"
						onPress={() => {}}
						disabled={step < 1}
						tooltipContent={""}
						tooltipPlacement="top"
						startIcon={<ArrowBackOutlined />}
					/>
					<NavigationButton
						text="Next"
						onPress={() => {}}
						disabled={step < 1}
						tooltipContent={""}
						tooltipPlacement="top"
						endIcon={<ArrowForwardOutlined />}
					/>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
