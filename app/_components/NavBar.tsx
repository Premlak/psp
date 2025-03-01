"use client";
import * as React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import ColourfulText from '../../components/ui/colourful-text';
export default function Nav() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex justify-between shadow-2xl shadow-teal-300 dark:shadow-red-950 min-h-20 items-center">
      <Button
        variant="outline"
        size={"lg"}
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
        className="p-3 text-lg ml-3 "
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </Button>
      <div className="py-4 text-5xl tracking-widest ml-3">
        <ColourfulText text="PSP"/>
</div>

      <div className="me-3">
      <HoverBorderGradient
        containerClassName="rounded-full cursor-pointer"
        as="button"
        onClick={()=> {toast("Sikandar Sir Will Add This Action")}}
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>FeedBack</span>
      </HoverBorderGradient>
      </div>
    </div>
  );
}
