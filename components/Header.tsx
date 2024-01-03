import Image from "next/image";
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
function Header() {
  const headerData = [
    {
      name: "Eecutive Courses",
      Subheadings: [
        {
          heading: "Certificate Courses In",
          subHeadings: [
            "Socio-economic Rights Economic Crisis and Legal Doctrine",
            "Managing Health and Social Care Strategies",
            "Understanding Exchange Rate System",
            "Tourism Promotion and Travel Distribution System",
            "Development and Human Resource Management",
            "Human Resource Management And Organisational Strategy, Structure And Culture",
          ],
        },
        {
          heading: "Higher Certificate Courses in",
          subHeadings: [
            "International Financial Crimes",
            "Operations and Information Management for Project Managers",
            "Leading Change in Health and Social Care",
            "International Banking Regulations and Supervision",
            "Managing People in Health and Social Care",
            "Humanistic Therapy",
          ],
        },
      ],
    },
    {
      name: "Diploma Program",
      Subheadings: [
        {
          heading: "Certificate Courses In",
          subHeadings: [
            "Socio-economic Rights Economic Crisis and Legal Doctrine",
            "Managing Health and Social Care Strategies",
            "Understanding Exchange Rate System",
            "Tourism Promotion and Travel Distribution System",
            "Development and Human Resource Management",
            "Human Resource Management And Organisational Strategy, Structure And Culture",
          ],
        },
        {
          heading: "Higher Certificate Courses in",
          subHeadings: [
            "International Financial Crimes",
            "Operations and Information Management for Project Managers",
            "Leading Change in Health and Social Care",
            "International Banking Regulations and Supervision",
            "Managing People in Health and Social Care",
            "Humanistic Therapy",
          ],
        },
      ],
    },
    {
      name: "Accelerated Masters",
      Subheadings: [
        {
          heading: "Certificate Courses In",
          subHeadings: [
            "Socio-economic Rights Economic Crisis and Legal Doctrine",
            "Managing Health and Social Care Strategies",
            "Understanding Exchange Rate System",
            "Tourism Promotion and Travel Distribution System",
            "Development and Human Resource Management",
            "Human Resource Management And Organisational Strategy, Structure And Culture",
          ],
        },
        {
          heading: "Higher Certificate Courses in",
          subHeadings: [
            "International Financial Crimes",
            "Operations and Information Management for Project Managers",
            "Leading Change in Health and Social Care",
            "International Banking Regulations and Supervision",
            "Managing People in Health and Social Care",
            "Humanistic Therapy",
          ],
        },
      ],
    },
    {
      name: "Online Degrees",
      Subheadings: [
        {
          heading: "Certificate Courses In",
          subHeadings: [
            "Socio-economic Rights Economic Crisis and Legal Doctrine",
            "Managing Health and Social Care Strategies",
            "Understanding Exchange Rate System",
            "Tourism Promotion and Travel Distribution System",
            "Development and Human Resource Management",
            "Human Resource Management And Organisational Strategy, Structure And Culture",
          ],
        },
        {
          heading: "Higher Certificate Courses in",
          subHeadings: [
            "International Financial Crimes",
            "Operations and Information Management for Project Managers",
            "Leading Change in Health and Social Care",
            "International Banking Regulations and Supervision",
            "Managing People in Health and Social Care",
            "Humanistic Therapy",
          ],
        },
      ],
    },
  ];
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <header className="flex justify-between px-10 py-5 items-center text-white ">
      {/* Left Hand Side MEW Logo Start*/}
      <div className="sm:relative sm:w-20 sm:h-20 w-10 h-10 hidden sm:block">
        <Image className="object-contain" src="/mew-logo.jpeg" fill alt="mew" />
      </div>
      <Image
        className="object-contain sm:hidden block"
        src="/mew-logo.jpeg"
        alt="mew"
        width={50}
        height={50}
      />
      {/* Left Hand Side MEW Logo End*/}
      {/* Mid Navigation Bar Start*/}
      <nav
        style={{
          boxShadow: "0 0 15px 15px #131b32",
        }}
        className={`sm:relative absolute overflow-x-hidden inset-0 z-20 bg-[#131B32] py-5 ${
          isOpen ? "block" : "hidden"
        } sm:block`}
      >
        <XMarkIcon
          onClick={() => SetIsOpen(false)}
          className="w-14 h-14 text-white sm:hidden block absolute top-10 right-10"
        />
        <ul className="flex sm:h-fit h-full justify-center gap-16 sm:flex-row flex-col sm:gap-4 items-center sm:text-lg text-5xl">
          {headerData.map((data, key) => (
            <li key={key} className="flex gap-1 items-center">
              <Link href="#">{data.name}</Link>
              <ChevronDownIcon className="sm:w-3 sm:h-3 w-14 h-14 text-[#CFE255] " />
            </li>
          ))}
          <div className="sm:hidden flex gap-10">
            <MagnifyingGlassIcon className="w-14 h-14" />
            <UserIcon className="w-14 h-14 " />
          </div>
        </ul>
      </nav>
      {/* Mid Navigation Bar End*/}
      {/* Right Hand Side Login/Search Start*/}
      <div className="sm:flex hidden gap-2">
        <MagnifyingGlassIcon className="w-5 h-5 hover:text-[#CFE255]  transition-colors" />
        <UserIcon className="w-5 h-5 hover:text-[#CFE255] transition-colors" />
      </div>
      <Bars3Icon
        onClick={() => SetIsOpen(true)}
        className="w-14 h-14 sm:hidden text-white"
      />
      {/* Right Hand Side Login/Search End*/}
    </header>
  );
}

export default Header;
