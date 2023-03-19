import { useContext, useEffect, useState } from "react";
import SignUp from "../components/auth/signup";
import { useRouter } from "next/router";

export default function Register() {
    const [isRegistered, setisRegistered] = useState(false);
    const router = useRouter();
    if(isRegistered) {
        console.log("kuchh kuchh hua hai");
        router.push("/home");
    }

    return (
        <>
            <SignUp isRegistered={isRegistered} setisRegistered={setisRegistered}/>
        </>
    );
}
