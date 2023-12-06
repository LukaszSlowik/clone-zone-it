import dynamic from "next/dynamic";

const ComponentWithNoSSR = dynamic(() => import("./navbarNoSSR"), {
  ssr: false,
});
export default ComponentWithNoSSR;
