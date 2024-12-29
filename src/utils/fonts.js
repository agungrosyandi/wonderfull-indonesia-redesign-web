import { Roboto, Montserrat, Poppins, ADLaM_Display } from "next/font/google";

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

const ADLam = ADLaM_Display({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

export { poppinsFontRegular400, montserrat, roboto, ADLam };
