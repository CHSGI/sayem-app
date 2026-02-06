import React from "react";
import DrawerContainer from "../../../Components/DrawerContainer";
import DriverHome from "../../../Components/Home/DriverHome";
import UserHome from "../../../Components/Home/UserHome";
import { accountState } from "../../../store/stateStore";

const Index = () => {
  const { role } = accountState();

  return (
    <DrawerContainer title="Dashboard">
      {role === "individual/business" && <UserHome />}
      {role === "driver" && <DriverHome />}
    </DrawerContainer>
  );
};

export default Index;
