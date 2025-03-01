"use client";
import Nav from "./_components/NavBar";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Cover } from "@/components/ui/cover";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter,DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export default function Home() {
  const imagesData = [
    {
      quote: "A Good Session At ADC Sirsa With 5 Students And 2 Other Guests",
      name: "Rupawas",
      designation: "At 23 Jan 2025",
      src: "/images/rupawas1.jpeg",
    },
    {
      quote:
        "Visited To Milk Plant Sirss With Proper Mask  & Security Precaution",
      name: "Ding & Panniwala Mota",
      designation: "At 30 Jan 2025",
      src: "/images/ding.jpeg",
    },
    {
      quote:
        "Tour At Gurdev Agro Rice Sheller Musahibwala With 5 Students And 2 Ohter Guests",
      name: "Kanwarpura",
      designation: "At 30 Jan 2025",
      src: "/images/kanwarpura.jpeg",
    },
    {
      quote:
        "Great Session With DEO Sirsa With Respected Guests And 5 Students",
      name: "Bijjuwali & Chautala",
      designation: "At 03 Feb 2025",
      src: "/images/chautala.jpeg",
    },
    {
      quote: "Students Get A Informative Session By ADC Sirsa",
      name: "Baragudha & Madhosinghana",
      designation: "At 06 Feb 2025",
      src: "/images/baragurah.jpeg",
    },
  ];
  const words = `Event Duration: Dec 30, 2024 to Ongoing. Participants: 9th to 11th (Session 2024-25) Top 5 students (including two girls) from each class (based on the previous year’s performance) Only for Government Schools Under Sirsa`;
  const schools = ["PM SHRI GSSS Rupawas", "PM SHRI GSSS Panniwali Mota & Ding", "PM SHRI GSSS Odhan", "PM SHRI GSSS Kharian", "PM SHRI GSSS Kanwarpura", "PM SHRI GSSS Bijjuwali & Chautala", "PM SHRI GSSS Bhuratwala & Talwara Khurd", "PM SHRI GSSS Baragudah & Madhosinghana"]
  return (
    <>
      <Nav />
      <div className="relative lg:block hidden">
        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-slate-800 text-center text-4xl font-bold">
              Event Duration: Dec 30, 2024 to OnGoing Participants: 9th to 11th
              (Session 2024-25) Top 5 students (including 2 girls) from each
              class (based on the previous year’s performance) Only Goverment
              Schools Under Sirsa
            </p>
          }
          className="h-[40rem] text-black"
        >
          Event Duration: <span className="text-red-500"> Dec 30, 2024 </span>{" "}
          to <span className="text-red-500"> OnGoing </span>
          Participants: <span className="text-red-500"> 9th </span> to{" "}
          <span className="text-red-500"> 11th </span> (Session 2024-25) Top 5
          students <span className="text-red-500"> (including two girls) </span>{" "}
          from each class (based on the previous year’s performance) Only{" "}
          <span className="text-red-500"> Goverment Schools </span> Under Sirsa
        </MaskContainer>
      </div>
      <div className="relative lg:hidden block">
        <BackgroundBeamsWithCollision>
          <TextGenerateEffect words={words} />
        </BackgroundBeamsWithCollision>
      </div>
      <TracingBeam className="-px-6">
        <div className="font-bold text-2xl p-6 md:tracking-widest lg:tracking-widest">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-teal-500 to-gray-700 text-center mb-10">
            Weekly Schedule Overview
          </h1>
          <div className="space-y-10">
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <span>
                <Cover>Monday & Thursday:</Cover>
              </span>
              <div className="pl-6 border-l-4 border-gray-500 space-y-6 mt-4">
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
                  08:30 AM - 10:00 AM: Waste Management
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-yellow-500 to-red-500">
                  10:00 AM - 10:30 AM: Grievance Camp
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
                  10:30 AM - 10:45 AM: Snacks
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-orange-500 to-red-500">
                  10:45 AM - 11:45 AM: Family Id Process
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500">
                  11:45 AM - 1:00 PM: MGNREGA
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-indigo-500 to-red-500">
                  01:00 PM - 1:30 PM: Lunch
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-teal-500">
                  01:30 PM - 2:30 PM: Land Revenue
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-teal-500 to-yellow-500">
                  02:30 PM - 3:30 PM: Motor Vehicle/SARAL
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-yellow-500 to-red-500">
                  03:30 PM - 4:00 PM: Road Safety
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-red-500 to-yellow-500">
                  04:00 PM - 4:30 PM: DSP Office
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
              <span>
                <Cover>Tuesday & Friday:</Cover>
              </span>
              <div className="pl-6 border-l-4 border-gray-500 space-y-6 mt-4">
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
                  10:00 AM - 11:00 AM: Horticulture Center
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-yellow-500 to-red-500">
                  11:00 AM - 12:00 Noon: Rice Sheller
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
                  12:00 Noon - 1:00 PM: Deepam Industry
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-orange-500 to-red-500">
                  1:00 PM - 2:00 PM: Oil Extraction
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500">
                  2:00 PM - 2:30 PM: Lunch
                </p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-indigo-500 to-red-500">
                  2:30 PM - 4:00 PM: Vita Milk Plant
                </p>
              </div>
            </div>
          </div>
        </div>
      </TracingBeam>
      <AnimatedTestimonials testimonials={imagesData} />
      <div className="justify-center flex items-center p-20 m-10">
      <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Visited PSP Schools</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>PSP Visited</DrawerTitle>
            <DrawerDescription>List Of Schools That Visited to PSP</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 z-1000">
            <ul className="space-y-2">
              {schools.map((school) => (
                <li key={school} className="p-3 border rounded-md hover:bg-muted transition-colors">
                  {school}
                </li>
              ))}
            </ul>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
      </div>
    </>
  );
}
