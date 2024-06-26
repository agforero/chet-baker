import React from "react";
import PropTypes from "prop-types";

interface YouTubeEmbedProps {
	embedId: string;
}

// const YouTubeEmbed = (props: YouTubeEmbedProps) => (
export default function YouTubeEmbed(props: YouTubeEmbedProps) {
	return (
		<div className="video-responsive">
			<iframe
				width="853"
				height="480"
				src={`https://www.youtube.com/embed/${props.embedId}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube"
			/>
		</div>
	);
}
