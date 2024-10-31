import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "pin1": [
    "GND"
  ],
  "pin2": [
    "TRIG"
  ],
  "pin3": [
    "OUT"
  ],
  "pin4": [
    "RESET"
  ],
  "pin8": [],
  "pin7": [],
  "pin6": [],
  "pin5": []
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const NE555P = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=5e8e9a2e75ff40abab9e1f1cacdd2cbb&pn=C46749",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      supplierPartNumbers={{
  "lcsc": [
    "C46749"
  ]
}}
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.810000000000059mm" pcbY="-3.8099999999999454mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-1.2699999999999818mm" pcbY="-3.8099999999999454mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="1.2699999999999818mm" pcbY="-3.8099999999999454mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin4"]} pcbX="3.8099999999999454mm" pcbY="-3.8099999999999454mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin8"]} pcbX="-3.810000000000059mm" pcbY="3.810000000000059mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin7"]} pcbX="-1.2699999999999818mm" pcbY="3.810000000000059mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin6"]} pcbX="1.2699999999999818mm" pcbY="3.810000000000059mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<platedhole  portHints={["pin5"]} pcbX="3.8099999999999454mm" pcbY="3.810000000000059mm" outerDiameter="1.499997mm" holeDiameter="0.9000235999999999mm" shape="circle" />
<silkscreenpath route={[{"x":-4.9399951999999985,"y":0.640003800000045},{"x":-4.940299999999979,"y":0.6350000000001046},{"x":-4.940299999999979,"y":2.649220000000014},{"x":4.960620000000063,"y":2.649220000000014},{"x":4.960620000000063,"y":-2.6492199999999},{"x":-4.940299999999979,"y":-2.6492199999999},{"x":-4.940299999999979,"y":-0.6349999999999909},{"x":-4.9399951999999985,"y":-0.6400037999999313}]} />
<silkscreenpath route={[{"x":-4.9399951999999985,"y":-0.6400037999999313},{"x":-4.6969912204483535,"y":-0.5916673031445043},{"x":-4.490982393946524,"y":-0.4540166060533011},{"x":-4.353331696855321,"y":-0.24800777955169906},{"x":-4.304995200000121,"y":-0.005003799999826697},{"x":-4.353331696855321,"y":0.2380001795518183},{"x":-4.490982393946524,"y":0.4440090060536477},{"x":-4.6969912204483535,"y":0.5816597031448509},{"x":-4.9399951999999985,"y":0.6299962000000505}]} />
<silkscreenpath route={[{"x":-5.234940000000051,"y":-3.8099999999999454},{"x":-5.109318043912481,"y":-3.933721786962792},{"x":-4.984959652107364,"y":-3.808729999999855},{"x":-5.109318043912481,"y":-3.6837382130370315},{"x":-5.234940000000051,"y":-3.8074599999997645}]} />
<silkscreenpath route={[{"x":-4.450080000000071,"y":-1.65099999999984},{"x":-4.360871640570167,"y":-1.8619343786078844},{"x":-4.148821341500593,"y":-1.9484567117675624},{"x":-3.9375112001708885,"y":-1.8601421170388903},{"x":-3.85009195288103,"y":-1.6484599999998863},{"x":-3.937511200171002,"y":-1.4367778829607687},{"x":-4.148821341500707,"y":-1.3484632882322103},{"x":-4.360871640570167,"y":-1.4349856213918883},{"x":-4.450080000000071,"y":-1.6459199999999328}]} />
      </footprint>}
    />
  )
}

export const useNE555P = createUseComponent(NE555P, pinNames)