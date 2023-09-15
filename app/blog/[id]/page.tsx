import { notFound } from "next/navigation";

type TProps = {
  params: { id: number };
};

export default function PostDetail({ params: { id } }: TProps) {
  if (id > 10) notFound();

  return (
    <div>
      <h1>Post detail: {id}</h1>
    </div>
  );
}
