import { Button, styled } from "@mui/material";

/* Speech To Text Container Styles */
export const SpeechContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "space-around",
  alignItems: "center",
});

export const TopContainer = styled("div")({});

export const BottomContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const TitleText = styled("div")({
  color: "#494c6e",
});

export const MicSubtitle = styled("p")({
  color: "#8a8b9c",
});

export const SpeechText = styled("div")({});

export const MicContainer = styled("div")({
  border: "1px solid #593274",
  borderRadius: "50%",
  padding: "6px",
});

export const StopContainer = styled("div")({
  border: "1px solid #593274",
  borderRadius: "50%",
  padding: "6px",
});

export const MicButton = styled(Button)({
  borderRadius: "50%",
  color: "black",
  backgroundColor: "#2BA3D2",
  width: "60px",
  height: "60px",
});

export const StopButton = styled(Button)({
  borderRadius: "50%",
  color: "black",
  backgroundColor: "#2BA3D2",
  width: "30px",
  height: "60px",
});

