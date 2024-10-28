import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "1": "GND",
  "2": "GND",
  "3": "3V3",
  "4": "IO0",
  "5": "IO1",
  "6": "IO2",
  "7": "IO3",
  "8": "IO4",
  "9": "IO5",
  "10": "IO6",
  "11": "IO7",
  "12": "IO8",
  "13": "IO9",
  "14": "IO10",
  "15": "IO11",
  "16": "IO12",
  "17": "IO13",
  "18": "IO14",
  "19": "IO15",
  "20": "IO16",
  "21": "IO17",
  "22": "IO18",
  "23": "IO19",
  "24": "IO20",
  "25": "IO21",
  "26": "IO26",
  "27": "IO47",
  "28": "IO33",
  "29": "IO34",
  "30": "IO48",
  "31": "pin31",
  "32": "pin32",
  "33": "pin33",
  "34": "pin34",
  "35": "pin35",
  "36": "pin36",
  "37": "pin37",
  "38": "pin38",
  "39": "pin39",
  "40": "pin40",
  "41": "pin41",
  "42": "pin42",
  "43": "pin43",
  "44": "pin44",
  "45": "pin45",
  "46": "pin46",
  "47": "pin47",
  "48": "pin48",
  "49": "pin49",
  "50": "pin50",
  "51": "pin51",
  "52": "pin52",
  "53": "pin53",
  "54": "pin54",
  "55": "pin55",
  "56": "pin56",
  "57": "pin57",
  "58": "pin58",
  "59": "pin59",
  "60": "pin60",
  "61": "GND",
} as const
const pinNames = Object.values(pinLabels)

interface Props extends CommonLayoutProps {
  name: string
}

export const ESP32_S3_MINI_1_N8 = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/download?uuid=1270b5cf7aa247fc9d0ae79a19686940&pn=C2913206",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={pinLabels}
      schPinSpacing={0.75}
      schPortArrangement={{
        leftSide: {
          direction: "top-to-bottom",
          pins: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          ],
        },
        rightSide: {
          direction: "bottom-to-top",
          pins: [
            60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44,
            43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31,
          ],
        },
      }}
      supplierPartNumbers={{
        lcsc: ["C2913206"],
      }}
      footprint={
        <footprint>
          <smtpad
            portHints={["1"]}
            pcbX="-6.975094000000013mm"
            pcbY="5.950076999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["2"]}
            pcbX="-6.975094000000013mm"
            pcbY="5.10019299999999mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["3"]}
            pcbX="-6.975094000000013mm"
            pcbY="4.250054999999975mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["4"]}
            pcbX="-6.975094000000013mm"
            pcbY="3.4001710000000003mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["5"]}
            pcbX="-6.975094000000013mm"
            pcbY="2.550032999999985mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["6"]}
            pcbX="-6.975094000000013mm"
            pcbY="1.7001489999998967mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["7"]}
            pcbX="-6.975094000000013mm"
            pcbY="0.8500109999998813mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["8"]}
            pcbX="-6.975094000000013mm"
            pcbY="0.0001269999999067295mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["9"]}
            pcbX="-6.975094000000013mm"
            pcbY="-0.8497570000000678mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["10"]}
            pcbX="-6.975094000000013mm"
            pcbY="-1.6998950000000832mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["11"]}
            pcbX="-6.975094000000013mm"
            pcbY="-2.5497790000001714mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["12"]}
            pcbX="-6.975094000000013mm"
            pcbY="-3.399917000000073mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["13"]}
            pcbX="-6.975094000000013mm"
            pcbY="-4.249801000000048mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["14"]}
            pcbX="-6.975094000000013mm"
            pcbY="-5.099939000000063mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["15"]}
            pcbX="-6.975094000000013mm"
            pcbY="-5.949823000000038mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["16"]}
            pcbX="-5.949950000000058mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["17"]}
            pcbX="-5.1000660000000835mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["18"]}
            pcbX="-4.249928000000068mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["19"]}
            pcbX="-3.4000440000000935mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["20"]}
            pcbX="-2.549906000000078mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["21"]}
            pcbX="-1.7000220000001036mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["22"]}
            pcbX="-0.8498839999999745mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["23"]}
            pcbX="0mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["24"]}
            pcbX="0.8498839999999745mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["25"]}
            pcbX="1.70002199999999mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["26"]}
            pcbX="2.5499059999999645mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["27"]}
            pcbX="3.40004399999998mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["28"]}
            pcbX="4.249927999999954mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["29"]}
            pcbX="5.10006599999997mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["30"]}
            pcbX="5.949949999999944mm"
            pcbY="-7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["31"]}
            pcbX="6.975094000000013mm"
            pcbY="-5.949823000000038mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["32"]}
            pcbX="6.975094000000013mm"
            pcbY="-5.099939000000063mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["33"]}
            pcbX="6.975094000000013mm"
            pcbY="-4.249801000000048mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["34"]}
            pcbX="6.975094000000013mm"
            pcbY="-3.399917000000073mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["35"]}
            pcbX="6.975094000000013mm"
            pcbY="-2.5497790000001714mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["36"]}
            pcbX="6.975094000000013mm"
            pcbY="-1.6998950000000832mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["37"]}
            pcbX="6.975094000000013mm"
            pcbY="-0.8497570000000678mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["38"]}
            pcbX="6.975094000000013mm"
            pcbY="0.0001269999999067295mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["39"]}
            pcbX="6.975094000000013mm"
            pcbY="0.8500109999998813mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["40"]}
            pcbX="6.975094000000013mm"
            pcbY="1.7001489999998967mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["41"]}
            pcbX="6.975094000000013mm"
            pcbY="2.550032999999985mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["42"]}
            pcbX="6.975094000000013mm"
            pcbY="3.4001710000000003mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["43"]}
            pcbX="6.975094000000013mm"
            pcbY="4.250054999999975mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["44"]}
            pcbX="6.975094000000013mm"
            pcbY="5.10019299999999mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["45"]}
            pcbX="6.975094000000013mm"
            pcbY="5.950076999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["46"]}
            pcbX="5.949949999999944mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["47"]}
            pcbX="5.10006599999997mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["48"]}
            pcbX="4.249927999999954mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["49"]}
            pcbX="3.40004399999998mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["50"]}
            pcbX="2.5499059999999645mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["51"]}
            pcbX="1.70002199999999mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["52"]}
            pcbX="0.8498839999999745mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["53"]}
            pcbX="0mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["54"]}
            pcbX="-0.8498839999999745mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["55"]}
            pcbX="-1.7000220000001036mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["56"]}
            pcbX="-2.549906000000078mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["57"]}
            pcbX="-3.4000440000000935mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["58"]}
            pcbX="-4.249928000000068mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["59"]}
            pcbX="-5.1000660000000835mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["60"]}
            pcbX="-5.949950000000058mm"
            pcbY="7.025004999999965mm"
            width="0.39999919999999994mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="-6.999986000000149mm"
            pcbY="7.000113000000056mm"
            width="0.7999983999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="6.999986000000035mm"
            pcbY="7.000113000000056mm"
            width="0.7999983999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="-6.999986000000149mm"
            pcbY="-6.999859000000129mm"
            width="0.7999983999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="6.999986000000035mm"
            pcbY="-6.999859000000129mm"
            width="0.7999983999999999mm"
            height="0.7999983999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="-1.6499840000000177mm"
            pcbY="1.6501109999999244mm"
            width="1.1999975999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="0mm"
            pcbY="1.6501109999999244mm"
            width="1.1999975999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="1.649983999999904mm"
            pcbY="1.6501109999999244mm"
            width="1.1999975999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="-1.6499840000000177mm"
            pcbY="0.0001269999999067295mm"
            width="1.1999975999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="0mm"
            pcbY="0.0001269999999067295mm"
            width="1.1999975999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="1.649983999999904mm"
            pcbY="0.0001269999999067295mm"
            width="1.1999975999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="-1.6499840000000177mm"
            pcbY="-1.6498569999999972mm"
            width="1.1999975999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="0mm"
            pcbY="-1.6498569999999972mm"
            width="1.1999975999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <smtpad
            portHints={["GND"]}
            pcbX="1.649983999999904mm"
            pcbY="-1.6498569999999972mm"
            width="1.1999975999999999mm"
            height="1.1999975999999999mm"
            shape="rect"
          />
          <silkscreenpath
            route={[
              { x: -4.8999902000000475, y: 12.100128199999858 },
              { x: -3.3999932000001536, y: 12.100128199999858 },
              { x: -3.3999932000001536, y: 10.500131399999987 },
              { x: -1.1999976000000743, y: 10.500131399999987 },
              { x: -1.1999976000000743, y: 12.100128199999858 },
              { x: 0.9999979999998914, y: 12.100128199999858 },
              { x: 0.9999979999998914, y: 10.500131399999987 },
              { x: 3.1999935999999707, y: 10.500131399999987 },
              { x: 3.1999935999999707, y: 12.100128199999858 },
              { x: 5.300014799999872, y: 12.100128199999858 },
              { x: 5.300014799999872, y: 9.400133600000004 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -6.50001240000006, y: 9.400133600000004 },
              { x: -6.50001240000006, y: 12.100128199999858 },
              { x: -4.8999902000000475, y: 12.100128199999858 },
              { x: -4.8999902000000475, y: 9.400133600000004 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -7.70001000000002, y: 7.749743199999898 },
              { x: 7.800009799999998, y: 7.749743199999898 },
              { x: 7.800009799999998, y: 7.786014399999885 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -7.70001000000002, y: 12.800126800000044 },
              { x: 7.800009799999998, y: 12.800126800000044 },
              { x: 7.800009799999998, y: -7.6998830000001135 },
              { x: -7.70001000000002, y: -7.6998830000001135 },
              { x: -7.70001000000002, y: 12.800126800000044 },
            ]}
          />
        </footprint>
      }
    />
  )
}

export const useESP32_S3_MINI_1_N8 = createUseComponent(
  ESP32_S3_MINI_1_N8,
  pinNames
)
