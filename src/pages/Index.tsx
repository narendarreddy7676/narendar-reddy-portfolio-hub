import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, BookOpen, Code, Database, Trophy, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm Narendar Reddy
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              A passionate IT student with a focus on Python, Data Structures, and Application Development
            </p>
            <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get in touch
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="/lovable-uploads/9e78068e-c3ab-4f69-a4f1-425d493ebd12.png"
              alt="Narendar Reddy"
              className="rounded-full w-64 h-64 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600">
            A passionate and goal-oriented student pursuing a Bachelor of Technology in Information Technology with a strong interest in python, Data Structures, and application development. Seeking opportunities to leverage my technical skills, academic achievements, and practical experience to contribute to the success of innovative organizations.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Malla Reddy University</h3>
                  <p className="text-gray-600">B.Tech in Computer Science, Information Technology</p>
                  <p className="text-gray-500">Aug 2023 - Present</p>
                  <p className="text-primary font-semibold">CGPA: 7.95</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Sidhartha Junior College</h3>
                  <p className="text-gray-600">M.P.C, Intermediate</p>
                  <p className="text-gray-500">Jun 2021 - Apr 2023</p>
                  <p className="text-primary font-semibold">Percentage: 75%</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Programming Languages</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Python</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Database className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Data Science Tools</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Pandas</li>
                    <li>Numpy</li>
                    <li>Matplotlib</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <BadgeCheck className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Soft Skills</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Decision making</li>
                    <li>Quick Learner</li>
                    <li>Multitasking</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Resume Procreater</h3>
              <p className="text-gray-600">Apr 2024</p>
              <p className="mt-2">
                To develop a smart and intuitive resume builder that streamlines the resume creation process by offering customizable templates to different company requirements, enabling users to generate multiple resumes effortlessly with a single data input.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Tour Guider and Traveller</h3>
              <p className="text-gray-600">Dec 2024</p>
              <p className="mt-2">
                Passionate and knowledgeable tour guide with extensive experience in providing engaging and informative travel experiences. Skilled in creating memorable journeys, ensuring traveler satisfaction, and offering insights into local culture, history, and landmarks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Certifications & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Trophy className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Certifications</h3>
                  <p className="mt-2">Cambridge English Empower B2 Level</p>
                  <p className="text-gray-600">Issued by: Cambridge University Press & Assessment</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Trophy className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Academic Achievements</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Consistently maintained CGPA of 7.95 in B.Tech</li>
                    <li>Perfect CGPA of 10.0 in 10th Standard</li>
                    <li>75% in Intermediate</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <a href="mailto:sidhu007766@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:9666965703">
                <Phone className="w-4 h-4 mr-2" />
                Call Me
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
