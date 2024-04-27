import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const FoodType = ({
  title,
  imgUrl,
  from,
  onClick,
}: {
  title: string;
  imgUrl: string;
  from: "category_grid" | "category_scroll";
  onClick: () => void;
}) => {
  return (
    <Card
      className={cn(
        "group w-[45vw] md:w-[20vw] lg:w-[15vw] flex flex-col items-center hover:bg-orange-500  transition-all",
        from === "category_grid" && "w-[75vw] lg:w-[23vw]"
      )}
      onClick={() => {
        if (from === "category_scroll") {
          onClick();
        }
      }}
    >
      <CardHeader className="flex items-center gap-[0.5rem]">
        <Image
          src={imgUrl}
          alt={title}
          width={100}
          height={150}
          className="aspect-square object-cover rounded-sm"
        />
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-[2rem] bg-orange-500 h-[0.1rem] group-hover:bg-white group-hover:w-[5rem] transition-all" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" onClick={onClick}>
          <ChevronRight className="bg-orange-400 rounded-full text-white " />
        </Button>
      </CardFooter>
    </Card>
  );
};
