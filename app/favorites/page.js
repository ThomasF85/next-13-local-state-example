import StoreInitializer from "@/lib/StoreInitializer";
import fetchArtPieces from "@/lib/fetchArtPieces";
import useStore from "@/lib/useStore";
import dynamic from "next/dynamic";

const ClientPage = dynamic(() => import("./ClientPage"), { ssr: false });

export default async function Page() {
  const pieces = await fetchArtPieces();

  // Setting the state to the server store
  useStore.setState({ pieces });

  return (
    <>
      {/* StoreInitializer is setting the state to the client store*/}
      <StoreInitializer state={{ pieces }} />
      <header>
        <h1>Art Pieces</h1>
      </header>
      <ClientPage />
    </>
  );
}
