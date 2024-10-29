
const range = (min: number, max: number) => {
  const arr = []
  for (let i = min; i <= max; i++ ){
    arr.push(i)
  }
  return arr
}

/**
 * Squeeze a stamp board onto a pcb.
 * ONLY WORKS WITH 1mm STAMP HOLES!!!
 */
export const Stamptie = (props: { name: string, pitch: number, lrHoleCenterDist: number }) => {
  props.pitch = props.pitch ?? 2.54
  props.lrHoleCenterDist = props.lrHoleCenterDist ?? 21
  const pinCount = 40
  const resistors = range(1, 40).map(n => {
    const lrside = (Math.floor(n / 21) - 0.5)*2
    const row = (n > 20 ? 40 - n : n - 1) * props.pitch
    
    return (
      <resistor
        key={`R${n}`}
        name={`R${n}`}
        resistance={0}
        pcbX={lrside * (props.lrHoleCenterDist/2 + 1.2)}
        pcbY={-row + (pinCount/4 - 0.5) * props.pitch}
        footprint="0603"
      />
    )
  })

  return <group>{resistors}</group>
  
}