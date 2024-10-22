import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "CKB",
  "2": "NC",
  "3": "NC",
  "4": "NC",
  "5": "VCC",
  "6": "R0_1",
  "7": "R0_2",
  "8": "QD",
  "9": "QC",
  "10": "GND",
  "11": "QB",
  "12": "QA",
  "13": "NC",
  "14": "CKA",
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const SN74LS93N = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=b982590048ce4e04ac9ffac81390dade&pn=C140325",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 2.8 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1, 2, 3, 4, 5, 6, 7],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [14, 13, 12, 11, 10, 9, 8],
        },
      }}
      supplierPartNumbers={{
        lcsc: ["C140325"],
      }}
      footprint={
        <footprint>
          <platedhole
            portHints={["1"]}
            pcbX="-7.6200000000000045mm"
            pcbY="-3.9999919999999065mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["2"]}
            pcbX="-5.080000000000041mm"
            pcbY="-3.9999919999999065mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["3"]}
            pcbX="-2.5400000000000773mm"
            pcbY="-3.9999919999999065mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["4"]}
            pcbX="0mm"
            pcbY="-3.9999919999999065mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["5"]}
            pcbX="2.5399999999999636mm"
            pcbY="-3.9999919999999065mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["6"]}
            pcbX="5.079999999999927mm"
            pcbY="-3.9999919999999065mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["7"]}
            pcbX="7.6200000000000045mm"
            pcbY="-3.9999919999999065mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["14"]}
            pcbX="-7.6200000000000045mm"
            pcbY="3.99999200000002mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["13"]}
            pcbX="-5.080000000000041mm"
            pcbY="3.99999200000002mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["12"]}
            pcbX="-2.5400000000000773mm"
            pcbY="3.99999200000002mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["11"]}
            pcbX="0mm"
            pcbY="3.99999200000002mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["10"]}
            pcbX="2.5399999999999636mm"
            pcbY="3.99999200000002mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["9"]}
            pcbX="5.079999999999927mm"
            pcbY="3.99999200000002mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <platedhole
            portHints={["8"]}
            pcbX="7.6200000000000045mm"
            pcbY="3.99999200000002mm"
            outerDiameter="1.9999959999999999mm"
            holeDiameter="0.9999979999999999mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -9.778999999999996, y: 3.175000000000068 },
              { x: -9.778999999999996, y: 1.0160000000000764 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -8.601151200000004, y: -3.1749999999999545 },
              { x: -9.778999999999996, y: -3.1749999999999545 },
              { x: -9.778999999999996, y: -1.0159999999999627 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 8.414410400000065, y: -3.1749999999999545 },
              { x: 9.905999999999835, y: -3.1749999999999545 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5.874410399999874, y: -3.1749999999999545 },
              { x: 6.825589599999944, y: -3.1749999999999545 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.3344103999999106, y: -3.1749999999999545 },
              { x: 4.285589600000094, y: -3.1749999999999545 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.794410399999947, y: -3.1749999999999545 },
              { x: 1.7455896000000166, y: -3.1749999999999545 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7455896000000166, y: -3.1749999999999545 },
              { x: -0.794410399999947, y: -3.1749999999999545 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.285589600000094, y: -3.1749999999999545 },
              { x: -3.3344103999999106, y: -3.1749999999999545 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.638848800000119, y: -3.1749999999999545 },
              { x: -5.874410399999988, y: -3.1749999999999545 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 8.414410400000065, y: 3.175000000000068 },
              { x: 9.905999999999835, y: 3.175000000000068 },
              { x: 9.905999999999835, y: -3.1749999999999545 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5.874410399999874, y: 3.175000000000068 },
              { x: 6.825589599999944, y: 3.175000000000068 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 3.3344103999999106, y: 3.175000000000068 },
              { x: 4.285589600000094, y: 3.175000000000068 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.794410399999947, y: 3.175000000000068 },
              { x: 1.7455896000000166, y: 3.175000000000068 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -1.7455896000000166, y: 3.175000000000068 },
              { x: -0.794410399999947, y: 3.175000000000068 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.285589600000094, y: 3.175000000000068 },
              { x: -3.3344103999999106, y: 3.175000000000068 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.8255896000000575, y: 3.175000000000068 },
              { x: -5.874410399999988, y: 3.175000000000068 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -9.778999999999996, y: 3.175000000000068 },
              { x: -8.414410400000065, y: 3.175000000000068 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -9.778999999999996, y: -1.0159999999999627 },
              { x: -9.535855285083812, y: -0.9864768865047608 },
              { x: -9.306841257203587, y: -0.8996233220635759 },
              { x: -9.105267379227257, y: -0.7604869201418296 },
              { x: -8.942848392252017, y: -0.5771537826788062 },
              { x: -8.829023497431649, y: -0.36027856523514856 },
              { x: -8.770407783916426, y: -0.1224652671394324 },
              { x: -8.770407783916426, y: 0.1224652671394324 },
              { x: -8.829023497431649, y: 0.36027856523526225 },
              { x: -8.942848392252017, y: 0.5771537826788062 },
              { x: -9.105267379227257, y: 0.7604869201419433 },
              { x: -9.306841257203587, y: 0.8996233220636896 },
              { x: -9.535855285083812, y: 0.9864768865048745 },
              { x: -9.778999999999996, y: 1.0160000000000764 },
            ]}
          />
        </footprint>
      }
    />
  )
}

export const useSN74LS93N = createUseComponent(SN74LS93N, pinNames)
