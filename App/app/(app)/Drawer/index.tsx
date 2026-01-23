import React from "react";
import DrawerContainer from "../../../Components/DrawerContainer";
import DriverHome from "../../../Components/Home/DriverHome";
import UserHome from "../../../Components/Home/UserHome";

const Index = () => {
  return (
    <DrawerContainer title="Dashboard">
      <DriverHome />
      {/* <UserHome /> */}
    </DrawerContainer>
  );
};

export default Index;
