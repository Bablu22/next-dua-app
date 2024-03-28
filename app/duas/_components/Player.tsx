"use client";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

export function PLayer({ src }: { src: string }) {
  return (
    <div className="audio-player-container  w-full  rounded-lg ">
      <AudioPlayer
        src={src}
        showJumpControls={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        customProgressBarSection={[]}
        customControlsSection={[
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.CURRENT_LEFT_TIME,
          RHAP_UI.LOOP,
        ]}
        className="w-full  rounded-lg   "
        layout="stacked-reverse"
      />
    </div>
  );
}
