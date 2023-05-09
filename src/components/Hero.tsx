import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/image/bg.jpg";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-2xl"
        src={profileImage}
        alt="profile Image"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Seungmi"}</h2>
      <h3 className="text-xl font-semibold">Frontend Engineer</h3>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
