import Portfolio from "./component/Home";
import LenisProvider from "./LenisProvider";

export default function Home() {
  return (
    <>
      <LenisProvider>
      <Portfolio />
    </LenisProvider>
    </>
  );
}
