import dynamic from "next/dynamic";

const DestinationList = dynamic(() => import("./list-destination"), {
  ssr: false, // disables SSR for this component
});

export default DestinationList;
