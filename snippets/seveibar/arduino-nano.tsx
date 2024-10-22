// attempt at an arduino uno clone
import { useFT232RL } from "@tsci/seveibar.ft232rl"
import { useATMEGA328P_AU } from "@tsci/seveibar.atmega328p-au"
import { useLM1117IMPX_5_0 } from "@tsci/seveibar.lm1117impx-5-0"

export default () => {
  const U1 = useATMEGA328P_AU("U1")
  const U2 = useLM1117IMPX_5_0("U2")
  const U3 = useFT232RL("U3")

  return (
    <board width="50mm" height="50mm">
      <U1 />
      <U2 pcbX={20} />
      <U3 pcbY={20} />
    </board>
  )
}
