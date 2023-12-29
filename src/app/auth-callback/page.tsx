import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client";

//next/router only used for nextjs12
const Page = ()=>{
    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get("origin")
    
    const {data, isLoading} = trpc.authCallback.useQuery(undefined,{
        onSuccess:(
            {success}
        )=>{
            if(success){
                //sync data to db
                router.push(origin?`${origin}`:'dashboard')
            }
        }
    })

    

}

export default Page