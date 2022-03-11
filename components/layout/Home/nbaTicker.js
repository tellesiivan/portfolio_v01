import Ticker from "react-ticker";

export default function NbaTicker() {
  return (
    <Ticker direction={"toRight"}>
      {({ index }) => (
        <>
          <h1 className="pr-2 text-text-white">
            This is the Headline of element #{index}!
          </h1>
        </>
      )}
    </Ticker>
  );
}
