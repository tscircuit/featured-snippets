import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "pin1",
  "2": "pin2",
  "3": "pin3",
  "4": "TAB",
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const NCP1117ST50T3G = (props: Props) => {
  return (
    <chip
      {...props}
      footprint={
        <footprint>
          <smtpad
            portHints={["1"]}
            pcbX="2.857499999999959mm"
            pcbY="-2.2999699999999166mm"
            width="2.4649938000000002mm"
            height="1.0500106mm"
            shape="rect"
          />
          <smtpad
            portHints={["2"]}
            pcbX="2.857499999999959mm"
            pcbY="0mm"
            width="2.4649938000000002mm"
            height="1.0500106mm"
            shape="rect"
          />
          <smtpad
            portHints={["3"]}
            pcbX="2.857499999999959mm"
            pcbY="2.2999700000000303mm"
            width="2.4649938000000002mm"
            height="1.0500106mm"
            shape="rect"
          />
          <smtpad
            portHints={["4"]}
            pcbX="-2.8575000000000728mm"
            pcbY="0mm"
            width="2.4649938000000002mm"
            height="3.5399979999999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.3963904000000866, y: -3.4012124000000767 },
              { x: -1.3963904000000866, y: 3.4012124000000767 },
              { x: 1.396390399999973, y: 3.4012124000000767 },
              { x: 1.396390399999973, y: -3.4012124000000767 },
              { x: -1.3963904000000866, y: -3.4012124000000767 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=e80246a9471445bfb635be848806a22e&pn=C17314",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [4],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [3, 2, 1],
        },
      }}
    />
  )
}

export const useNCP1117ST50T3G = createUseComponent(NCP1117ST50T3G, pinNames)
