export interface ReportTextSubSectionState {
	text?: string;
	image?: string;
	video?: string;
	hideSectionTitle?: boolean;
}

export interface ReportTextSectionState {
	title: string;
	subSections: Array<ReportTextSubSectionState>;
	song: string;
}

type ReportTextState = Array<ReportTextSectionState>;
export default ReportTextState;
