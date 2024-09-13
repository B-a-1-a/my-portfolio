import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import { MenuIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
        
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
          Bala Shukla
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="hover:underline underline-offset-4 transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline underline-offset-4 transition-colors" prefetch={false}>
            Education
          </Link>
          <Link href="#" className="hover:underline underline-offset-4 transition-colors" prefetch={false}>
            Experiences
          </Link>
          <Link href="#" className="hover:underline underline-offset-4 transition-colors" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="hover:underline underline-offset-4 transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>

      <main className="flex-1 py-12 px-6 md:px-12 lg:px-24">

<section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Hi &#128075;, I'm Bala Shukla, a sophomore at the University of Wisconsin-Madison, majoring in Computer Science & Data Science. I’m passionate about machine learning, cloud computing, and app development.
              </p>
              <p className="mb-4">
                I have experience in both frontend and backend development, cloud architectures, and have led projects that deliver real-world solutions. I am profficient in Python, Java, Web Dev with React, Django and Other Frameworks, Popuar stacks like MERN and bunch more. I'm always excited to work on new challenges and solve problems using technology.
              </p>
              <p>
                In my free time, I love making fun but functional mini-projects and continuously improving my skills in machine learning and app development.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="Abhyudaya Shukla"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        <section id="education" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Education and Certs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Bachelor of Science in Computer Science with Honors</h3>
              <h3 className="text-xl font-bold mb-2">Bachelor of Science in Data Science</h3>
              <h3 className="text-xl font-bold mb-2">Minor Mathematics</h3>
              <p className="text-muted-foreground mb-2">University of Wisconsin Madison, 2023 - 2027</p>
              <p>
                Dean's List 2023 - Ongoing
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Online Courses and Certifications</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  <span className="font-bold">AWS Certified Solutions Architecht - SAA-03</span>, by Amazon Web Services
                </li>
                <li>
                  <span className="font-bold">Machine Learning Specialization</span>, by Deeplearning.AI and Stanford University
                </li>
                <li>
                  <span className="font-bold">Meta Front End</span>, by Meta and Coursera
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="work" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Co-Founder</h3>
              <p className="text-muted-foreground mb-2">Great River Web Solutions LLC (July 2023 - Present)</p>
              <p className="mb-4">
                Created responsive websites for local businesses, generating over 10,000+ viewers monthly. Used technologies such as React, TypeScript, Azure, and Cloudflare.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Mobile App Development Intern</h3>
              <p className="text-muted-foreground mb-2">John Deere (Jan 2023 - June 2023)</p>
              <p className="mb-4">
                Developed mobile applications using Java, Kotlin, and Firebase, presenting the final product to 150 John Deere Managers at their headquarters.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="AI College Counselor"
                className="rounded-lg object-cover mb-4"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">AI College Counselor</h3>
              <p className="mb-4">
                Built using LangChain and RAG, created an AI-based tool to counsel students on college admissions using dynamic conversation models.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">LangChain</Badge>
                <Badge variant="outline">Chroma</Badge>
              </div>
            </div>

            <div>
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Project 2"
                className="rounded-lg object-cover mb-4"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Web Solutions for Local Businesses</h3>
              <p className="mb-4">
                Developed highly responsive and optimized websites for local businesses, resulting in substantial traffic growth and customer satisfaction.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Azure</Badge>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">Feel free to reach out to me for collaboration or inquiries:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5" />
                  <span>contact@balashukla.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  <span>+1 (563) 726-5987</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-5 h-5" />
                  <Link href="https://www.linkedin.com/in/abhyudaya-shukla" prefetch={false}>
                    linkedin.com/in/abhyudaya-shukla
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-5 h-5" />
                  <Link href="https://github.com/B-a-1-a" prefetch={false}>
                    github.com/B-a-1-a
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" className="w-full" rows={5} />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-6 text-sm">
        <p>&copy; 2024 Abhyudaya Shukla. All rights reserved.</p>
      </footer>
    </div>
  );
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
