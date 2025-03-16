"use client";
import React from "react";

interface certificateType {
  year: string;
  providerName: string;
  providerLogo: string;
  title: string;
  details: string;
  skiles: string[];
  certificateUrl: string;
}
const educationData = [
  {
    year: "2016-2020",
    institution: "University of Kelaniya, Sri Lanka",
    degree: "BSc. (Hons.) in Software Engineering",
    details: ["Activities and societies: Junior Treasurer of Tamil Students'"],
    image: "https://ditmis.kln.ac.lk/std/logo.png",
  },
  {
    year: "2013",
    institution: "MU/Vidyananda college, Sri Lanka",
    degree: "G.C.E. Advanced Level - Mathematics Stream",
    details: [],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhiRzqbDZXYirS52fmLBpclZs6NvaHQlKrQ&s",
  },
];
const onlineCoursesData: certificateType[] = [
  {
    year: "Feb 2025",
    providerName: "Udamy",
    providerLogo: "assert/udemy.png",
    title: "Java Spring Framework 6 with Spring Boot 3",
    details:
      "Successfully completed an in-depth course on Spring 6 and Spring Boot, gaining hands-on experience in building enterprise-level Java applications. Covered key topics including Spring Core (IoC), Spring AOP, Spring Data JPA, Spring REST, Spring Security, Microservices, and Docker. This course strengthened my expertise in backend development, microservices architecture, and modern Java application design.",
    skiles: [],
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-1a3cf1bb-ce49-4494-b53d-4272ba0d2b8c.jpg",
  },
  {
    year: "Feb-2025",
    providerName: "LinkedIn",
    providerLogo: "assert/linkedinLearn.png",
    title:
      "Preview Test-Driven Development in Spring Boot with JUnit and Mockito",
    details:
      "Completed the Test-Driven Development (TDD) course on LinkedIn Learning, enhancing my skills in writing reliable and maintainable code through effective unit testing. Applied TDD principles for better code quality and efficiency. The GitHub repository contains relevant code examples and documentation in the README to demonstrate practical implementation of TDD concepts.",
    skiles: ["Test-Driven Development", "JUnit", "Mockito", "Spring Boot"],
    certificateUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQFpf7MNYYVK0w/feedshare-shrink_1280/B56ZUzV4rjHEAs-/0/1740323130314?e=1744848000&v=beta&t=cBReXJO9Hcn4RZsus0gbAwdMLzyjPJpJuYuUVeEUbGk",
  },
  {
    year: "Jan 2025",
    providerName: "Udemy",
    providerLogo: "assert/udemy.png",
    title: "Docker for Java Developers",
    details:
      "Successfully completed a comprehensive Docker certification course, gaining hands-on experience in containerization. Covered key concepts such as Docker architecture, container lifecycle management, Docker Compose, networking, volumes, and security best practices. Learned how to build, deploy, and manage containerized applications efficiently. Additionally, explored Docker Hub, multi-stage builds, and best practices for optimizing container performance. This certification strengthened my expertise in modern cloud-native application deployment and microservices architecture.",
    skiles: ["Docker"],
    certificateUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-1da17628-2e8d-46ad-820c-195d10e8e559.jpg?v=1737466124000",
  },
  {
    year: "Feb-2025",
    providerName: "LinkedIn",
    providerLogo: "assert/linkedinLearn.png",
    title: "Overcoming Procrastination",
    details:
      "Completed the Overcoming Procrastination course on LinkedIn Learning, gaining valuable strategies to combat procrastination and increase productivity. The course covered techniques for managing time effectively, setting achievable goals, overcoming mental barriers, and creating actionable plans. Learned how to build better habits, stay focused, and prioritize tasks to boost motivation and reduce stress. This course has helped me develop practical skills to manage my workflow more efficiently and stay consistent in achieving personal and professional goals",
    skiles: ["Time Management"],
    certificateUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQF7eT_ldRj-FQ/feedshare-shrink_1280/B56ZTlNd.pHoAk-/0/1739012300956?e=1744848000&v=beta&t=F2WKteNgb8yPeGYiQ-hY4OAqxEIVm78dRs-7UIzlKrM",
  },
  {
    year: "March-2025",
    providerName: "LinkedIn",
    providerLogo: "assert/linkedinLearn.png",
    title: "Tech Career Skills: Effective Technical Communication",
    details:
      "Completed the Overcoming Procrastination course on LinkedIn Learning, gaining valuable strategies to combat procrastination and increase productivity. The course covered techniques for managing time effectively, setting achievable goals, overcoming mental barriers, and creating actionable plans. Learned how to build better habits, stay focused, and prioritize tasks to boost motivation and reduce stress. This course has helped me develop practical skills to manage my workflow more efficiently and stay consistent in achieving personal and professional goals",
    skiles: [
      "Project Management",
      "Code Review",
      "Communication",
      "Technical Communication",
    ],
    certificateUrl:
      "https://media.licdn.com/dms/image/v2/D5622AQGQSYS52-aLKQ/feedshare-shrink_1280/B56ZWUPSxuHQAk-/0/1741948792173?e=2147483647&v=beta&t=0Q_29qYBuL8WS4VCI9JxqosrtM13fqgc6EPJ_cpebVc",
  },
];

const Education = () => {
  const educationBox = (edu: any) => {
    return (
      <>
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={edu.image}
            alt="Education"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Education Details */}
        <div>
          <p className=" font-semibold">{edu.year}</p>
          <h3 className="text-lg font-bold">{edu.institution}</h3>
          <p className="text-gray-700 dark:text-gray-400">{edu.degree}</p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            {edu.details.map((detail: any, i: number) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start">
        {/* Left Side - Education Title */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="border-b-2 border-purple-500 w-20 mt-2"></div>
        </div>

        {/* Right Side - Education List */}
        <div className="md:w-2/3 space-y-10">
          {educationData.map((edu, index) => (
            <div key={index} className="flex items-start gap-6">
              {educationBox(edu)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
