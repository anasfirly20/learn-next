import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <div>
        hello{" "}
        {session && <span className="text-white">{session.user?.name}</span>}
      </div>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
