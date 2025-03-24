import React from "react";
import CertificateWidget, {
  OnlineCoursesDataType,
} from "../widgets/CertificateWidget";
import SlideInText from "../styleComponent/SlideInTextAnimation";

const OnlineCoursesSection = () => {
  const onlineCourses: OnlineCoursesDataType[] = [
    {
      year: "Feb 2025",
      providerName: "LinkedIn",
      providerLogo: "assert/linkedinLearn.png",
      title: "AWS Essential Training for Developers",
      details:
        "Through the AWS Essential Training for Developers course, I have gained skills in managing IAM users and security policies, deploying and scaling EC2 instances, and utilizing AWS storage and database solutions.",
      skills: ["IAM", "EC2", "VPC", "S3"],
      certificate: "/assert/certificates/vipisanan-aws-essential-lnk.png",
      certificateUrl:
        "https://www.linkedin.com/learning/certificates/55a6c6f2ee5658b1b7ca8c7e3a2d74cb0bf47534d88c10ba2afb1fdc6f5fe0da",
    },
    {
      year: "Feb 2025",
      providerName: "LinkedIn",
      providerLogo: "assert/linkedinLearn.png",
      title: "React: Ecosystems",
      details:
        "Mastered React ecosystem, including routing, server-side rendering, animation, debugging, and workflow optimization.",
      skills: ["Routing", "Hooks"],
      certificate: "/assert/certificates/vipisanan-aws-essential-lnk.png",
      certificateUrl:
        "https://www.linkedin.com/learning/certificates/458da88fd079399a923a9e6a07e4a56c5bc8d73643f57dfef1262a1e4a1631df",
    },
    {
      year: "Feb 2025",
      providerName: "Udemy",
      providerLogo: "assert/udemy.png",
      title: "Java Spring Framework 6 with Spring Boot 3",
      details:
        "Gained hands-on experience in Spring Core, AOP, JPA, REST, Security, Microservices, and Docker.",
      skills: ["Spring Core", "AOP", "Rest API"],
      certificate: "/assert/certificates/vipisanan-spring-boot-udm.png",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-1a3cf1bb-ce49-4494-b53d-4272ba0d2b8c/",
    },
    {
      year: "Feb 2025",
      providerName: "LinkedIn",
      providerLogo: "assert/linkedinLearn.png",
      title: "Test-Driven Development in Spring Boot with JUnit and Mockito",
      details:
        "Enhanced skills in writing maintainable code using TDD, JUnit, and Mockito for Spring Boot applications.",
      skills: ["TDD", "JUnit", "Mockito", "Spring Boot"],
      certificate: "/assert/certificates/vipisanan-tdd-lnk.png",
      certificateUrl:
        "https://www.linkedin.com/learning/certificates/2887f44eaf217a086951ceb80459aa28d76fc485f131e016e9755369ea3f084b?trk=share_certificate",
    },
    {
      year: "Jan 2025",
      providerName: "Udemy",
      providerLogo: "assert/udemy.png",
      title: "Docker for Java Developers",
      details:
        "Mastered containerization concepts, Docker Compose, networking, and security best practices.",
      skills: ["Docker"],
      certificate: "/assert/certificates/vipisanan-docker-udm.png",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-1da17628-2e8d-46ad-820c-195d10e8e559/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
    },
    {
      year: "Feb 2025",
      providerName: "LinkedIn",
      providerLogo: "assert/linkedinLearn.png",
      title: "Overcoming Procrastination",
      details:
        "Developed strategies to boost productivity, manage time effectively, and build better habits.",
      skills: ["Time Management"],
      certificate:
        "/assert/certificates/vipisanan-overcoming-procrastination-lnk.png",
      certificateUrl:
        "https://www.linkedin.com/learning/certificates/90a3e7ea0d3c4d57f7d178fadbe5f9c39ccfa4fb4d9e5f5d292d9220ceaa99a5?trk=share_certificate",
    },
    {
      year: "March 2025",
      providerName: "LinkedIn",
      providerLogo: "assert/linkedinLearn.png",
      title: "Tech Career Skills: Effective Technical Communication",
      details:
        "Learned best practices for technical communication, project management, and code review.",
      skills: ["Project Management", "Code Review", "Communication"],
      certificate: "/assert/certificates/vipisanan-tech-communication.png",
      certificateUrl:
        "https://www.linkedin.com/learning/certificates/351bfb5507cc08c6c0d3cded12bed74d04a7f8d17fd14caeff14ad0e9f328b1b?trk=share_certificate",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm uppercase font-semibold text-gray-600 dark:text-gray-400"></p>
          <h2 className="text-3xl font-bold ">Online Courses</h2>
          <div className="border-b-2 border-purple-500 w-20 mt-2"></div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {onlineCourses &&
            onlineCourses.map((course: any, index) => (
              <React.Fragment key={index}>
                <SlideInText>
                  <CertificateWidget certificateData={course} />
                </SlideInText>
              </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCoursesSection;
