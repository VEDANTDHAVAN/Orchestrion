import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requireAuth();
  
    return (
        <p>executions Page</p>
    );
};

export default Page;