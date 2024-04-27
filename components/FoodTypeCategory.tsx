import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

import Image from "next/image";

export const FoodTypeCategory = () => {
  return (
    <Card
      className={
        "group w-[80vw] lg:w-[30vw] md:w-[40vw] flex flex-col items-center hover:bg-orange-800  transition-all relative"
      }
    >
      <Image
        src={
          "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        width={150}
        height={150}
        alt="hello"
        className="rounded-[50%] aspect-square absolute top-[-25%]  group-hover:animate-spin-slow transition-all"
      />
      <CardHeader className=" w-full h-[30vh] flex justify-end items-start">
        <CardTitle className="group-hover:text-white">title</CardTitle>
        <div className="flex group-hover:text-white">
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </div>
      </CardHeader>

      <CardFooter className="w-full flex items-start group-hover:text-white">
        <h1>Price:-</h1>
        <h1>999</h1>
      </CardFooter>
    </Card>
  );
};
