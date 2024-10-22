import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "pin1",
  "2": "pin2",
  "3": "pin3",
  "4": "pin4",
  "5": "pin5",
  "6": "pin6"
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const A_2_54_1_6P_ = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c162e59987044c559654f3f6cf872bf9&pn=C40877",
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
      6
    ]
  },
  "rightSide": {
    "direction": "bottom-to-top",
    "pins": []
  }
}}
      supplierPartNumbers={{
  "lcsc": [
    "C40877"
  ]
}}
      footprint={<footprint>
        <platedhole  portHints={["6"]} pcbX="6.399999900000012mm" pcbY="0mm" outerDiameter="1.5999967999999998mm" holeDiameter="1.0200131999999997mm" shape="circle" />
<platedhole  portHints={["5"]} pcbX="3.859999900000048mm" pcbY="0mm" outerDiameter="1.5999967999999998mm" holeDiameter="1.0200131999999997mm" shape="circle" />
<platedhole  portHints={["4"]} pcbX="1.3199999000000275mm" pcbY="0mm" outerDiameter="1.5999967999999998mm" holeDiameter="1.0200131999999997mm" shape="circle" />
<platedhole  portHints={["3"]} pcbX="-1.220000099999993mm" pcbY="0mm" outerDiameter="1.5999967999999998mm" holeDiameter="1.0200131999999997mm" shape="circle" />
<platedhole  portHints={["2"]} pcbX="-3.7600000999999565mm" pcbY="0mm" outerDiameter="1.5999967999999998mm" holeDiameter="1.0200131999999997mm" shape="circle" />
<platedhole  portHints={["1"]} pcbX="-6.300000099999977mm" pcbY="0mm" outerDiameter="1.7999964mm" holeDiameter="1.0200131999999997mm" shape="circle" />
<silkscreenpath route={[{"x":-7.799971699999958,"y":0.8999981999999918},{"x":-7.799971699999958,"y":1.2499848},{"x":7.899996900000076,"y":1.2499848},{"x":7.899996900000076,"y":-1.2499848},{"x":-7.799971699999958,"y":-1.2499848},{"x":-7.799971699999958,"y":0.9499854000000028}]} />
      </footprint>}
    />
  )
}

export const useA_2_54_1_6P_ = createUseComponent(A_2_54_1_6P_, pinNames)