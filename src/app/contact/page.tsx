import Back from "@/components/back";
import Link from "next/link";

const Contact = () => (
  <div className="hero">
    <h1 className="text-secondary text-3xl">Contact</h1>
    <div className="card flex flex-col gap-4">
      <p>You can contact me at my email address:</p>
      <h1 className="text-lg text-center">jplqqz@gmail.com</h1>
    </div>
    <div className="flex gap-6">
      <Link href="mailto:jplqqz@gmail.com" className="hyperlink">
        <button className="button">Email</button>
      </Link>
      <Link
        href="https://github.com/JacksonLawrence1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button">GitHub</button>
      </Link>
      <Link href="/contact/cv">
        <button className="button">CV</button>
      </Link>
    </div>

    <Back />
  </div>
);

export default Contact;
