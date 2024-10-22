import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "XTAL1",
  "2": "",
  "3": "GND",
  "4": "VCC",
  "5": "",
  "6": "",
  "7": "",
  "8": "",
  "9": "",
  "10": "",
  "11": "",
  "12": "",
  "13": "",
  "14": "",
  "15": "",
  "16": "",
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
  "27": "pin27",
  "28": "pin28",
  "29": "pin29",
  "30": "pin30",
  "31": "pin31",
  "32": "pin32",
  "33": "pin33"
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const ATMEGA16U2_MUR = (props: Props) => {
  return (
    <chip
      {...props}
      footprint={<footprint>
        <smtpad portHints={["1"]} pcbX="-2.477516000000037mm" pcbY="1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["2"]} pcbX="-2.477516000000037mm" pcbY="1.249934000000053mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["3"]} pcbX="-2.477516000000037mm" pcbY="0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["4"]} pcbX="-2.477516000000037mm" pcbY="0.2499360000000479mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["5"]} pcbX="-2.477516000000037mm" pcbY="-0.2499359999999342mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["6"]} pcbX="-2.477516000000037mm" pcbY="-0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["7"]} pcbX="-2.477516000000037mm" pcbY="-1.2499339999999393mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["8"]} pcbX="-2.477516000000037mm" pcbY="-1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["9"]} pcbX="-1.7500600000000759mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["10"]} pcbX="-1.249934000000053mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["11"]} pcbX="-0.7500619999999572mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["12"]} pcbX="-0.2499359999999342mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["13"]} pcbX="0.24993599999982052mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["14"]} pcbX="0.7500619999999572mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["15"]} pcbX="1.2499339999999393mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["16"]} pcbX="1.7500599999999622mm" pcbY="-2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["17"]} pcbX="2.477516000000037mm" pcbY="-1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["18"]} pcbX="2.477516000000037mm" pcbY="-1.2499339999999393mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["19"]} pcbX="2.477516000000037mm" pcbY="-0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["20"]} pcbX="2.477516000000037mm" pcbY="-0.2499359999999342mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["21"]} pcbX="2.477516000000037mm" pcbY="0.2499360000000479mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["22"]} pcbX="2.477516000000037mm" pcbY="0.7500619999999572mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["23"]} pcbX="2.477516000000037mm" pcbY="1.249934000000053mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["24"]} pcbX="2.477516000000037mm" pcbY="1.7500599999999622mm" width="0.6500114mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["25"]} pcbX="1.7500599999999622mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["26"]} pcbX="1.2499339999999393mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["27"]} pcbX="0.7500619999999572mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["28"]} pcbX="0.24993599999982052mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["29"]} pcbX="-0.2499359999999342mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["30"]} pcbX="-0.7500619999999572mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["31"]} pcbX="-1.249934000000053mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["32"]} pcbX="-1.7500600000000759mm" pcbY="2.477516000000037mm" width="0.2800096mm" height="0.6500114mm" shape="rect" />
<smtpad portHints={["33"]} pcbX="0mm" pcbY="0mm" width="3.7999924mm" height="3.7999924mm" shape="rect" />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":2.5761949999999842},{"x":-2.5761949999999842,"y":2.0804886000000806}]} />
<silkscreenpath route={[{"x":2.080488599999967,"y":2.5761949999999842},{"x":2.5761949999999842,"y":2.5761949999999842},{"x":2.5761949999999842,"y":2.0804886000000806}]} />
<silkscreenpath route={[{"x":2.080488599999967,"y":-2.5761949999998706},{"x":2.5761949999999842,"y":-2.5761949999998706},{"x":2.5761949999999842,"y":-2.080488599999967}]} />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":2.5761949999999842},{"x":-2.5761949999999842,"y":2.5761949999999842},{"x":-2.5761949999999842,"y":2.0804886000000806}]} />
<silkscreenpath route={[{"x":-2.0804886000000806,"y":-2.5761949999998706},{"x":-2.5761949999999842,"y":-2.5761949999998706},{"x":-2.5761949999999842,"y":-2.080488599999967}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=8f04bea36b684c6088784cbd78ede88c&pn=C507117",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
  "leftSide": {
    "direction": "top-to-bottom",
    "pins": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ]
  },
  "rightSide": {
    "direction": "bottom-to-top",
    "pins": [
      33,
      32,
      31,
      30,
      29,
      28,
      27,
      26,
      25,
      24,
      23,
      22,
      21,
      20,
      19,
      18,
      17
    ]
  }
}}
    />
  )
}

export const useATMEGA16U2_MUR = createUseComponent(ATMEGA16U2_MUR, pinNames)