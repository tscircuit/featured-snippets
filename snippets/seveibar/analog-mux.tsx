import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1", "1"],
  pin2: ["pin2", "2"],
  pin3: ["pin3", "3"],
  pin4: ["pin4", "4"],
  pin5: ["pin5", "5"],
  pin6: ["pin6", "INH"],
  pin7: ["pin7", "VEE"],
  pin8: ["pin8", "VSS"],
  pin16: ["pin16"],
  pin15: ["pin15"],
  pin14: ["pin14"],
  pin13: ["pin13"],
  pin12: ["pin12"],
  pin11: ["pin11"],
  pin10: ["pin10"],
  pin9: ["pin9"],
} as const

interface Props extends CommonLayoutProps {
  name: string
}

export const CD4051BM96 = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=9adfdf34b7774b23880141fd3e8b4dbb&pn=C21379",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      supplierPartNumbers={{
        lcsc: ["C21379"],
      }}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin1"]}
            pcbX="-4.44500000000005mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="-3.175000000000068mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="-1.9050000000000864mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="-0.6349999999999909mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0.6349999999999909mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="1.9049999999999727mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin7"]}
            pcbX="3.1749999999999545mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin8"]}
            pcbX="4.444999999999936mm"
            pcbY="-2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin16"]}
            pcbX="-4.44500000000005mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin15"]}
            pcbX="-3.175000000000068mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin14"]}
            pcbX="-1.9050000000000864mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin13"]}
            pcbX="-0.6349999999999909mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin12"]}
            pcbX="0.6349999999999909mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin11"]}
            pcbX="1.9049999999999727mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin10"]}
            pcbX="3.1749999999999545mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin9"]}
            pcbX="4.444999999999936mm"
            pcbY="2.735580000000027mm"
            width="0.6020054mm"
            height="1.9709892mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -5.026202800000078, y: -1.5214091999999937 },
              { x: -5.026202800000078, y: 1.5214092000001074 },
              { x: 5.0262027999999646, y: 1.5214092000001074 },
              { x: 5.0262027999999646, y: -1.5214091999999937 },
              { x: -5.026202800000078, y: -1.5214091999999937 },
            ]}
          />
        </footprint>
      }
    />
  )
}

export const useCD4051BM96 = createUseComponent(CD4051BM96, pinLabels)
