import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "pin1",
  "2": "pin2",
  "3": "GND",
  "4": "VCC",
  "5": "pin5",
  "6": "pin6",
  "7": "pin7",
  "8": "pin8",
  "9": "pin9",
  "10": "pin10",
  "11": "pin11",
  "12": "pin12",
  "13": "pin13",
  "14": "pin14",
  "15": "pin15",
  "16": "pin16",
  "17": "pin17",
  "18": "pin18",
  "19": "pin19",
  "20": "pin20",
  "21": "pin21",
  "22": "pin22",
  "23": "pin23",
  "24": "pin24",
  "25": "pin25",
  "26": "pin26",
  "27": "UCAP",
  "28": "UGND",
  "29": "",
  "30": "",
  "31": "UVCC",
  "32": "AVCC",
  "33": "EP"
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const ATMEGA16U2_MU = (props: Props) => {
  return (
    <chip
      {...props}
      footprint={<footprint>
        <smtpad portHints={["33"]} pcbX="1.1368683772161603e-13mm" pcbY="-1.1368683772161603e-13mm" width="3.3999932mm" height="3.3999932mm" shape="rect" />
<smtpad portHints={["32"]} pcbX="-2.4998679999998785mm" pcbY="-1.7500600000000759mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["31"]} pcbX="-2.4998679999998785mm" pcbY="-1.249934000000053mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["30"]} pcbX="-2.4998679999998785mm" pcbY="-0.7500620000000708mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["29"]} pcbX="-2.4998679999998785mm" pcbY="-0.24993600000016158mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["28"]} pcbX="-2.4998679999998785mm" pcbY="0.2499359999999342mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["27"]} pcbX="-2.4998679999998785mm" pcbY="0.7500619999998435mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["26"]} pcbX="-2.4998679999998785mm" pcbY="1.2499339999998256mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["25"]} pcbX="-2.4998679999998785mm" pcbY="1.7500599999998485mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["24"]} pcbX="-1.748535999999831mm" pcbY="2.499867999999992mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["23"]} pcbX="-1.2484099999999216mm" pcbY="2.499867999999992mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["22"]} pcbX="-0.7485379999999395mm" pcbY="2.499867999999992mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["21"]} pcbX="-0.2484119999999166mm" pcbY="2.499867999999992mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["20"]} pcbX="0.25145999999995183mm" pcbY="2.499867999999992mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["19"]} pcbX="0.7515859999999748mm" pcbY="2.499867999999992mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["18"]} pcbX="1.2514580000001843mm" pcbY="2.499867999999992mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["17"]} pcbX="1.7515840000000935mm" pcbY="2.499867999999992mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["16"]} pcbX="2.499867999999992mm" pcbY="1.7520919999999478mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["15"]} pcbX="2.499867999999992mm" pcbY="1.2519659999999249mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["14"]} pcbX="2.499867999999992mm" pcbY="0.7520939999998291mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["13"]} pcbX="2.499867999999992mm" pcbY="0.2519679999999198mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["12"]} pcbX="2.499867999999992mm" pcbY="-0.24790400000017598mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["11"]} pcbX="2.499867999999992mm" pcbY="-0.7480300000000852mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["10"]} pcbX="2.499867999999992mm" pcbY="-1.247902000000181mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["9"]} pcbX="2.499867999999992mm" pcbY="-1.7480280000000903mm" width="0.7999983999999999mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["8"]} pcbX="1.7485359999999446mm" pcbY="-2.499868000000106mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["7"]} pcbX="1.2486640000001898mm" pcbY="-2.499868000000106mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["6"]} pcbX="0.7485380000000532mm" pcbY="-2.499868000000106mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["5"]} pcbX="0.2486660000000711mm" pcbY="-2.499868000000106mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["4"]} pcbX="-0.25145999999983815mm" pcbY="-2.499868000000106mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["3"]} pcbX="-0.7513319999999339mm" pcbY="-2.499868000000106mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["2"]} pcbX="-1.2514580000000706mm" pcbY="-2.499868000000106mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<smtpad portHints={["1"]} pcbX="-1.7500599999999622mm" pcbY="-2.499868000000106mm" width="0.2800096mm" height="0.7999983999999999mm" shape="rect" />
<silkscreenpath route={[{"x":-2.599842399999943,"y":-2.099995799999988},{"x":-2.599842399999943,"y":-2.3499572000001763},{"x":-2.349931799999922,"y":-2.5998678000001973},{"x":-2.0999703999998474,"y":-2.5998678000001973}]} />
<silkscreenpath route={[{"x":-2.599359800000002,"y":2.597353199999816},{"x":-2.599359800000002,"y":2.0974811999998337}]} />
<silkscreenpath route={[{"x":2.602382400000124,"y":2.597353199999816},{"x":2.1025104000000283,"y":2.597353199999816}]} />
<silkscreenpath route={[{"x":2.5981151999999383,"y":-2.6024078000000372},{"x":2.09824320000007,"y":-2.6024078000000372}]} />
<silkscreenpath route={[{"x":2.602382400000124,"y":2.597353199999816},{"x":2.602382400000124,"y":2.0974811999998337}]} />
<silkscreenpath route={[{"x":2.5981151999999383,"y":-2.6024078000000372},{"x":2.5981151999999383,"y":-2.102535800000169}]} />
<silkscreenpath route={[{"x":-2.599359800000002,"y":2.597353199999816},{"x":-2.099462399999993,"y":2.597353199999816}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=06dba473d10b4dd5b9163c6f32461fab&pn=C17317",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
  "leftSide": {
    "direction": "top-to-bottom",
    "pins": [
      33,
      29,
      30,
      27,
      3,
      32,
      4,
      31,
      28
    ]
  },
  "rightSide": {
    "direction": "bottom-to-top",
    "pins": [
      1,
      2,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      5,
      26,
      25,
      23,
      22,
      7,
      8,
      10,
      11,
      12,
      13,
      24,
      6,
      9
    ]
  }
}}
    />
  )
}

export const useATMEGA16U2_MU = createUseComponent(ATMEGA16U2_MU, pinNames)