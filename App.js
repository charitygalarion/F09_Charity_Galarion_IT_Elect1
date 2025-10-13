import React from "react";
import { KeyboardAvoidingView, Platform,Image,ScrollView } from "react-native";
import ColorChangerApp from "./ColorChangerApp";
import CounterApp from "./CounterApp";
import ChatBox from "./ChatBox";
import CommentInput from "./CommentInput"
import ChatBubble from "./ChatBubble";
import CommentSect from "./CommentSect";

export default function App() {
  return (
    
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
    
      <ColorChangerApp/>
      <CounterApp/>
      <ChatBox/>
      <CommentInput/>
      <ChatBubble/>
      <CommentSect/>
    </KeyboardAvoidingView>
  
  );
}