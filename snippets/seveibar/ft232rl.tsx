import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "TXD",
  "2": "",
  "3": "",
  "4": "VCCIO",
  "5": "RXD",
  "6": "",
  "7": "GND",
  "8": "NC",
  "9": "",
  "10": "",
  "11": "",
  "12": "CBUS4",
  "13": "CBUS2",
  "14": "CBUS3",
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
  "27": "pin27",
  "28": "pin28",
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const FT232RL = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=f6684975c608438e85ae4e120e588908&pn=C490691",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 3, 5, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15],
        },
      }}
      supplierPartNumbers={{
        lcsc: ["C490691"],
      }}
      footprint={
        <footprint>
          <smtpad
            portHints={["1"]}
            pcbX="-4.225035999999932mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["2"]}
            pcbX="-3.575050000000033mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["3"]}
            pcbX="-2.925064000000134mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["4"]}
            pcbX="-2.2750780000000077mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["5"]}
            pcbX="-1.6250920000001088mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["6"]}
            pcbX="-0.9751059999999825mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["7"]}
            pcbX="-0.32486600000004273mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["8"]}
            pcbX="0.32512000000008356mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["9"]}
            pcbX="0.9751059999999825mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["10"]}
            pcbX="1.625091999999995mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["11"]}
            pcbX="2.2750780000000077mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["12"]}
            pcbX="2.9250640000000203mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["13"]}
            pcbX="3.5750499999999192mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["14"]}
            pcbX="4.225035999999818mm"
            pcbY="-3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["28"]}
            pcbX="-4.225035999999932mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["27"]}
            pcbX="-3.575050000000033mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["26"]}
            pcbX="-2.925064000000134mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["25"]}
            pcbX="-2.2750780000000077mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["24"]}
            pcbX="-1.6250920000001088mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["23"]}
            pcbX="-0.9751059999999825mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["22"]}
            pcbX="-0.32486600000004273mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["21"]}
            pcbX="0.32512000000008356mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["20"]}
            pcbX="0.9751059999999825mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["19"]}
            pcbX="1.625091999999995mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["18"]}
            pcbX="2.2750780000000077mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["17"]}
            pcbX="2.9250640000000203mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["16"]}
            pcbX="3.5750499999999192mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <smtpad
            portHints={["15"]}
            pcbX="4.225035999999818mm"
            pcbY="3.455161999999973mm"
            width="0.3640074mm"
            height="2.01549mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 5.079999999999927, y: 2.199868600000059 },
              { x: 5.079999999999927, y: -2.158999999999878 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.080000000000041, y: -0.6439915999999357 },
              { x: -5.080000000000041, y: -2.1999955999999656 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.080000000000041, y: 0.6349999999999909 },
              { x: -5.080000000000041, y: 2.199868600000059 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.080000000000041, y: 2.199868600000059 },
              { x: 5.079999999999927, y: 2.199868600000059 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.080000000000041, y: -2.1999955999999656 },
              { x: 5.079999999999927, y: -2.1999955999999656 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.080000000000041, y: -0.6439915999999357 },
              { x: -5.080000000000041, y: 0.6349999999999909 },
            ]}
          />
        </footprint>
      }
    />
  )
}

export const useFT232RL = createUseComponent(FT232RL, pinNames)
