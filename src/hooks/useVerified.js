import pb from "@/lib/pocketbase";
import { useQuery } from "react-query";

export default function useVerified () {
    const id = pb.authStore.model?.id

    async function checkVerified () {
        const userdata = await pb.collection('users').getOne(id);
        console.log(userdata);
        return userdata.verified;
    }

    return useQuery({queryFn: checkVerified, queryKey: ['check-verified', id]})

}

export async function requestVerification () {
    const email = pb.authStore.model.email
    const res = await pb.collection('users').requestVerification(email)
    if (res) alert("Verification email sent! Check your inbox")
}
