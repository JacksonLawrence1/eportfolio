import Back from "@/components/back";
import Link from "next/link";

const Contact = () => (
  <div className="flex flex-col justify-center items-center h-screen gap-6 pt-16">
    <h1 className="text-secondary text-3xl">Contact</h1>
    <div className="card flex flex-col gap-4">
      <p>You can contact me at my email address:</p>
      <h1 className="text-lg text-center">
        <Link href="mailto:jplqqz@gmail.com" className="hyperlink">
          jplqqz@gmail.com
        </Link>
      </h1>
    </div>

    <Back />
  </div>
);

export default Contact;
