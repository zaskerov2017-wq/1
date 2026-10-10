import React, {useMemo} from 'react';
import type {Caption} from '@remotion/captions';
import {createTikTokStyleCaptions} from '@remotion/captions';
import {AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame, useVideoConfig, type InteractiveTransformProps} from 'remotion';

const CaptionContent: React.FC<InteractiveTransformProps & {captions: Caption[]}> = ({captions, style}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const time = frame / fps * 1000;
  const pages = useMemo(() => createTikTokStyleCaptions({captions, combineTokensWithinMilliseconds: 1600, breakOnSilenceAfterMilliseconds: 500}).pages, [captions]);
  const page = pages.find(p => time >= p.startMs && time < p.startMs + p.durationMs);
  if (!page) return null;
  return <div style={{position: 'absolute', left: 84, right: 84, bottom: 190, display: 'flex', justifyContent: 'center', zIndex: 3, ...style,
    opacity: interpolate(time - page.startMs, [0, 70], [0.6, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
    translate: interpolate(time - page.startMs, [0, 100], ['0px 12px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)}),
  }}>
    <div style={{borderRadius: 24, background: 'rgba(15,16,22,0.86)', border: '1px solid rgba(255,255,255,0.15)', padding: '24px 26px', textAlign: 'center', fontSize: 70, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-1.5px', boxShadow: '0 10px 36px #0005'}}>
      {page.tokens.map((word, i) => <span key={i} style={{color: time >= word.fromMs && time < word.toMs ? '#d0ff83' : '#fff', whiteSpace: 'pre-wrap'}}>{word.text}</span>)}
    </div>
  </div>;
};

export const KineticCaptions = Interactive.withSchema({Component: CaptionContent, componentName: '<KineticCaptions>', schema: {...Interactive.captionsSchema}, wrapInSequence: true});

export const Accent: React.FC<{label: string; kind?: 'title' | 'company' | 'iceberg' | 'final'}> = ({label, kind = 'title'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return <div style={{position: 'absolute', left: 88, right: 88, top: kind === 'title' ? 1160 : 1230, zIndex: 2,
    opacity: interpolate(frame, [0, 0.14 * fps, 2.3 * fps, 2.55 * fps], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
    translate: interpolate(frame, [0, 0.4 * fps], ['-36px 16px', '0px 0px'], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)}),
  }}>
    <div style={{display: 'flex', alignItems: 'center', gap: 22, padding: '22px 24px', width: 'fit-content', maxWidth: '100%', borderRadius: 22, background: 'rgba(18,17,27,.83)', boxShadow: '0 10px 36px #0003', border: '1px solid #ffffff25'}}>
      <svg width="82" height="82" viewBox="0 0 100 100" style={{flexShrink: 0}}>
        {kind === 'company' ? <g stroke="#d0ff83" strokeWidth="4" fill="none"><rect x="18" y="29" width="64" height="55" rx="8"/><path d="M35 29v-9h30v9M18 49h64M44 48h12v13H44z"/></g>
          : kind === 'iceberg' ? <g stroke="#d0ff83" strokeWidth="3" fill="none"><path d="M7 40h86" strokeDasharray="5 4"/><path d="M36 40l15-29 14 29M23 41l-8 12 20 28 18 10 30-36-8-14"/><path d="M36 42l16 46 12-46" opacity=".5"/></g>
          : kind === 'final' ? <g stroke="#d0ff83" strokeWidth="5" fill="none"><circle cx="50" cy="50" r="35"/><path d="M30 49l13 14 27-28"/></g>
          : <g stroke="#d0ff83" strokeWidth="4" fill="none"><path d="M50 7v27M50 66v27M7 50h27M66 50h27M21 21l18 18M61 61l18 18M21 79l18-18M61 39l18-18"/></g>}
      </svg>
      <div style={{fontSize: kind === 'iceberg' ? 54 : 64, fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.06}}>{label}</div>
    </div>
    <div style={{height: 4, marginTop: 10, borderRadius: 4, width: interpolate(frame, [0, 0.55 * fps], [0, 220], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}), backgroundColor: '#d0ff83'}} />
  </div>;
};

export const Finish: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames, fps} = useVideoConfig();
  return <AbsoluteFill style={{pointerEvents: 'none', zIndex: 1}}>
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(10,8,18,.16) 0%,transparent 18%,transparent 62%,rgba(10,8,18,.55) 100%)'}} />
    <div style={{position: 'absolute', left: 88, top: 104, color: '#fff', background: 'rgba(15,16,22,.65)', border: '1px solid #ffffff30', borderRadius: 100, padding: '16px 26px', display: 'flex', gap: 14, alignItems: 'center', fontWeight: 600, fontSize: 34, letterSpacing: '2px',
      opacity: interpolate(frame, [0, 0.25 * fps], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}),
    }}><span style={{height: 10, width: 10, background: '#d0ff83', borderRadius: 10}}/>ЛИЧНАЯ ИСТОРИЯ</div>
    <div style={{position: 'absolute', bottom: 106, left: 88, right: 88, height: 4, borderRadius: 4, background: '#ffffff30'}}>
      <div style={{height: '100%', width: `${frame / (durationInFrames - 1) * 100}%`, background: '#d0ff83', borderRadius: 4}}/>
    </div>
  </AbsoluteFill>;
};
