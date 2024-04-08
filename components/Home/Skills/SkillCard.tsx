import Image from "next/image";
import { SkillCategory } from "@/lib/data";

interface SkillCategoryProps {
  data: SkillCategory;
}
function SkillCard({ data }: SkillCategoryProps) {
  return (
    <div className="flex flex-col justify-between items-center my-4">
      <div className="text-xl font-semibold my-4">{data.title}</div>
      <div className="flex flex-row justify-evenly w-full">
        {data.content.map((item, itemIndex) => (
          <div key={itemIndex} className="flex flex-row items-center">
            <div className="flex-shrink-0">
              <Image
                width={50}
                height={50}
                src={item.logo}
                alt={item.title}
                className="object-cover"
              />
            </div>
            <div className="m-2 text-md font-semibold">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
