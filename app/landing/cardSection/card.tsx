import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

export const CardSection = () => {
    return (
        <section className="relative w-full h-full">
            <div>
                <h1 className="text-center text-black text-[41px] aboreto-regular font-bold mt-10">
                    Collections à découvrir
                </h1>
                <p className="text-center text-black">
                    Pièces uniques créées à partir de textiles upcyclés.
                </p>

            </div>

            <div className="grid grid-cols-4 grid-rows-1 gap-4 text-black mx-10 mt-20 mb-20 ">
                {
                    Array(4).fill(null).map((_, index) => (
                        <div key={index} className="bg-[#E7E7E1] border-2 border-[#A8B5A2]">
                            <Image
                                src="/imgFrame.svg"
                                alt="Card 1"
                                width={300}
                                height={300}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                            <div className="border-t-2 border-[#A8B5A2] flex p-4 aboreto-regular">
                                <p className="">
                                    Jebba Rose Clo’ess
                                </p>
                                <div className="flex items-center justify-between ml-auto space-x-5">
                                    <ShoppingCart strokeWidth={1.2} />
                                    <Heart strokeWidth={1.2} />
                                </div>
                            </div>

                        </div>
                    )
                    )
                }

            </div>

        </section>
    );
}