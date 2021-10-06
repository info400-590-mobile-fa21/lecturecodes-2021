import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SectionList } from 'react-native';


const shows = 
[{
  month: 10,
  date: 5,
  title: "Waitress",
},{
  month: 10,
  date: 6,
  title: "Waitress",
},{
  month: 10,
  date: 27,
  title: "Dennis James Hosts Halloween",
},{
  month: 10,
  date: 30,
  title: "Kristin Chenoweth",
},{
  month: 11,
  date: 3, 
  title: "RAIN – A Tribute to The Beatles",
},{
  month: 11,
  date: 7, 
  title: "Bob Dylan \"Rough and Rowdy Ways\" Tour",
},{
  month: 11,
  date: 9, 
  title: "Anastasia",
},{
  month: 11,
  date: 10, 
  title: "Anastasia",
},{
  month: 11,
  date: 14, 
  title: "Potpourri of the Arts in the African American Tradition",
},{
  month: 12,
  date: 4, 
  title: "Chimes of Christmas",
}]

const showsByMonth = 
[{
  month: "October",
  data: ["Waitress","Waitress","Dennis James Hosts Halloween", "Kristin Chenoweth"]
},{
  month: "November",
  data: ["RAIN – A Tribute to The Beatles","Bob Dylan \"Rough and Rowdy Ways\" Tour", "Anastasia", "Anastasia", "Potpourri of the Arts in the African American Tradition"]
},{
  month: "December",
  data: ["Chimes of Christmas"]
}]

      // <SectionList
      //   contentContainerStyle={{ paddingBottom: 100 }}
      //   sections={showsByMonth}
      //   renderItem={({item})=>(<Show title={item}/>)}
      //   keyExtractor={(item, index)=>index}
      //   renderSectionHeader={({section})=>(<Header title={section.month} />)}
      // />

      // <ScrollView bounces StickyHeaderComponent={<Header tilte="SHOW"/>}>
      //   {shows.map(item=><Show title={item.title}/>)}
      //   </ScrollView>
      //         <FlatList
      //   contentContainerStyle={{ paddingBottom: 100 }}
      //   data={shows}
      //   renderItem={({item})=>(<Show title={item.title}/>)}
      //   keyExtractor={(item, index)=>index.toString()}
      //   inverted={true}
      // />

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
    </View>
  );
}

function Show(props){
  return(
    <View style={styles.show}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
    )
}

function Header(props){
  return(
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },show:{
    // width: "80%",
    borderWidth:1,
    margin: 5,
    padding: 5,
  },header:{
    backgroundColor:"skyblue",
    width: "80%",
    // borderWidth:1,
    margin: 5,
    padding: 5,
  },text:{
    fontSize: 28,
  }
});
