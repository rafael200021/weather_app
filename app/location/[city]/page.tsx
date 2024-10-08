"use client";
import WeatherCard from "@/app/components/WeatherCard";
import { API_KEY } from "@/app/helpers/apikey";
import { IWeather } from "@/app/interfaces/IWeather";
import axios from "axios";
import {
  Cloud,
  CloudRain,
  Gauge,
  LucideThermometer,
  Moon,
  ReceiptText,
  Sun,
  Wind,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const navigate = useRouter();
  const params = useParams();
  const [locationInfo, setLocationInfo] = useState<undefined | IWeather>();

  useEffect(() => {
    axios
      .get(`http://api.weatherapi.com/v1/current.json?q=${params.city}`, {
        headers: {
          key: API_KEY,
        },
      })
      .then((response) => {
        console.log(response.data);

        setLocationInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (locationInfo === undefined) {
    return (
      <div className="text-neutral-900 flex-grow h-full justify-center items-center">
        <h1 className="text-lg font-bold">Loading...</h1>
        <div className="w-full flex mt-10 justify-center items-center">
          <button
            onClick={() => navigate.push("/")}
            className="bg-neutral-900 text-white p-3 rounded font-bold w-40 hover:bg-white border duration-300 border-neutral-900 hover:text-neutral-900"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-neutral-900">
      <div className="flex justify-between items-center   mt-4">
        <div className="flex gap-4 items-center">
          <div>
            <h1 className="text-lg font-bold">{locationInfo?.location.name}</h1>
            <h2 className="text-sm text-gray-500">
              {locationInfo?.location.region} / {locationInfo?.location.country}
            </h2>
          </div>
        </div>
        <div className="flex bg-neutral-900 text-white rounded-full px-4 py-1 items-center gap-4">
          <p className="font-bold">
            {locationInfo?.current.is_day === 1 ? "Day" : "Night"}
          </p>
          {locationInfo?.current.is_day === 1 ? (
            <Sun size={30} />
          ) : (
            <Moon size={30} />
          )}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <WeatherCard
          title="Temperature Celsius"
          icon={<LucideThermometer size={60} />}
          value={locationInfo?.current.temp_c + " °"}
        />
        <WeatherCard
          title="Temperature Fahrenheit"
          icon={<LucideThermometer size={60} />}
          value={locationInfo?.current.temp_f + " °"}
        />
        <WeatherCard
          title="Temperature Feels Like in Celsius"
          icon={<LucideThermometer size={60} />}
          value={locationInfo?.current.feelslike_c + " °"}
        />
        <WeatherCard
          title="Temperature Feels Like in Fahrenheit"
          icon={<LucideThermometer size={60} />}
          value={locationInfo?.current.feelslike_f + " °"}
        />
        <WeatherCard
          title="Wind Miles per hour"
          icon={<Wind size={60} />}
          value={locationInfo?.current.wind_mph + " mph"}
        />
        <WeatherCard
          title="Wind Kilometers per hour"
          icon={<Wind size={60} />}
          value={locationInfo?.current.wind_kph + " kph"}
        />
        <WeatherCard
          title="Pressure Millibars"
          icon={<Gauge size={60} />}
          value={locationInfo?.current.precip_mm + " mm"}
        />
        <WeatherCard
          title="Pressure Inches"
          icon={<Gauge size={60} />}
          value={locationInfo?.current.precip_in + " in"}
        />
        <WeatherCard
          title="Cloud"
          icon={<Cloud size={60} />}
          value={locationInfo?.current.cloud + " %"}
        />
        <WeatherCard
          title="Humidty"
          icon={<CloudRain size={60} />}
          value={locationInfo?.current.humidity + " %"}
        />
        <WeatherCard
          title="UV Index"
          icon={<Sun size={60} />}
          value={locationInfo?.current.uv}
        />
        <WeatherCard
          title="Condition"
          icon={<ReceiptText size={60} />}
          value={locationInfo?.current.condition.text}
        />
      </div>

      <div className="w-full flex mt-10 justify-center items-center">
        <button
          onClick={() => navigate.push("/")}
          className="bg-neutral-900 text-white p-3 rounded font-bold w-40 hover:bg-white border duration-300 border-neutral-900 hover:text-neutral-900"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
