import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
 
export const appRouter =  router ({
  authCallback : publicProcedure.query(async ()=>{
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    //check if the user is in database

    if(!user?.id ||!user.email) throw new TRPCError({code:'UNAUTHORIZED'})

    return {success:true}
  })
  // ...
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;