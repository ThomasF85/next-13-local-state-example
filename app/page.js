import fetchArtPieces from "@/lib/fetchArtPieces";
import SpotlightPage from "./SpotlightPage";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <h1>Random Art Piece</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
      </Suspense>
    </>
  );
}

async function PageContent() {
  const pieces = await fetchArtPieces();

  return <SpotlightPage pieces={pieces} />;
}
