import Image from 'next/image';

import spinnerLoading from '../../../../public/svg/spinner.svg';

export default function loading() {
  return (
    <div className="relative w-full h-screen flex flex-row justify-center items-center gap-5">
      <Image src={spinnerLoading} alt="loading" width={50} height={50} />
      <p className="text-xl">memuat halaman ....</p>
    </div>
  );
}
