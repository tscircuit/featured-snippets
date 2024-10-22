import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "pin1",
  "2": "VOUT",
  "3": "pin3",
  "4": "TAB"
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const LM1117IMPX_5_0 = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e80246a9471445bfb635be848806a22e&pn=C41202",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
  "leftSide": {
    "direction": "top-to-bottom",
    "pins": [
      2,
      4
    ]
  },
  "rightSide": {
    "direction": "bottom-to-top",
    "pins": [
      3,
      1
    ]
  }
}}
      supplierPartNumbers={{
  "lcsc": [
    "C41202"
  ]
}}
      footprint={<footprint>
        <smtpad portHints={["1"]} pcbX="2.929959849999932mm" pcbY="-2.2999699999999166mm" width="2.4999949999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["2"]} pcbX="2.929959849999932mm" pcbY="0mm" width="2.4999949999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["3"]} pcbX="2.929959849999932mm" pcbY="2.2999700000000303mm" width="2.4999949999999997mm" height="1.0999978mm" shape="rect" />
<smtpad portHints={["4"]} pcbX="-3.009957149999991mm" pcbY="0mm" width="2.3400004mm" height="3.5999928mm" shape="rect" />
<silkscreenpath route={[{"x":-1.6114077499998984,"y":-3.3262061999998878},{"x":-1.6114077499998984,"y":3.3262062000000014},{"x":1.3313854499999707,"y":3.3262062000000014},{"x":1.3313854499999707,"y":-3.3262061999998878},{"x":-1.6114077499998984,"y":-3.3262061999998878}]} />
      </footprint>}
    />
  )
}

export const useLM1117IMPX_5_0 = createUseComponent(LM1117IMPX_5_0, pinNames)