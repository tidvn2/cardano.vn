import React from "react";
import ReactAudioPlayer from 'react-h5-audio-player';

interface Props {
    link?: string;
}

export default function AudioPlayer({ link }: Props) {
    return (
        <div>
            <ReactAudioPlayer
                src={link}
                showSkipControls={true}
                onError={() => { console.log('play error') }}
            />
        </div>
    );
}
