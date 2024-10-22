import { KeyHotSocket } from "@tsci/seveibar.KeyHotSocket"
import { KeyShaftForHotSocket } from "@tsci/seveibar.KeyShaftForHotSocket"

export const Key = (props: { pcbX?: number; pcbY?: number; name: string }) => {
  props.pcbX ??= 0
  props.pcbY ??= 0
  return (
    <group>
      <KeyHotSocket name={props.name} pcbX={props.pcbX} pcbY={props.pcbY} />
      <KeyShaftForHotSocket
        name={`${props.name}_shaft`}
        pcbX={props.pcbX}
        pcbY={props.pcbY - 0.52}
      />
    </group>
  )
}
