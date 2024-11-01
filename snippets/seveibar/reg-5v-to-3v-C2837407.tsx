import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  pin7: ["pin7", "EP"],
  pin6: ["pin6", "IN"],
  pin5: ["pin5", "PG"],
  pin4: ["pin4", "EN"],
  pin3: ["pin3", "GND"],
  pin2: ["pin2", "FB"],
  pin1: ["pin1", "OUT"],
} as const

interface Props extends CommonLayoutProps {
  name: string
}

export const TPS74601PDRVR = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=c909123e4a7a4da5a0270979fee6c02c&pn=C2837407",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      supplierPartNumbers={{
        lcsc: ["C2837407"],
      }}
      footprint={
        <footprint>
          <smtpad
            portHints={["pin7"]}
            pcbX="0mm"
            pcbY="0mm"
            width="1.5999967999999998mm"
            height="0.9999979999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin6"]}
            pcbX="-0.6500113999999968mm"
            pcbY="0.9751059999999967mm"
            width="0.39999919999999994mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin5"]}
            pcbX="0mm"
            pcbY="0.9751059999999967mm"
            width="0.39999919999999994mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin4"]}
            pcbX="0.6500113999999968mm"
            pcbY="0.9751059999999967mm"
            width="0.39999919999999994mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin3"]}
            pcbX="0.6500113999999968mm"
            pcbY="-0.9751059999999967mm"
            width="0.39999919999999994mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin2"]}
            pcbX="0mm"
            pcbY="-0.9751059999999967mm"
            width="0.39999919999999994mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <smtpad
            portHints={["pin1"]}
            pcbX="-0.6500113999999968mm"
            pcbY="-0.9751059999999967mm"
            width="0.39999919999999994mm"
            height="0.45001179999999996mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -1.0500360000000057, y: -1.0490199999999987 },
              { x: -1.0500360000000057, y: 1.0500360000000057 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 1.0500359999999915, y: -1.0490199999999987 },
              { x: 1.0500359999999915, y: 1.0500360000000057 },
            ]}
          />
        </footprint>
      }
    />
  )
}

export const useTPS74601PDRVR = createUseComponent(TPS74601PDRVR, pinLabels)
