import React from "react";

const OnlineCoursesSection = () => {
  const onlineCourses = [
    {
      year: "Feb 2025",
      providerName: "Udemy",
      providerLogo: "assert/udemy.png",
      title: "Java Spring Framework 6 with Spring Boot 3",
      details:
        "Gained hands-on experience in Spring Core, AOP, JPA, REST, Security, Microservices, and Docker.",
      skills: ["Sprin Core", "AOP"],
      certificateUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-1a3cf1bb-ce49-4494-b53d-4272ba0d2b8c.jpg",
    },
    {
      year: "Feb 2025",
      providerName: "LinkedIn",
      providerLogo: "assert/linkedinLearn.png",
      title: "Test-Driven Development in Spring Boot with JUnit and Mockito",
      details:
        "Enhanced skills in writing maintainable code using TDD, JUnit, and Mockito for Spring Boot applications.",
      skills: ["TDD", "JUnit", "Mockito", "Spring Boot"],
      certificateUrl:
        "https://media.licdn.com/dms/image/v2/D5622AQFpf7MNYYVK0w/feedshare-shrink_1280/B56ZUzV4rjHEAs-/0/1740323130314?e=1744848000&v=beta&t=cBReXJO9Hcn4RZsus0gbAwdMLzyjPJpJuYuUVeEUbGk",
    },
    {
      year: "Jan 2025",
      providerName: "Udemy",
      providerLogo: "assert/udemy.png",
      title: "Docker for Java Developers",
      details:
        "Mastered containerization concepts, Docker Compose, networking, and security best practices.",
      skills: ["Docker"],
      certificateUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-1da17628-2e8d-46ad-820c-195d10e8e559.jpg?v=1737466124000",
    },
    {
      year: "Feb 2025",
      providerName: "LinkedIn",
      providerLogo: "assert/linkedinLearn.png",
      title: "Overcoming Procrastination",
      details:
        "Developed strategies to boost productivity, manage time effectively, and build better habits.",
      skills: ["Time Management"],
      certificateUrl:
        "https://media.licdn.com/dms/image/v2/D5622AQF7eT_ldRj-FQ/feedshare-shrink_1280/B56ZTlNd.pHoAk-/0/1739012300956?e=1744848000&v=beta&t=F2WKteNgb8yPeGYiQ-hY4OAqxEIVm78dRs-7UIzlKrM",
    },
    {
      year: "March 2025",
      providerName: "LinkedIn",
      providerLogo: "assert/linkedinLearn.png",
      title: "Tech Career Skills: Effective Technical Communication",
      details:
        "Learned best practices for technical communication, project management, and code review.",
      skills: ["Project Management", "Code Review", "Communication"],
      certificateUrl:
        "https://media.licdn.com/dms/image/v2/D5622AQGQSYS52-aLKQ/feedshare-shrink_1280/B56ZWUPSxuHQAk-/0/1741948792173?e=2147483647&v=beta&t=0Q_29qYBuL8WS4VCI9JxqosrtM13fqgc6EPJ_cpebVc",
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
          {onlineCourses.map((course, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={course.providerLogo}
                  alt={course.providerName}
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-xl font-semibold text-purple-700">
                    {course.title}
                  </h3>
                  <p className="text-gray-500">
                    {course.year} | {course.providerName}
                  </p>
                </div>
              </div>

              <p className="text-gray-700">{course.details}</p>

              {course.skills.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Key Skills:
                  </h4>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {course.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-lg text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <a
                  href={course.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-semibold hover:underline flex items-center gap-2"
                >
                  🎓 View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCoursesSection;
