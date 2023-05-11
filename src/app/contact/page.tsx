import ContactForm from "@/components/ContactForm";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact me",
  description: "메일 보내기",
};

const LINKS = [
  { icons: <AiFillGithub />, url: "https://github.com/seungmileee" },
  {
    icons: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/%EC%8A%B9%EB%AF%B8-%EC%9D%B4-1533b8254/",
  },
  { icons: <SiVelog />, url: "https://velog.io/@dltmdal0928" },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>dltmdal0928@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-sky-400"
          >
            {link.icons}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold m-8">Send me an email</h2>
      <ContactForm />
    </section>
  );
}
