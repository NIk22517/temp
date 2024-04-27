"use client";
import { categorys } from "@/components/Categorys";
import { FoodType } from "@/components/FoodType";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Category = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full p-[1rem]">
      <div className="flex gap-[0.5rem] items-center pl-[1rem] pb-[1rem]">
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          <ArrowLeft />
        </Button>
        <h1 className="font-bold">Category</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 place-items-center gap-[1rem]">
        {categorys.map((category) => {
          return (
            <FoodType
              key={category.id}
              title={category.title}
              imgUrl={category.img_url}
              from="category_grid"
              onClick={() => {
                router.push(`/category/${category.id}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
