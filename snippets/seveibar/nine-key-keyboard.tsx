import { SmdDiode } from "@tsci/seveibar.SmdDiode"
import { Key } from "@tsci/seveibar.Key"
import { Pico2 } from "@tsci/seveibar.pico2"

function grid(opts: {
  sizeX: number
  sizeY: number
  pitch: number
  offset?: { x: number; y: number }
}): Array<{ x: number; y: number; row: number; col: number }> {
  const { sizeX, sizeY, pitch, offset = { x: 0, y: 0 } } = opts
  const points: Array<{ x: number; y: number; row: number; col: number }> = []
  const startX = (-(sizeX - 1) * pitch) / 2
  const startY = (-(sizeY - 1) * pitch) / 2
  for (let row = 0; row < sizeY; row++) {
    for (let col = 0; col < sizeX; col++) {
      points.push({
        x: startX + col * pitch + offset.x,
        y: startY + row * pitch + offset.y,
        row,
        col,
      })
    }
  }
  return points
}

const rowToMicroPin = {
  0: "GP0",
  1: "GP1",
  2: "GP2",
}
const colToMicroPin = {
  0: "GP3",
  1: "GP4",
  2: "GP5",
}

export default () => (
  <board width="100mm" height="100mm">
    <Pico2 name="U1" pcbX={-30} />
    {grid({ sizeX: 3, sizeY: 3, pitch: 19.05, offset: { x: 20, y: 0 } }).map(
      ({ x, y, row, col }, index) => (
        <group key={`Kgroup${index}`}>
          <Key pcbX={x} pcbY={y} name={`K${index + 1}`} />
          <SmdDiode
            pcbX={x}
            pcbY={y - 13}
            layer="bottom"
            name={`D${index + 1}`}
          />
          <trace from={`.D${index + 1} .pin1`} to={`.K${index + 1} .pin1`} />
          <trace
            from={`.D${index + 1} .pin2`}
            to={`.U1 .${rowToMicroPin[row]}`}
          />
          <trace
            from={`.K${index + 1} .pin2`}
            to={`.U1 .${colToMicroPin[col]}`}
          />
        </group>
      )
    )}
  </board>
)
