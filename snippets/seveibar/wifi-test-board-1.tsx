import { useESP32_S3_MINI_1_N8 } from "@tsci/seveibar.esp32-s3-mini-1-n8"
import { useUsbC } from "@tsci/seveibar.smd-usb-c"

export default () => {
  const Usb = useUsbC("USB")
  const Esp32 = useESP32_S3_MINI_1_N8("U1")
  return (
    <board width="100mm" height="100mm">
      <Usb pcbY={-20} />
      <Esp32  />
    </board>
  )
}