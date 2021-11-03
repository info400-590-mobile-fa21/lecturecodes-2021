import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width:"100%",
    height:"100%",
    backgroundColor: '#EAEAEA',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40
  },icon:{
    width:20,
    height:20
  },addPanel:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  },button: {
    alignItems: "center",
    backgroundColor: "#EAEAEA",
  },input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 2,
    padding: 3,
    margin: 5,
  },cityPanel:{
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 3,
    margin: 5,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
  }, innerView:{
    width:"70%"
  }
});