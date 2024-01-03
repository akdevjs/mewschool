import Image from "next/image";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
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

  return (
    <header className="flex justify-between px-10 py-5 items-center text-white">
      {/* Left Hand Side MEW Logo Start*/}
      <div className="relative sm:w-20 sm:h-20 w-10 h-10">
        <Image src="/mew-logo.jpeg" fill alt="mew" />
      </div>

      {/* Left Hand Side MEW Logo End*/}
      {/* Mid Navigation Bar Start*/}
      <nav>
        <ul className="flex gap-4 items-center">
          {headerData.map((data, key) => (
            <li key={key} className="flex gap-1 items-center">
              <Link href="#">{data.name}</Link>
              <ChevronDownIcon className="w-3 h-3 text-[#CFE255]" />
            </li>
          ))}
        </ul>
      </nav>
      {/* Mid Navigation Bar End*/}
      {/* Right Hand Side Login/Search Start*/}
      <div className="flex gap-2">
        <MagnifyingGlassIcon className="w-5 h-5" />
        <UserIcon className="w-5 h-5 text-[#CFE255]" />
      </div>

      {/* Right Hand Side Login/Search End*/}
    </header>
  );
}

export default Header;
