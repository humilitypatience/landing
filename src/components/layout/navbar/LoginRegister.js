'use client'
import { useContext } from "react";
import { UserContext } from "../../../app/page";

import HamburgerMenu from "./HamburgerMenu";
import SignInButton from "./SignInButton";
import GetStartedButton from "./GetStartedButton";

const LoginRegister = () => {
  const deviceWidth = useContext(UserContext)
  const content = deviceWidth < 360 ? (<HamburgerMenu />) :
    (<><SignInButton />
      <GetStartedButton /></>)
  return (
    <div className="flex flex-row items-center p-0 gap-[16px] h-full order-2 self-center">
      {content}
    </div>
  )
}

export default LoginRegister