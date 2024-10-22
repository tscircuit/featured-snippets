import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "",
  "2": "",
  "3": "GND",
  "4": "VCC",
  "5": "GND",
  "6": "VCC",
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
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const ATMEGA328P_AU = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=4d9f6c3430024506b87ce44b53201fc5&pn=C14877",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      pcbRotation={-90}
      schPinSpacing={0.75}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [
            32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17,
          ],
        },
      }}
      supplierPartNumbers={{
        lcsc: ["C14877"],
      }}
      footprint={
        <footprint>
          <smtpad
            portHints={["32"]}
            pcbX="-4.381500000000003mm"
            pcbY="-2.7999943999999886mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["31"]}
            pcbX="-4.381500000000003mm"
            pcbY="-1.9999959999999817mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["30"]}
            pcbX="-4.381500000000003mm"
            pcbY="-1.1999976000000032mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["29"]}
            pcbX="-4.381500000000003mm"
            pcbY="-0.3999991999999821mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["28"]}
            pcbX="-4.381500000000003mm"
            pcbY="0.39999920000002476mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["27"]}
            pcbX="-4.381500000000003mm"
            pcbY="1.1999976000000032mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["26"]}
            pcbX="-4.381500000000003mm"
            pcbY="1.99999600000001mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["25"]}
            pcbX="-4.381500000000003mm"
            pcbY="2.7999944000000028mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["24"]}
            pcbX="-2.7999943999999886mm"
            pcbY="4.368800000000007mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["23"]}
            pcbX="-1.9999959999999959mm"
            pcbY="4.368800000000007mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["22"]}
            pcbX="-1.1999976000000032mm"
            pcbY="4.368800000000007mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["21"]}
            pcbX="-0.3999991999999821mm"
            pcbY="4.368800000000007mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["20"]}
            pcbX="0.39999919999999634mm"
            pcbY="4.368800000000007mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["19"]}
            pcbX="1.1999976000000032mm"
            pcbY="4.368800000000007mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["18"]}
            pcbX="1.99999600000001mm"
            pcbY="4.368800000000007mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["17"]}
            pcbX="2.7999944000000028mm"
            pcbY="4.368800000000007mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["16"]}
            pcbX="4.381500000000003mm"
            pcbY="2.7999944000000028mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["15"]}
            pcbX="4.381500000000003mm"
            pcbY="1.99999600000001mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["14"]}
            pcbX="4.381500000000003mm"
            pcbY="1.1999976000000032mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["13"]}
            pcbX="4.381500000000003mm"
            pcbY="0.39999920000002476mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["12"]}
            pcbX="4.381500000000003mm"
            pcbY="-0.3999991999999821mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["11"]}
            pcbX="4.381500000000003mm"
            pcbY="-1.1999976000000032mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["10"]}
            pcbX="4.381500000000003mm"
            pcbY="-1.9999959999999817mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["9"]}
            pcbX="4.381500000000003mm"
            pcbY="-2.7999943999999886mm"
            width="1.6500093999999998mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["8"]}
            pcbX="2.7999944000000028mm"
            pcbY="-4.368799999999993mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["7"]}
            pcbX="1.99999600000001mm"
            pcbY="-4.368799999999993mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["6"]}
            pcbX="1.1999976000000032mm"
            pcbY="-4.368799999999993mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["5"]}
            pcbX="0.39999919999999634mm"
            pcbY="-4.368799999999993mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["4"]}
            pcbX="-0.3999991999999821mm"
            pcbY="-4.368799999999993mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["3"]}
            pcbX="-1.1999976000000032mm"
            pcbY="-4.368799999999993mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["2"]}
            pcbX="-1.9999959999999959mm"
            pcbY="-4.368799999999993mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <smtpad
            portHints={["1"]}
            pcbX="-2.7999943999999886mm"
            pcbY="-4.368799999999993mm"
            width="0.45001179999999996mm"
            height="1.6500093999999998mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -2.967482000000004, y: -4.825999999999993 },
              { x: -2.819400000000016, y: -4.677917989294684 },
              { x: -2.6713180000000136, y: -4.825999999999993 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.6713180000000136, y: -4.825999999999993 },
              { x: -2.819400000000016, y: -4.9740820107053025 },
              { x: -2.967482000000004, y: -4.825999999999993 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.9626559999999813, y: 2.9499560000000145 },
              { x: -2.9626559999999813, y: -2.949955999999986 },
              { x: 2.937256000000019, y: -2.949955999999986 },
              { x: 2.937256000000019, y: 2.9499560000000145 },
              { x: -2.9626559999999813, y: 2.9499560000000145 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -3.7591999999999928, y: -4.063999999999993 },
              { x: -3.907941055997668, y: -4.214642029703938 },
              { x: -3.7579300000000018, y: -4.364019424014728 },
              { x: -3.6079189440023356, y: -4.214642029703938 },
              { x: -3.7566599999999966, y: -4.063999999999993 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.2123399999999975, y: -1.998980000000003 },
              { x: -2.4015150142161303, y: -2.137897449194128 },
              { x: -2.3284212288967012, y: -2.3609278108984313 },
              { x: -2.0937187711032834, y: -2.3609278108984313 },
              { x: -2.0206249857838543, y: -2.137897449194128 },
              { x: -2.209799999999987, y: -1.998980000000003 },
            ]}
          />
        </footprint>
      }
    />
  )
}

export const useATMEGA328P_AU = createUseComponent(ATMEGA328P_AU, pinNames)
