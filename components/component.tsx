/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/5Jo0RCeQOmS
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold">John Doe</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Education
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Work
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 px-6 md:px-12 lg:px-24">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Hi, I'm John Doe, a passionate web developer with a strong background in front-end and back-end
                technologies. I have a keen eye for design and a love for creating intuitive and user-friendly
                applications.
              </p>
              <p className="mb-4">
                With several years of experience in the industry, I have honed my skills in a variety of areas,
                including JavaScript, React, Node.js, and database management. I'm always eager to learn new
                technologies and stay up-to-date with the latest industry trends.
              </p>
              <p>
                In my free time, I enjoy exploring new ideas, tinkering with personal projects, and contributing to
                open-source communities. I'm passionate about using technology to solve real-world problems and make a
                positive impact on people's lives.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="John Doe"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section id="education" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground mb-2">University of Example, 2015 - 2019</p>
              <p>
                During my time at the University of Example, I gained a strong foundation in computer science, including
                algorithms, data structures, and software engineering principles. I also had the opportunity to
                participate in several group projects and hackathons, which helped me develop my collaboration and
                problem-solving skills.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Online Courses and Certifications</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  <span className="font-bold">React.js Fundamentals</span>, Udemy
                </li>
                <li>
                  <span className="font-bold">Node.js and Express.js</span>, Coursera
                </li>
                <li>
                  <span className="font-bold">Responsive Web Design</span>, FreeCodeCamp
                </li>
                <li>
                  <span className="font-bold">AWS Certified Developer - Associate</span>, AWS
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="work" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Front-end Developer</h3>
              <p className="text-muted-foreground mb-2">Acme Inc, 2019 - Present</p>
              <p className="mb-4">
                At Acme Inc, I've been responsible for developing and maintaining the company's web applications using
                cutting-edge front-end technologies like React, Redux, and Styled Components. I've worked closely with
                the design team to ensure a seamless user experience and have implemented various features, including
                responsive design, data visualization, and real-time updates.
              </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Developed and maintained the company's main web application, contributing to a 20% increase in user
                  engagement.
                </li>
                <li>Implemented a new design system, leading to a 15% improvement in development efficiency.</li>
                <li>
                  Collaborated with the back-end team to integrate RESTful APIs, ensuring smooth data flow and
                  functionality.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Web Development Intern</h3>
              <p className="text-muted-foreground mb-2">Example Corp, 2018 - 2019</p>
              <p className="mb-4">
                During my internship at Example Corp, I had the opportunity to work on a variety of web projects,
                including e-commerce websites, landing pages, and corporate websites. I gained valuable experience in
                front-end development, back-end integration, and project management.
              </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Developed and deployed a responsive e-commerce website, resulting in a 25% increase in online sales.
                </li>
                <li>
                  Collaborated with the design team to implement user-friendly interfaces and intuitive navigation.
                </li>
                <li>
                  Participated in daily stand-ups and project planning meetings, improving my communication and
                  problem-solving skills.
                </li>
              </ul>
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
                alt="Project 1"
                className="rounded-lg object-cover mb-4"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">E-commerce Website</h3>
              <p className="mb-4">
                Developed a fully functional e-commerce website with features like shopping cart, checkout process, and
                order management.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
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
              <h3 className="text-xl font-bold mb-2">Social Media Platform</h3>
              <p className="mb-4">
                Built a social media platform with features like user profiles, news feed, and real-time messaging.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Firebase</Badge>
                <Badge variant="outline">Socket.IO</Badge>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Project 3"
                className="rounded-lg object-cover mb-4"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <h3 className="text-xl font-bold mb-2">Data Visualization Dashboard</h3>
              <p className="mb-4">
                Developed a data visualization dashboard with interactive charts and graphs to display complex business
                metrics.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">D3.js</Badge>
                <Badge variant="outline">Redux</Badge>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Feel free to reach out to me if you have any questions or would like to discuss a potential
                collaboration.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MailIcon className="w-5 h-5" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-5 h-5" />
                  <Link href="#" prefetch={false}>
                    linkedin.com/in/johndoe
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-5 h-5" />
                  <Link href="#" prefetch={false}>
                    github.com/johndoe
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" className="w-full" rows={5} />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-4 px-6 text-sm">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
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
