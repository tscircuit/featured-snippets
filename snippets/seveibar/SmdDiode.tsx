import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"


interface Props extends CommonLayoutProps {
  name: string
}

export const SmdDiode = (props: Props) => {
  return (
    <chip
      {...props}
      footprint={
        <footprint>
          <smtpad
            portHints={["1"]}
            pcbX="-1.1725910000000113mm"
            pcbY="0mm"
            width="0.9999979999999999mm"
            height="0.7500112mm"
            shape="rect"
          />
          <smtpad
            portHints={["2"]}
            pcbX="1.1725910000000113mm"
            pcbY="0mm"
            width="0.9999979999999999mm"
            height="0.7500112mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: 0.9012427999999773, y: -0.726211400000011 },
              { x: 0.9012427999999773, y: -0.5199887999999646 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9012427999999773, y: 0.726211400000011 },
              { x: 0.9012427999999773, y: 0.5299964000000728 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8512047999998913, y: 0.726211400000011 },
              { x: 0.9012427999999773, y: 0.726211400000011 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.8512047999998913, y: -0.726211400000011 },
              { x: 0.9012427999999773, y: -0.726211400000011 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.44676059999994777, y: 0.726211400000011 },
              { x: -0.44676059999994777, y: -0.726211400000011 },
            ]}
          />
        </footprint>
      }
      supplierPartNumbers={{
        jlcpcb: ["C57759"]
      }}
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=973acf8a660c48b1975f1ba1c890421a&pn=C57759",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      schPinSpacing={0.75}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [1],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [2],
        },
      }}
    />
  )
}
