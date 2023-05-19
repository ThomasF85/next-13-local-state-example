import StoreInitializer from "@/lib/StoreInitializer";
import fetchArtPieces from "@/lib/fetchArtPieces";
import { randomIndex } from "@/lib/randomIndex";
import Spotlight from "@/components/Spotlight";
import useStore from "@/lib/useStore";

export default async function Home() {
  const pieces = await fetchArtPieces();
  const spotlightPiece = pieces[randomIndex(pieces.length)];

  // Setting the state to the server store
  useStore.setState({ pieces });

  return (
    <>
      {/* StoreInitializer is setting the state to the client store*/}
      <StoreInitializer state={{ pieces }} />
      <h1>Random Art Piece</h1>
      <Spotlight piece={spotlightPiece} />
    </>
  );
}
