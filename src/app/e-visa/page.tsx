import Image from "next/image";
import React from "react";

import travelGuideImage2 from "../../../public/image/page-3-pic-1.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function page() {
  return (
    <section className="relative text-black py-[10vh] px-[5%] fullHdMinWidth:px-[10%]">
      <div className="absolute inset-0 w-full h-[25rem] desktopMinWidth:h-[30rem]">
        <Image
          src={travelGuideImage2}
          alt="pic"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="w-full min-h-[80vh] pt-[23rem] flex gap-10 flex-col justify-start desktopMinWidth:pt-[28rem]">
        <h1 className="text-2xl w-full text-center font-bold">
          Applying for Indonesian Visa is Faster and Easier with e-Visa
        </h1>
        <p className="text-base flex flex-col gap-5">
          <span>
            To prevent the spread of COVID-19 transmission, the Indonesian
            government is continuously leveraging innovative responses such as
            the introduction of digital public services. The Indonesian Ministry
            of Law and Human Rights has launched an electronic visa (e-Visa)
            application system aimed to provide ease of access, especially
            during the pandemic.
          </span>
          <span>
            The e-Visa application system will also facilitate future foreign
            tourists who wish to visit Indonesia after the pandemic, making a
            positive impact on the development of tourism and creative economy
            of Indonesia. In the meantime, safe tourist destinations are being
            prepared in compliance with health protocols.
          </span>

          <span>
            With the launch of this service, foreigners no longer need to visit
            the Republic of Indonesia Representative out of the country or the
            Immigration Office in the country to get a visa sticker on their
            passport. To enter Indonesia, they just need to apply for a visa
            online via this e-Visa application system.
          </span>
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className="font-bold w-full text-center text-xl">
                The steps to apply for the Indonesian e-Visa are as follows:
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="flex w-full flex-col gap-5 desktopMinWidth:text-center">
                <span>
                  - Visit official web Indonesia Imigration just click
                  <Link
                    href={" https://visa-online.imigrasi.go.id/"}
                    target="_blank"
                  >
                    <span className="font-bold underline"> here</span>
                  </Link>
                </span>

                <span>
                  - Enter data and upload required documents (individual/
                  corporation)
                </span>

                <span>
                  - Wait for the email notification which contains the username
                  and password
                </span>

                <span>- Log in using the username and password</span>

                <span>
                  - Select the type of visa you wish to apply for, enter data,
                  and upload required documents
                </span>

                <span>
                  - Make PNBP payments (Make sure the data and documents are
                  correct. If the application is rejected, the payment shall not
                  be refunded)
                </span>

                <span>
                  - If the application is approved, a notification will be sent
                  via email
                </span>
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="flex flex-col gap-5">
          <span>
            The application for e-Visa can be submitted from wherever the
            applicant is. The verification process will be quick, which is 3
            (two) - 5 (five) working days, and then the visa will be sent to the
            applicant. In order to cut bureaucratic procedures, the applicant
            and the guarantor will not be required to appear in person and the
            visa will be sent directly via email. Once the foreign citizens
            (WNA) receive their e-Visa, they can immediately travel to
            Indonesia.
          </span>

          <span>
            The ease of applying for an Indonesian visa will play an important
            role to facilitate the post-pandemic recovery of tourism and
            creative economy sectors. With this innovation, the number of
            tourists visiting Indonesian destinations is expected to grow after
            the pandemic.
          </span>
        </p>
      </div>
    </section>
  );
}
