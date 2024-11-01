import { useRedLed } from "@tsci/seveibar.red-led"
import { useTPS74601PDRVR } from "@tsci/seveibar.reg-5v-to-3v-C2837407"
import { useResistor, useCapacitor } from "@tscircuit/core"

export const MyChip = (props: { name: string }) => {
  const PWR1 = useTPS74601PDRVR("PWR1")
  const R6 = useResistor("R6", { resistance: "1M", footprint: "0402" })
  const R7 = useResistor("R7", { resistance: "200k", footprint: "0402" })
  const R8 = useResistor("R8", { resistance: "1k", footprint: "0402" })
  const C6 = useCapacitor("C6", { footprint: "cap0805", capacitance: "10uF" })
  const C7 = useCapacitor("C7", { footprint: "cap0805", capacitance: "10uF" })
  const LED1 = useRedLed("LED1")

  return (
    <group>
      <PWR1
        pcbX={4}
        pcbRotation="90deg"
        EN="net.v5"
        EP="net.gnd"
        IN="net.v5"
        OUT="net.v3_3"
      />
      <R6 pcbX={7} pcbY={-0.5} pin1={PWR1.OUT} pcbRotation="180deg" />
      <R7 pcbX={6} pcbY={1} pcbRotation="90deg" />
      <R8 pcbRotation="180deg" pcbX={7} pcbY={-3} pin1="net.v3_3" />
      <C6 neg="net.gnd" pos="net.v5" />
      <C7 pcbRotation="180deg" pcbX={0} pcbY={-2} pos="net.v3_3" neg="net.gnd" />
      <LED1 pcbX={4} pcbY={-3} neg="net.gnd" pos={R8.pin2} />

      <trace from={PWR1.FB} to={R6.pin2} />
      <trace from={PWR1.FB} to={R7.pin1} />
      <trace from={R7.pin2} to="net.gnd" />
      <trace from={PWR1.GND} to="net.gnd" />
      <trace from={C7.neg} to="net.gnd" />
      <trace from={C7.pos} to="net.v3_3" />
    </group>
  )
}
