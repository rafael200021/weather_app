"use client";
import Globe from "@/components/ui/globe";
import { LucideSearch } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const navigate = useRouter();
  return (
    <div>
      <div className="relative h-[600px] ">
        <Globe className="" />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="font-bold text-lg">Choose your location
        </h2>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="bg-gray-100 rounded p-2 focus:outline-none"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <button
            className="bg-neutral-900 text-white p-2 rounded font-bold hover:bg-white border duration-300 border-neutral-900 hover:text-neutral-900"
            onClick={() => {
              navigate.push(`/location/${location}`);
            }}
          >
            <LucideSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
