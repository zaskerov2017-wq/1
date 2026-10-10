import React from 'react';
import {AbsoluteFill, Composition, Series, Sequence, staticFile, useVideoConfig} from 'remotion';
import {Video} from '@remotion/media';
import {Accent, Finish, KineticCaptions} from './Graphics';

type EditProps = {source: string; font: string};

export const Reel: React.FC<EditProps> = ({source, font}) => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: '#121212', fontFamily: 'CaptionSans, Arial, sans-serif'}}>
    <style>{`@font-face{font-family:CaptionSans;src:url("${font}") format("woff2");font-weight:100 900;font-display:block}`}</style>
    <Series>
      <Series.Sequence name="Хук — новые краски" trimBefore={70.66666667 * fps} durationInFrames={66} premountFor={fps}>
        <Video name="Видео" src={source} premountFor={fps} objectFit="cover" style={{width: '100%', height: '100%'}} />
        <KineticCaptions name="Субтитры" premountFor={fps} captions={[
  {
    "text": " Моя",
    "startMs": 70680,
    "endMs": 71060,
    "timestampMs": 70870,
    "confidence": null
  },
  {
    "text": " история",
    "startMs": 71060,
    "endMs": 71320,
    "timestampMs": 71190,
    "confidence": null
  },
  {
    "text": " приобретает",
    "startMs": 71320,
    "endMs": 71960,
    "timestampMs": 71640,
    "confidence": null
  },
  {
    "text": " новые",
    "startMs": 71960,
    "endMs": 72180,
    "timestampMs": 72070,
    "confidence": null
  },
  {
    "text": " краски,",
    "startMs": 72180,
    "endMs": 72680,
    "timestampMs": 72430,
    "confidence": null
  }
]} />
        <Sequence name="Новые краски" from={70.66666667 * fps} durationInFrames={66} premountFor={fps}>
          <Accent label="Новые краски" kind="title" />
        </Sequence>
      </Series.Sequence>
      <Series.Sequence name="Контекст" trimBefore={0.80000000 * fps} durationInFrames={198} premountFor={fps}>
        <Video name="Видео" src={source} premountFor={fps} objectFit="cover" style={{width: '100%', height: '100%'}} />
        <KineticCaptions name="Субтитры" premountFor={fps} captions={[
  {
    "text": " Ну",
    "startMs": 820,
    "endMs": 1000,
    "timestampMs": 910,
    "confidence": null
  },
  {
    "text": " что,",
    "startMs": 1000,
    "endMs": 1160,
    "timestampMs": 1080,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " ни",
    "startMs": 1160,
    "endMs": 1300,
    "timestampMs": 1230,
    "confidence": null
  },
  {
    "text": " для",
    "startMs": 1300,
    "endMs": 1540,
    "timestampMs": 1420,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " кого",
    "startMs": 1540,
    "endMs": 1780,
    "timestampMs": 1660,
    "confidence": null
  },
  {
    "text": " уже",
    "startMs": 1780,
    "endMs": 1940,
    "timestampMs": 1860,
    "confidence": null
  },
  {
    "text": " не",
    "startMs": 1940,
    "endMs": 2140,
    "timestampMs": 2040,
    "confidence": null
  },
  {
    "text": " секрет,",
    "startMs": 2140,
    "endMs": 2420,
    "timestampMs": 2280,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " что",
    "startMs": 2520,
    "endMs": 3480,
    "timestampMs": 3000,
    "confidence": null
  },
  {
    "text": " патриотическая",
    "startMs": 3480,
    "endMs": 4160,
    "timestampMs": 3820,
    "confidence": null
  },
  {
    "text": " организация",
    "startMs": 4160,
    "endMs": 4900,
    "timestampMs": 4530,
    "confidence": null
  },
  {
    "text": " «Оплот",
    "startMs": 5060,
    "endMs": 5400,
    "timestampMs": 5230,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Родины»",
    "startMs": 5400,
    "endMs": 6060,
    "timestampMs": 5730,
    "confidence": null
  },
  {
    "text": " превратилась",
    "startMs": 6060,
    "endMs": 6580,
    "timestampMs": 6320,
    "confidence": null
  },
  {
    "text": " в",
    "startMs": 6580,
    "endMs": 6700,
    "timestampMs": 6640,
    "confidence": null
  },
  {
    "text": " её",
    "startMs": 6700,
    "endMs": 6980,
    "timestampMs": 6840,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " помёт.",
    "startMs": 6980,
    "endMs": 7240,
    "timestampMs": 7110,
    "confidence": null,
    "pageBreakAfter": true
  }
]} />
      </Series.Sequence>
      <Series.Sequence name="Наклейки" trimBefore={8.60000000 * fps} durationInFrames={96} premountFor={fps}>
        <Video name="Видео" src={source} premountFor={fps} objectFit="cover" style={{width: '100%', height: '100%'}} />
        <KineticCaptions name="Субтитры" premountFor={fps} captions={[
  {
    "text": " У",
    "startMs": 8660,
    "endMs": 8720,
    "timestampMs": 8690,
    "confidence": null
  },
  {
    "text": " нас",
    "startMs": 8720,
    "endMs": 8940,
    "timestampMs": 8830,
    "confidence": null
  },
  {
    "text": " люди",
    "startMs": 8940,
    "endMs": 9220,
    "timestampMs": 9080,
    "confidence": null
  },
  {
    "text": " массово",
    "startMs": 9220,
    "endMs": 9620,
    "timestampMs": 9420,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " снимают",
    "startMs": 9620,
    "endMs": 10080,
    "timestampMs": 9850,
    "confidence": null
  },
  {
    "text": " наклейки",
    "startMs": 10080,
    "endMs": 10420,
    "timestampMs": 10250,
    "confidence": null
  },
  {
    "text": " с",
    "startMs": 10420,
    "endMs": 10660,
    "timestampMs": 10540,
    "confidence": null
  },
  {
    "text": " автомобилей.",
    "startMs": 10660,
    "endMs": 11640,
    "timestampMs": 11150,
    "confidence": null,
    "pageBreakAfter": true
  }
]} />
      </Series.Sequence>
      <Series.Sequence name="Личная история" trimBefore={27.03333333 * fps} durationInFrames={49} premountFor={fps}>
        <Video name="Видео" src={source} premountFor={fps} objectFit="cover" style={{width: '100%', height: '100%'}} />
        <KineticCaptions name="Субтитры" premountFor={fps} captions={[
  {
    "text": " Я",
    "startMs": 27040,
    "endMs": 27140,
    "timestampMs": 27090,
    "confidence": null
  },
  {
    "text": " не",
    "startMs": 27140,
    "endMs": 27320,
    "timestampMs": 27230,
    "confidence": null
  },
  {
    "text": " могу",
    "startMs": 27320,
    "endMs": 27500,
    "timestampMs": 27410,
    "confidence": null
  },
  {
    "text": " скрывать,",
    "startMs": 27500,
    "endMs": 28560,
    "timestampMs": 28030,
    "confidence": null,
    "pageBreakAfter": true
  }
]} />
      </Series.Sequence>
      <Series.Sequence name="Моя компания" trimBefore={28.86666667 * fps} durationInFrames={242} premountFor={fps}>
        <Video name="Видео" src={source} premountFor={fps} objectFit="cover" style={{width: '100%', height: '100%'}} />
        <KineticCaptions name="Субтитры" premountFor={fps} captions={[
  {
    "text": " Что",
    "startMs": 28880,
    "endMs": 28960,
    "timestampMs": 28920,
    "confidence": null
  },
  {
    "text": " у",
    "startMs": 28960,
    "endMs": 29040,
    "timestampMs": 29000,
    "confidence": null
  },
  {
    "text": " меня",
    "startMs": 29040,
    "endMs": 29300,
    "timestampMs": 29170,
    "confidence": null
  },
  {
    "text": " тоже",
    "startMs": 29300,
    "endMs": 29440,
    "timestampMs": 29370,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " как",
    "startMs": 29440,
    "endMs": 29560,
    "timestampMs": 29500,
    "confidence": null
  },
  {
    "text": "-то",
    "startMs": 29560,
    "endMs": 29800,
    "timestampMs": 29680,
    "confidence": null
  },
  {
    "text": " касается",
    "startMs": 29800,
    "endMs": 30220,
    "timestampMs": 30010,
    "confidence": null
  },
  {
    "text": " вся",
    "startMs": 30220,
    "endMs": 30420,
    "timestampMs": 30320,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " эта",
    "startMs": 30420,
    "endMs": 30760,
    "timestampMs": 30590,
    "confidence": null
  },
  {
    "text": " история,",
    "startMs": 30760,
    "endMs": 30860,
    "timestampMs": 30810,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " потому",
    "startMs": 31100,
    "endMs": 31320,
    "timestampMs": 31210,
    "confidence": null
  },
  {
    "text": " что",
    "startMs": 31320,
    "endMs": 32340,
    "timestampMs": 31830,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " вся",
    "startMs": 32340,
    "endMs": 32520,
    "timestampMs": 32430,
    "confidence": null
  },
  {
    "text": " та",
    "startMs": 32520,
    "endMs": 32740,
    "timestampMs": 32630,
    "confidence": null
  },
  {
    "text": " массовая",
    "startMs": 32740,
    "endMs": 33180,
    "timestampMs": 32960,
    "confidence": null
  },
  {
    "text": " деятельность",
    "startMs": 33180,
    "endMs": 33640,
    "timestampMs": 33410,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " против",
    "startMs": 33640,
    "endMs": 34000,
    "timestampMs": 33820,
    "confidence": null
  },
  {
    "text": " меня",
    "startMs": 34000,
    "endMs": 34140,
    "timestampMs": 34070,
    "confidence": null
  },
  {
    "text": " и",
    "startMs": 34140,
    "endMs": 34260,
    "timestampMs": 34200,
    "confidence": null
  },
  {
    "text": " моей",
    "startMs": 34260,
    "endMs": 34800,
    "timestampMs": 34530,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " компании,",
    "startMs": 34800,
    "endMs": 35000,
    "timestampMs": 34900,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " которой",
    "startMs": 35200,
    "endMs": 35380,
    "timestampMs": 35290,
    "confidence": null
  },
  {
    "text": " уже",
    "startMs": 35380,
    "endMs": 35600,
    "timestampMs": 35490,
    "confidence": null
  },
  {
    "text": " сейчас",
    "startMs": 35600,
    "endMs": 35840,
    "timestampMs": 35720,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " нет,",
    "startMs": 35840,
    "endMs": 36933,
    "timestampMs": 36480,
    "confidence": null,
    "pageBreakAfter": true
  }
]} />
        <Sequence name="Моя компания" from={34.00000000 * fps} durationInFrames={80} premountFor={fps}>
          <Accent label="Моя компания" kind="company" />
        </Sequence>
      </Series.Sequence>
      <Series.Sequence name="Продолжение истории" trimBefore={37.73333333 * fps} durationInFrames={191} premountFor={fps}>
        <Video name="Видео" src={source} premountFor={fps} objectFit="cover" style={{width: '100%', height: '100%'}} />
        <KineticCaptions name="Субтитры" premountFor={fps} captions={[
  {
    "text": " Была",
    "startMs": 37720,
    "endMs": 38060,
    "timestampMs": 37890,
    "confidence": null
  },
  {
    "text": " организована",
    "startMs": 38060,
    "endMs": 39220,
    "timestampMs": 38640,
    "confidence": null
  },
  {
    "text": " с",
    "startMs": 39220,
    "endMs": 39380,
    "timestampMs": 39300,
    "confidence": null
  },
  {
    "text": " участием",
    "startMs": 39380,
    "endMs": 39900,
    "timestampMs": 39640,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " гавриков",
    "startMs": 39900,
    "endMs": 40600,
    "timestampMs": 40250,
    "confidence": null
  },
  {
    "text": " из",
    "startMs": 40600,
    "endMs": 40780,
    "timestampMs": 40690,
    "confidence": null
  },
  {
    "text": " этой",
    "startMs": 40780,
    "endMs": 41760,
    "timestampMs": 41270,
    "confidence": null
  },
  {
    "text": " псевдопатриотической",
    "startMs": 41760,
    "endMs": 42880,
    "timestampMs": 42320,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " организации",
    "startMs": 42880,
    "endMs": 44000,
    "timestampMs": 43440,
    "confidence": null
  }
]} />
      </Series.Sequence>
      <Series.Sequence name="Верхушка айсберга" trimBefore={51.70000000 * fps} durationInFrames={73} premountFor={fps}>
        <Video name="Видео" src={source} premountFor={fps} objectFit="cover" style={{width: '100%', height: '100%'}} />
        <KineticCaptions name="Субтитры" premountFor={fps} captions={[
  {
    "text": " Это",
    "startMs": 51720,
    "endMs": 52020,
    "timestampMs": 51870,
    "confidence": null
  },
  {
    "text": " только",
    "startMs": 52020,
    "endMs": 52800,
    "timestampMs": 52410,
    "confidence": null
  },
  {
    "text": " маленькая",
    "startMs": 52800,
    "endMs": 53240,
    "timestampMs": 53020,
    "confidence": null
  },
  {
    "text": " верхушка",
    "startMs": 53240,
    "endMs": 53720,
    "timestampMs": 53480,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " айсберга.",
    "startMs": 53720,
    "endMs": 54000,
    "timestampMs": 53860,
    "confidence": null,
    "pageBreakAfter": true
  }
]} />
        <Sequence name="Верхушка айсберга" from={51.70000000 * fps} durationInFrames={73} premountFor={fps}>
          <Accent label="Верхушка айсберга" kind="iceberg" />
        </Sequence>
      </Series.Sequence>
      <Series.Sequence name="Финальная мысль" trimBefore={79.20000000 * fps} durationInFrames={51} premountFor={fps}>
        <Video name="Видео" src={source} premountFor={fps} objectFit="cover" style={{width: '100%', height: '100%'}} />
        <KineticCaptions name="Субтитры" premountFor={fps} captions={[
  {
    "text": " Ну",
    "startMs": 79200,
    "endMs": 79260,
    "timestampMs": 79230,
    "confidence": null
  },
  {
    "text": " а",
    "startMs": 79260,
    "endMs": 79420,
    "timestampMs": 79340,
    "confidence": null
  },
  {
    "text": " теперь",
    "startMs": 79420,
    "endMs": 79620,
    "timestampMs": 79520,
    "confidence": null
  },
  {
    "text": " всё",
    "startMs": 79620,
    "endMs": 79780,
    "timestampMs": 79700,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " встаёт",
    "startMs": 79780,
    "endMs": 80060,
    "timestampMs": 79920,
    "confidence": null
  },
  {
    "text": " на",
    "startMs": 80060,
    "endMs": 80160,
    "timestampMs": 80110,
    "confidence": null
  },
  {
    "text": " свои",
    "startMs": 80160,
    "endMs": 80460,
    "timestampMs": 80310,
    "confidence": null
  },
  {
    "text": " места.",
    "startMs": 80460,
    "endMs": 80640,
    "timestampMs": 80550,
    "confidence": null,
    "pageBreakAfter": true
  }
]} />
        <Sequence name="Всё на свои места" from={79.20000000 * fps} durationInFrames={51} premountFor={fps}>
          <Accent label="Всё на свои места" kind="final" />
        </Sequence>
      </Series.Sequence>
    </Series>
    <Finish />
  </AbsoluteFill>;
};

const Source: React.FC<EditProps> = ({source}) => {
  const {fps} = useVideoConfig();
  return <Video src={source} premountFor={fps} objectFit="cover" style={{width: '100%', height: '100%'}} />;
};

export const MyComposition = () => <>
  <Composition id="Reel" component={Reel} durationInFrames={966} fps={30} width={1080} height={1920} defaultProps={{source: staticFile('source.mp4'), font: staticFile('captions-bold.woff2')}} />
  <Composition id="Source" component={Source} durationInFrames={2467} fps={30} width={1080} height={1920} defaultProps={{source: staticFile('source.mp4'), font: staticFile('captions-bold.woff2')}} />
</>;
