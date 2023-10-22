import { useState } from "react";

export function useTranscription() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const transcribeAudio = async (selectedAudioFile) => {
    const apiUrl = "https://api.gladia.io/audio/text/audio-transcription";
    const formData = new FormData();

    formData.append("audio", selectedAudioFile);
    formData.append("toggle_diarization", "true");
    formData.append("toggle_noise_reduction", "true");

    try {
      setIsPending(true);
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
        headers: {
          "x-gladia-key": "331f70d0-21c7-4d7f-93e9-ecbcb58f4686",
        },
      });

      if (response.ok) {
        const result = await response.json();
        setData(result.prediction);
      } else {
        console.error("API request failed.");
      }
      setIsPending(false);
    } catch (error) {
      console.error("Error:", error);
      setIsPending(false);
    }
  };

  return { data, isPending, transcribeAudio };
}
