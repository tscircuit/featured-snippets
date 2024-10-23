import { useSN74LS93N } from "@tsci/seveibar.ttl-counter"
import { useRedLed } from "@tsci/seveibar.red-led"
import { usePushButton } from "@tsci/seveibar.push-button"
import { useUsbC } from "@tsci/seveibar.smd-usb-c"

export default () => {
  const Counter = useSN74LS93N("U1")
  const Button = usePushButton("SW1")
  const Led1 = useRedLed("LED1")
  const Led2 = useRedLed("LED2")
  const Led3 = useRedLed("LED3")
  const Led4 = useRedLed("LED4")
  const UsbC = useUsbC("USBC")

  return (
    <board width="60mm" height="40mm">
      <Counter pcbX={0} pcbY={0} pcbRotation={180} />
      <Button pcbX={-20} pcbY={0} />
      <Led1 pcbX={20} pcbY={15} />
      <Led2 pcbX={20} pcbY={5} />
      <Led3 pcbX={20} pcbY={-5} />
      <Led4 pcbX={20} pcbY={-15} />
      <UsbC pcbX={-20} pcbY={-15} pcbRotation={0} />

      <resistor
        name="R1"
        resistance="330"
        footprint="0603"
        pcbX={15}
        pcbY={15}
        supplierPartNumbers={{
          jlcpcb: ["C23138"],
        }}
      />
      <resistor
        name="R2"
        resistance="330"
        footprint="0603"
        pcbX={15}
        pcbY={5}
        supplierPartNumbers={{
          jlcpcb: ["C23138"],
        }}
      />
      <resistor
        name="R3"
        resistance="330"
        footprint="0603"
        pcbX={15}
        pcbY={-5}
        supplierPartNumbers={{
          jlcpcb: ["C23138"],
        }}
      />
      <resistor
        name="R4"
        resistance="330"
        footprint="0603"
        pcbX={15}
        pcbY={-15}
        supplierPartNumbers={{
          jlcpcb: ["C23138"],
        }}
      />

      <trace from={Counter.VCC} to={".USBC > .pin13"} />
      <trace from={UsbC.GND} to="net.gnd" />
      <trace from=".USBC > .pin13" to=".USBC > .pin14" />
      <trace from={Button.pin3} to={Counter.CKA} />
      <trace from={Button.pin2} to={"net.gnd"} />
      <trace from={Counter.GND} to={"net.gnd"} />

      <trace from={Counter.QA} to=".R1 > .pos" />
      <trace from={Counter.QB} to=".R2 > .pos" />
      <trace from={Counter.QC} to=".R3 > .pos" />
      <trace from={Counter.QD} to=".R4 > .pos" />

      <trace from=".R1 > .neg" to={Led1.pos} />
      <trace from=".R2 > .neg" to={Led2.pos} />
      <trace from=".R3 > .neg" to={Led3.pos} />
      <trace from=".R4 > .neg" to={Led4.pos} />

      <trace from={Led1.neg} to={"net.gnd"} />
      <trace from={Led2.neg} to={"net.gnd"} />
      <trace from={Led3.neg} to={"net.gnd"} />
      <trace from={Led4.neg} to={"net.gnd"} />
    </board>
  )
}
