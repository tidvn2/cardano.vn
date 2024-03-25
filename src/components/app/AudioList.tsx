import { getSheetData, ResponseSheetData } from "@site/src/lib/axios";
import * as React from "react"
import useSWR from 'swr'
import ReactAudioPlayer from 'react-h5-audio-player';
import { useState } from "react";
import { List, Tooltip } from 'antd';

interface Props {
    sheetId: string,
    sheetName: string,
    range?: string
}
interface Audio {
    id: string,
    date: string,
    title: string,
    link: string,
    abstract: string

}
export default function AudioList({ sheetId, sheetName, range }: Props) {
    const [currentTrack, setTrackIndex] = useState(0);

    const { data, error, isLoading } = useSWR<ResponseSheetData>(
        { sheetId, sheetName, range: "A1:D1000" },
        getSheetData
    );

    if (error) return <div>Error: {error.message}</div>;
    if (isLoading) return <div>Loading...</div>;

    if (data.values.length === 0) return <div>No data found.</div>;

    const playlist: Audio[] = data.values.slice(1).map((row, rowIndex) => {
        return ({
            id: rowIndex.toString(),
            date: row[0],
            title: row[1],
            link: row[2],
            abstract: row[3]
        })
    });

    const handleClickNext = () => {
        console.log('click next')
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };
    const handleEnd = () => {
        console.log('end')
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    }

    return (
        <div>
            <ReactAudioPlayer
                src={playlist[currentTrack].link}
                showSkipControls
                onClickNext={handleClickNext}
                onEnded={handleEnd}
                onError={() => { console.log('play error') }}
            />
            < div className="playlist" >
                <List
                    bordered
                    dataSource={playlist}
                    renderItem={(audio, index) => (
                        <List.Item
                            style={index === currentTrack ? { backgroundColor: '#f0f0f0', fontWeight: 'bold' } : null}
                            onClick={() => setTrackIndex(index)}>
                            <Tooltip title={audio.abstract}>
                                <span>{audio.title}</span>
                            </Tooltip>
                            < br />
                            <small>{audio.date} </small>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}