import { Roboto, Montserrat, Poppins } from "next/font/google";

const poppinsFontRegular400 = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

export { poppinsFontRegular400, montserrat, roboto };
