import { useContext, useEffect, useState } from "react";
import LoginScreen from "../components/auth/login";
import { useRouter } from "next/router";


export default function Login() {
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if(isLoggedIn) {
        console.log("kuchh kuchh hua hai");
        router.push("/home");
    }
    return (
        <>
            <LoginScreen  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </>
    );
}
