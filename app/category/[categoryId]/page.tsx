"use client";
import { categorys } from "@/components/Categorys";
import { FoodType } from "@/components/FoodType";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const SingleCategory = ({
  params,
}: {
  params: {
    categoryId: string;
  };
}) => {
  const router = useRouter();
  return (
    <div>
      {categorys
        .filter((category) => category.id === Number(params.categoryId))
        .map((category) => {
          return (
            <div key={category.title}>
              <div className="flex gap-[0.5rem] items-center pl-[1rem] pb-[1rem]">
                <Button
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <ArrowLeft />
                </Button>
                <h1 className="font-bold p-[1rem]">{category.title}</h1>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 place-items-center gap-[1rem]">
                {category.category.map((cat) => {
                  return (
                    <FoodType
                      key={cat.id}
                      title={cat.title}
                      from="category_grid"
                      imgUrl={cat.img_url}
                      onClick={() => {
                        console.log("hello");
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleCategory;
