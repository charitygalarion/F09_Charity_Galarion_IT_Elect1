import {SafeAreaView,StyleSheet} from 'react-native';
import ColorChangerApp from './ColorChangerApp.js';
import CounterApp from "./CounterApp.js";
import ChatBox from './ChatBox';
import CommentInput from './CommentInput'

export default function App() {

  return (
    
 <SafeAreaView style={styles.container}>
<CounterApp/>
 <ColorChangerApp />
 <ChatBox/>
 <CommentInput/>
 
 
 </SafeAreaView>
   )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});