import { View, Text, Modal } from "react-native";
import React from "react";
import tw from "../tailwind.config";

const Popup = (props: { showModal: boolean; children: React.ReactNode }) => {
  return (
    <Modal animationType="slide" visible={props.showModal} transparent={true}>
      <View style={tw`flex-1 bg-gray-500/70 items-center justify-center`}>
        {props.children}
      </View>
    </Modal>
  );
};

export default Popup;
