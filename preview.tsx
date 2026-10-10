import {useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import {Player, type PlayerRef} from '@remotion/player';
import {Reel} from './src/Composition';

const assets = JSON.parse(document.getElementById('assets')!.textContent!);
function blobUrl(base64: string, type: string) {
  const data = atob(base64);
  const pieces: Uint8Array[] = [];
  for(let offset=0; offset<data.length; offset+=1048576){
    const size = Math.min(1048576, data.length-offset);
    const bytes = new Uint8Array(size);
    for(let i=0;i<size;i++) bytes[i]=data.charCodeAt(offset+i);
    pieces.push(bytes);
  }
  return URL.createObjectURL(new Blob(pieces, {type}));
}

const source = blobUrl(assets.video, 'video/mp4');
const font = blobUrl(assets.font, 'font/woff2');

const Preview = () => {
  const inputProps = useMemo(() => ({source, font}), []);
  return <Player ref={ref=>{(window as unknown as {editPreview: PlayerRef | null}).editPreview=ref;}} component={Reel} durationInFrames={966} fps={30} compositionWidth={1080} compositionHeight={1920}
    inputProps={inputProps} controls loop={false} autoPlay={false} moveToBeginningWhenEnded={false} acknowledgeRemotionLicense
    numberOfSharedAudioTags={12} style={{width: '100%', height: '100%'}}
  />;
};

createRoot(document.getElementById('player')!).render(<Preview/>);
