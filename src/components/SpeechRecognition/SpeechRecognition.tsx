import { useEffect, useState } from "react";
import {
  MicSubtitle,
  MicContainer,
  StopContainer,
  TopContainer,
  SpeechContainer,
  BottomContainer,
  TitleText,
  SpeechText,
  MicButton,
  StopButton,
} from "./styles";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";

interface EventType {
  resultIndex: number;
  results: SpeechRecognitionResultList;
  interpretation: any;
}

function SpeechRecognitionComponent(): JSX.Element {
  const [recognizedText, setRecognizedText] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;

  useEffect(() => {
    if (typeof SpeechRecognition !== "undefined") {
      const onResult = (event: EventType) => {
        const newResults = [];
        for (const res of event.results) {
          newResults.push({
            transcript: res[0].transcript,
            isFinal: res.isFinal,
          });
        }

        setRecognizedText(
          newResults.reduce((sum, curr) => {
            return (sum += curr.transcript);
          }, "")
        );
      };
      recognition.addEventListener("result", onResult);

      return () => {
        recognition.removeEventListener("result", onResult);
      };
    }
  }, []);

  recognition.onend = (): void => {
    if (isListening) {
      recognition.start();
    }
  };

  /*Start Recording Handler */
  const handleStartListening = (): void => {
    setIsListening(true);
    recognition.start();
  };

  /*Stop Recording Handler */
  const handleStopListening = (): void => {
    setIsListening(false);
    setRecognizedText("");
    recognition.stop();
  };

  return (
    <SpeechContainer>
      <TopContainer>
        {isListening && <SpeechText>{recognizedText}</SpeechText>}
        {!isListening && (
          <TitleText>Transcript of voice will show here...</TitleText>
        )}
      </TopContainer>
      <BottomContainer>
        {!isListening && (
          <>
            <MicSubtitle>Press here to start</MicSubtitle>
            <MicContainer>
              <MicButton
                className="breathe-button"
                onClick={() => handleStartListening()}
              >
                <MicIcon sx={{ fontSize: "30px" }} />
              </MicButton>
            </MicContainer>
          </>
        )}
        {isListening && (
          <>
            <p>Press here to stop</p>
            <StopContainer>
              <StopButton
                className="breathe-button"
                onClick={() => handleStopListening()}
              >
                <StopIcon sx={{ fontSize: "35px" }} />
              </StopButton>
            </StopContainer>
          </>
        )}
      </BottomContainer>
    </SpeechContainer>
  );
}
export default SpeechRecognitionComponent;
