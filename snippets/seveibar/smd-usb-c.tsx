import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  1: ["A1", "GND"],
  2: ["B12", "GND"],
  3: ["A4", "VBUS"],
  4: ["B9", "VBUS"],
  5: ["B8", "SBU2"],
  6: ["A5", "CC1"],
  7: ["B7", "Dminus"],
  8: ["A6", "Dplus"],
  9: ["A7", "Dminus"],
  10: ["B6", "Dplus"],
  11: ["A8", "SBU1"],
  12: ["B5", "CC2"],
  13: ["A9", "VBUS"],
  14: ["B4", "VBUS"],
  15: ["A12", "GND"],
  16: ["B1", "GND"]
} as const
const pinNames = ["VBUS", "Dplus", "Dminus", "GND", "CC1", "CC2"] as const

interface Props extends CommonLayoutProps {
  name: string
}

/**
 * USB Type C connector (C165948)
 */
export const SmdUsbC = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=2a4bc2358b36497d9ab2a66ab6419ba3&pn=C165948",
        rotationOffset: { x: 0, y: 0, z: 180 },
        positionOffset: { x: 0, y: -2.5, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      supplierPartNumbers={{
        jlcpcb: ["C165948"],
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
            portHints={["alt_2"]}
            pcbX="4.32511199999999mm"
            pcbY="-2.7740863499999477mm"
            outerHeight="1.7999964mm"
            outerWidth="1.1999975999999999mm"
            innerHeight="1.3999972mm"
            innerWidth="0.7999983999999999mm"
            height="1.3999972mm"
            shape="pill"
          />
          <platedhole
            portHints={["alt_1"]}
            pcbX="4.32511199999999mm"
            pcbY="1.4057376499998782mm"
            outerHeight="1.9999959999999999mm"
            outerWidth="1.1999975999999999mm"
            innerHeight="1.5999968mm"
            innerWidth="0.7999983999999999mm"
            height="1.5999968mm"
            shape="pill"
          />
          <platedhole
            portHints={["alt_0"]}
            pcbX="-4.32511199999999mm"
            pcbY="1.4057376499998782mm"
            outerHeight="1.9999959999999999mm"
            outerWidth="1.1999975999999999mm"
            innerHeight="1.5999968mm"
            innerWidth="0.7999983999999999mm"
            height="1.5999968mm"
            shape="pill"
          />
          <platedhole
            portHints={["alt_3"]}
            pcbX="-4.32511199999999mm"
            pcbY="-2.7740863499999477mm"
            outerHeight="1.7999964mm"
            outerWidth="1.1999975999999999mm"
            innerHeight="1.3999972mm"
            innerWidth="0.7999983999999999mm"
            height="1.3999972mm"
            shape="pill"
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

export const useUsbC = createUseComponent(SmdUsbC, pinNames)
