import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VegaLite } from 'react-vega';
import data from './assets/data.json';

const barData = {
  values: [
    {a: "A",b: 20}, {a: "B",b: 34}, {a: "C",b: 55},
    {a: "D",b: 19}, {a: "E",b: 40}, {a: "F",b: 34},
    {a: "G",b: 91}, {a: "H",b: 78}, {a: "I",b: 25}
  ]
};

//a simple chart
const spec = {
    description: "A simple bar chart with embedded data.",
    mark: "square",
    encoding: {
      x: {field: "a", type: "ordinal", title:"data a"},
      y: {field: "b", type: "quantitative", title:"data b"},
    },  
    width: 400,
    height:200,
    data: { name: 'values' },
};

//adding layered information to the chart
// const spec = {
//     mark: "square",
//     encoding: {
//       x: {field: "a", type: "ordinal", title:"data a"},
//       y: {field: "b", type: "quantitative", title:"data b"},
//     },  
//     width: 400,
//     height:200,
//     data: { name: 'values' },
//     layer:[
//       {mark:"bar"},
//       {mark:{
//         type:"text",
//         align:"right",
//         "baseline":"middle",
//         dx:3
//         },
//         encoding:{
//           text:{
//             field:"b",
//             type:"quantitative",
//             format:".2"
//           }
//         }
//       }
//     ], 
// };

// const groupData = {
//   values: [
//     {a: "group1",b: 2}, {a: "group1",b: 7}, {a: "group1",b: 4},
//     {a: "group2",b: 1}, {a: "group2",b: 6}, {a: "group2",b: 2},
//     {a: "group3",b: 8}, {a: "group3",b: 7}, 
//     {a: "group4",b: 3}, {a: "group4",b: 9}, {a: "group4",b: 7}, 
//     {a: "group5",b: 2}, {a: "group5",b: 7}, {a: "group5",b: 8},
//   ]
// };

//a simple chart with aggregated data
// const spec = {
//     mark: "point",
//     encoding: {
//       x: {field: "a", type: "ordinal", title:"data a"},
//       y: {field: "b", type: "quantitative", title:"data b", aggregate:"sum"},
//     },  
//     width: 400,
//     height:200,
//     data: { name: 'values' },
//     layer:[
//       {mark:"point"},
//       {mark:{
//         type:"text",
//         align:"center",
//         "baseline":"middle",
//         dx:3,
//         dy:10
//         },
//         encoding:{
//           text:{
//             field:"b",
//             type:"quantitative",
//             format:".2",
//             aggregate:"sum"
//           }
//         }
//       }
//     ], 
// };

//interactive chart
// const spec = {
//   data: { name: 'values' },
//   width:400,
//   height:200,
//   mark: {
//     type: "bar",
//     fill: "#4C78A8",
//     stroke: "black",
//     cursor: "pointer"
//   },
//   selection: {
//     highlight: {type: "single", empty: "none", on: "mouseover"},
//     select: {type: "multi"}
//   },
  
//   encoding: {
//     x: {field: "a", type: "ordinal"},
//     y: {field: "b", type: "quantitative"},
//     fillOpacity: {
//       condition: {selection: "select", value: 1},
//       value: 0.3
//     },
//     strokeWidth: {
//       condition: [
//         {
//           test: {
//             and: [
//               {selection: "select"},
//               "length(data(\"select_store\"))"
//             ]
//           },
//           value: 2
//         },
//         {selection: "highlight", value: 1}
//       ],
//       value: 0
//     }
//   },
//   config: {
//     scale: {
//       bandPaddingInner: 0.2
//     }
//   }
// }

export default function App() {
  return (
    <View style={styles.container}>
      <VegaLite spec={spec} data = {barData}/>
      {/*<VegaLite spec={spec} data = {groupData}/>*/}
      {/*<VegaLite spec={spec} data = {data}/>*/}
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
