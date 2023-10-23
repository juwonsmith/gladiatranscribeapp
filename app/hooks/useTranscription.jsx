import { useState } from "react";

export function useTranscription() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const transcribeAudio = async (AudioFile) => {
    const apiUrl = "https://api.gladia.io/audio/text/audio-transcription";
    const formData = new FormData();

    formData.append("audio", AudioFile);
    formData.append("toggle_diarization", "true");
    formData.append("toggle_noise_reduction", "true");
    formData.append("target_translation_language", "english");
    formData.append("toggle_direct_translate", "true");

    try {
      setIsPending(true);
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
        headers: {
          "x-gladia-key": process.env.NEXT_PUBLIC_GLADIA_KEY,
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
