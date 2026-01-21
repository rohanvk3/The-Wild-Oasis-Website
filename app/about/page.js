import Image from "next/image";
import image1 from "@/public/about-1.jpg";

import { getCabins } from "../_lib/data-service";
import Link from "next/link";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            Where nature’s beauty and comfortable living come together in
            perfect harmony. Nestled amidst some of India’s most scenic
            landscapes, The Wild Oasis is your peaceful retreat away from the
            chaos of everyday life. Here, luxury meets simplicity, allowing you
            to truly reconnect with nature and yourself.
          </p>

          <p>
            Our {cabins.length} luxury cabins offer a cozy and private base for
            your stay, while the surrounding hills, forests, and open skies
            invite you to slow down and breathe easy. Wake up to fresh mountain
            air, enjoy quiet mornings with birdsong, and unwind under starlit
            skies in serene surroundings.
          </p>

          <p>
            This is a place where meaningful memories are created — whether
            you’re spending time with family, enjoying a quiet escape, or
            celebrating special moments close to nature. The Wild Oasis offers
            comfort, calm, and a sense of belonging.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Family relaxing near a cabin in nature"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Family-run hospitality since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, The Wild Oasis has been lovingly managed by our family,
            rooted in the values of warmth, care, and genuine hospitality. What
            began as a small retreat has grown into a trusted destination for
            guests seeking peace, comfort, and an authentic nature experience.
          </p>

          <p>
            Through generations, we’ve preserved the soul of The Wild Oasis —
            blending traditional hospitality with modern comforts. When you stay
            with us, you’re not just a guest; you become part of our extended
            family. We invite you to experience a stay where tradition,
            tranquility, and heartfelt service come together.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
