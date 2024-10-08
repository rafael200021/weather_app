import React from "react";

export default function WeatherCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number | undefined;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer items-center p-10 flex gap-4 rounded-lg">
      {icon}
      <div className="flex flex-col">
        <h2 className=" text-[12px] text-gray-500">{title}</h2>
        <p className="text-2xl font-extrabold">{value}</p>
      </div>
    </div>
  );
}
