import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import StackContainer from "../../../../Components/StackContainer";
import tw from "../../../../tailwind.config";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../../../../Components/CustomButton";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import Popup from "../../../../Components/Popup";
import { Image } from "expo-image";

const Sv = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [showModal, setShowModal] = useState(false);
  const [captured, setCaptured] = useState<boolean>(false);
  const [uri, setUri] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  // if (!permission) {
  //   // Camera permissions are still loading.
  //   return (
  //     <Popup showModal={false}>
  //       <View style={tw`p-5 flex flex-col gap-4`}>
  //         <Text style={tw`font-Regular text-xs`}>
  //           We need your permission to show the camera
  //         </Text>
  //         <CustomButton onPress={requestPermission} title="Grant permission" />
  //       </View>
  //     </Popup>
  //   );
  // }

  // if (!permission.granted) {
  //   // Camera permissions are not granted yet.
  //   return (
  //     <Popup showModal={false}>
  //       <View style={tw`p-5 flex flex-col gap-4`}>
  //         <Text style={tw`font-Regular text-xs`}>
  //           We need your permission to show the camera
  //         </Text>
  //         <CustomButton onPress={requestPermission} title="Grant permission" />
  //       </View>
  //     </Popup>
  //   );
  // }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  const takePicture = async () => {
    const photo = await cameraRef.current?.takePictureAsync({
      isImageMirror: false,
    });
    console.log(photo);
    if (photo?.uri) {
      setUri(photo.uri);
    }
    setCaptured(true);
  };
  return (
    <StackContainer
      title="Selfie Verification"
      desc="Take a live photo to match your ID"
    >
      <ScrollView style={tw`p-5`} showsVerticalScrollIndicator={false}>
        <View style={tw`p-5 bg-white rounded-lg shadow-lg `}>
          <Text style={tw`font-SemiBold text-primary text-lg`}>
            Selfie Verification
          </Text>
          <Text style={tw`font-Regular text-xs`}>
            Make sure your face is clearly visible
          </Text>
          <View
            style={tw`flex flex-row gap-4 items-center my-5 p-4 rounded-xl border border-neutral-200`}
          >
            <AntDesign name="camera" size={24} color={tw.color("gray-500")} />
            <View>
              <Text style={tw`font-Regular text-xs leading-5`}>
                &bull; Remove glasses and face covering {"\n"}
                &bull; Ensure good lighting {"\n"}
                &bull; Look directly at the camera {"\n"}
                &bull; Keep a neutral expression {"\n"}
              </Text>
            </View>
          </View>
          <View style={tw`my-4 border gap-4 border-neutral-200 rounded-xl p-4`}>
            <View style={tw`flex items-center gap-2`}>
              <AntDesign name="camera" size={24} color={tw.color("gray-500")} />
              <Text style={tw`font-Regular text-gray-500 text-xs text-center`}>
                Position your face in the frame
              </Text>
            </View>
            <CustomButton
              title="Take Selfie"
              icon={
                <AntDesign
                  name="camera"
                  size={20}
                  color={tw.color("white")}
                  style={tw``}
                />
              }
              onPress={() => setShowModal(true)}
            />
          </View>
        </View>
      </ScrollView>
      {/* popup camera permission */}
      <Popup showModal={showModal}>
        {(!permission || !permission.granted) && (
          <View style={tw`p-5 flex flex-col gap-4 rounded-xl bg-white`}>
            <AntDesign
              name="camera"
              size={24}
              color={tw.color("gray-500")}
              style={tw`mx-auto`}
            />
            <Text style={tw`font-Regular text-xs text-center`}>
              We need your permission to {"\n"}show the camera
            </Text>
            <View>
              <CustomButton
                onPress={requestPermission}
                title="Grant permission"
              />
            </View>
          </View>
        )}
        {/* camera page view  */}
        {permission && permission.granted && (
          <View style={tw`flex-1 items-center justify-center`}>
            {/* switch camera button  */}
            <TouchableOpacity
              style={tw`h-16 w-16 flex items-center justify-center bg-primary rounded-full p-4 absolute top-8 right-0`}
              onPress={toggleCameraFacing}
            >
              <MaterialIcons
                name="cameraswitch"
                size={26}
                color={tw.color("white")}
              />
            </TouchableOpacity>
            {/*  cancel camera button  */}
            <TouchableOpacity
              style={tw`h-16 w-16 flex items-center justify-center bg-primary rounded-full p-4 absolute top-8 left-0`}
              onPress={() => setShowModal(false)}
            >
              <FontAwesome5 name="times" size={26} color={tw.color("white")} />
            </TouchableOpacity>
            {/* camera view  */}
            <View
              style={tw`w-${width * 0.22} h-${
                height * 0.12
              } rounded-xl overflow-hidden`}
            >
              {!captured ? (
                <CameraView
                  facing={facing}
                  ref={cameraRef}
                  style={tw`w-full h-full flex-1`}
                />
              ) : (
                <Image
                  source={{ uri: uri ?? "" }}
                  contentFit="contain"
                  style={tw`w-full h-full flex-1`}
                />
              )}
            </View>
            {/* capture actions */}
            <View style={tw`min-h-40 mt-5 justify-end`}>
              {!captured ? (
                <TouchableOpacity
                  style={tw`bg-primary rounded-full p-6`}
                  onPress={takePicture}
                >
                  <MaterialIcons
                    name="camera-alt"
                    size={30}
                    color={tw.color("white")}
                  />
                </TouchableOpacity>
              ) : (
                <View style={tw`gap-7`}>
                  <TouchableOpacity
                    style={tw`w-20 h-20 flex items-center justify-center bg-gray-500 rounded-full mx-auto`}
                    onPress={() => {
                      setCaptured(false);
                      setUri(null);
                    }}
                  >
                    <MaterialIcons
                      name="refresh"
                      size={40}
                      color={tw.color("white")}
                    />
                  </TouchableOpacity>
                  <View>
                    <CustomButton
                      title="Cancel"
                      onPress={() => setShowModal(false)}
                    />
                  </View>
                  <CustomButton
                    title="Submit for Review"
                    onPress={() => setShowModal(false)}
                  />
                </View>
              )}
            </View>
          </View>
        )}
      </Popup>
    </StackContainer>
  );
};

export default Sv;
