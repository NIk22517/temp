"use client";
import { categorys } from "@/components/Categorys";
import { FoodType } from "@/components/FoodType";
import { FoodTypeCategory } from "@/components/FoodTypeCategory";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [category, setCategory] = useState<
    {
      id: number;
      title: string;
      img_url: string;
    }[]
  >([]);

  return (
    <div className="w-full p-[1rem]">
      <div className="flex items-center justify-between py-[1rem]">
        <h1 className="font-bold">Menu category</h1>
        <Button
          variant={"ghost"}
          className="flex gap-2"
          onClick={() => {
            router.push("/category");
          }}
        >
          <p>View All</p>
          <ChevronRight className="bg-orange-400 rounded-full text-white " />
        </Button>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[95vw] py-[1rem]"
      >
        <CarouselContent>
          {categorys.map((category) => {
            return (
              <CarouselItem
                key={category.id}
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <FoodType
                  imgUrl={category.img_url}
                  title={category.title}
                  from="category_scroll"
                  onClick={() => {
                    setCategory(category.category);
                  }}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {category.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 pt-[5rem] md:grid-cols-2 place-items-center gap-y-[6rem] md:gap-y-[7rem]">
          {category.map((el) => {
            return <FoodTypeCategory key={el.id} />;
          })}
        </div>
      )}
    </div>
  );
}
