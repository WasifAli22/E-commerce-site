import {createClient} from "next-sanity"

export const client= createClient({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token:process.env.SANITY_ACCESS_TOKEN,
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-06-03"
})