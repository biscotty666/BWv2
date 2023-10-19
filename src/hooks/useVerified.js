import { useEffect, useState } from "react";


export default function useVerified () {
    const [isVerified, setIsVerified] = useState(false)

    useEffect(() => {}, [])

    return { isVerified }
}