"use client";
import { useTranscription } from "./hooks/useTranscription";
import { useState } from "react";
export default function Home() {
  const { data, transcribeAudio, isPending } = useTranscription();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      transcribeAudio(file);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gradient-to-l from-[#47e0064d] to-[#b806e04d]">
      <h1 className="font-nunito text-4xl text-center text-white my-4">
        Gladia Speech Recognition
      </h1>
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={handleSubmit}
      >
        <label className="w-[calc(100%-2em)] flex flex-col gap-2 items-center justify-center bg-gradient-to-t from-green-300 to-gray-500 rounded-md p-4">
          <span className="font-mono text-white">Insert Audio:</span>
          <input
            type="file"
            name="audio"
            accept="audio/mpeg, audio/wav"
            onChange={handleFileChange}
            className="mx-auto bg-gray-200 font-mono w-[calc(100%-1em)]"
          />
        </label>
        <button className="h-10 w-40 bg-gradient-to-tr from-slate-500 to-purple-300 hover:to-purple-700 rounded-md font-mono cursor-pointer text-white transition duration-300 transform hover:scale-105">
          Transcribe
        </button>
        {isPending && (
          <div className="w-[calc(100%-2em)] rounded-2xl p-4 bg-purple-500 h-max text-white">
            <p className="font-mono">Transcribing..this might take a while</p>
          </div>
        )}
        {data && !isPending && (
          <div className="w-[calc(100%-2em)] mt-4 rounded-2xl bg-gradient-to-tr from-purple-500 to-gray-950  overflow-hidden shadow-xl shadow-black text-white">
            <h2 className="text-2xl p-4">Transcription:</h2>
            <div className="p-4">
              {data.map((item, index) => (
                <div className="mb-4" key={index}>
                  {item.transcription}
                </div>
              ))}
            </div>
          </div>
        )}
      </form>
    </main>
  );
}
