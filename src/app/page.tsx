"use client";

import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function Home() {
	const searchParams = useSearchParams();
	return <Box>{searchParams.get("foo")}</Box>;
}
