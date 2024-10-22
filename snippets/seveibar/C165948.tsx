import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  // "0": "SH",
  // "B1": "GND",
  // "B4": "VBUS",
  // "B5": "CC2",
  // "B6": "DP2",
  // "B7": "DN2",
  // "B8": "SBU2",
  // "B9": "VBUS",
  // "B12": "GND",
  // "A1": "A1",
  // "A4": "A4",
  // "A5": "A5",
  // "A6": "A6",
  // "A7": "A7",
  // "A8": "A8",
  // "A9": "A9",
  // "A12": "A12"
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const TYPE_C_31_M_12 = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2a4bc2358b36497d9ab2a66ab6419ba3&pn=C165948",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: ["B1", "B4", "B5", "B6", "B7", "B8", "B9", "B12"],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: ["A12", "A9", "A8", "A7", "A6", "A5", "A4", "A1"],
        },
      }}
      supplierPartNumbers={{
        lcsc: ["C165948"],
      }}
      footprint={
        <footprint>
          <hole
            pcbX="-2.8999180000000706mm"
            pcbY="1.180611049999925mm"
            diameter="0.7500111999999999mm"
          />
          <hole
            pcbX="2.8999180000000706mm"
            pcbY="1.180611049999925mm"
            diameter="0.7500111999999999mm"
          />
          <platedhole
            portHints={["2"]}
            pcbX="4.32511199999999mm"
            pcbY="-2.4990869499999917mm"
            outerDiameter="1.1999975999999999mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["1"]}
            pcbX="4.32511199999999mm"
            pcbY="1.6807370499998342mm"
            outerDiameter="1.1999975999999999mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["0"]}
            pcbX="-4.32511199999999mm"
            pcbY="1.6807370499998342mm"
            outerDiameter="1.1999975999999999mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["3"]}
            pcbX="-4.32511199999999mm"
            pcbY="-2.4990869499999917mm"
            outerDiameter="1.1999975999999999mm"
            holeDiameter="0.7999983999999999mm"
            shape="circle"
          />
          <smtpad
            portHints={["B8"]}
            pcbX="-1.7500600000000759mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["A5"]}
            pcbX="-1.2499339999999393mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["B7"]}
            pcbX="-0.7500619999999572mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["A6"]}
            pcbX="-0.2499359999999342mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["A7"]}
            pcbX="0.2499359999999342mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["B6"]}
            pcbX="0.7500619999999572mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["A8"]}
            pcbX="1.2496799999998984mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["B5"]}
            pcbX="1.7500600000000759mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["A1"]}
            pcbX="-3.3500060000000076mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["B12"]}
            pcbX="-3.0500319999999874mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["A4"]}
            pcbX="-2.5499059999999645mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["B9"]}
            pcbX="-2.249932000000058mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["B4"]}
            pcbX="2.249932000000058mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["A9"]}
            pcbX="2.5501600000000053mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["B1"]}
            pcbX="3.050032000000101mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["A12"]}
            pcbX="3.3500060000000076mm"
            pcbY="2.449087049999889mm"
            width="0.29999939999999997mm"
            height="1.2999973999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -4.4689776000000165, y: -1.40071475000002 },
              { x: -4.4689776000000165, y: 0.4621974499998487 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.471009600000116, y: -5.119096950000085 },
              { x: -4.4689776000000165, y: -5.119096950000085 },
              { x: -4.4689776000000165, y: -3.6377943500000356 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.471009600000116, y: -1.4010703500000545 },
              { x: 4.471009600000116, y: 0.4625530499999968 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.471009600000116, y: -5.119096950000085 },
              { x: 4.471009600000116, y: -3.6374387500002285 },
            ]}
          />
        </footprint>
      }
    />
  )
}

export const useTYPE_C_31_M_12 = createUseComponent(TYPE_C_31_M_12, pinNames)
