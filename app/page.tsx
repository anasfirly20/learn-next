import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";

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
      <section className="relative h-screen">
        <Image
          src="https://bit.ly/react-cover"
          alt="Coffee"
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={100}
          priority={true}
        />
      </section>
    </main>
  );
}
