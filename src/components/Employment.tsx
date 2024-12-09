import React, { FC } from "react";
import EmploymentItem from "./EmploymentItem";
import { SectionTitle } from "./StyledComponent";

const Employment: FC = () => {
  return (
    <div id="experience" className="container mx-auto">
      <div className="experience mt-20">
        <SectionTitle>Work experience</SectionTitle>
        <div className="grid gap-10 mt-10 mb-10">
          {emplyments.map((item, key) => (
            <EmploymentItem
              key={key}
              role={item.role}
              from={item.from}
              to={item.to}
              description={item.description}
              stack={item.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employment;

const emplyments = [
  {
    role: "Persol Process & Technology | Senior Blockchain Developer | US(Remote)",
    from: "Jul 2021",
    to: "Oct 2024",
    description: [
      {
        title:
          "Designed and developed blockchain-based supply chain solutions on Ethereum and Solana, enabling transparency and traceability of goods through decentralized ledgers.",
      },
      {
        title:
          "Built and deployed smart contracts for tokenization of assets and automated compliance checks using Solidity and Rust.",
      },
      {
        title: "Integrated blockchain technology with IoT devices for secure, real-time data sharing in decentralized networks.",
      },
      {
        title: "Conducted in-depth vulnerability assessments on 20+ smart contracts, implementing robust security measures that reduced incident response time by 60% and ensured compliance with industry standards."
      },
      {
        title: "Collaborated with stakeholders to define technical requirements and implement blockchain strategies aligned with business goals."
      },
      {
        title: "Led the optimization of transaction throughput and gas efficiency, improving network performance by 30%."
      }
    ],
    stack: [
      { title: "React" },
      { title: "Next.js" },
      { title: "Web3" },
      { title: "MUI" },
      { title: "SCSS" },
      { title: "Tailwind CSS" },
    ],
  },
  {
    role: "Red Badger | Senior Full Stack and Blockchain Developer | UK(Remote)",
    from: "Jun 2019",
    to: "Jun 2021",
    description: [
      {
        title:
          "Developed scalable backend systems for decentralized applications (dApps) using Node.js, Go, and Ruby on Rails, processing over 10,000 daily blockchain transactions.",
      },
      {
        title:
          "Revitalized and optimized legacy smart contracts, reducing gas costs by 25% and enhancing performance for on-chain computations.",
      },
      { title: 
        "Automated deployment pipelines for Solana and Ethereum nodes using Docker and Kubernetes, cutting release times by 30% and ensuring 99.9% node uptime." 
      },
      {
        title: "Collaborated with cross-functional teams to deliver blockchain projects 15% ahead of schedule, aligning with client expectations and improving efficiency."
      }
    ],
    stack: [
      { title: "Solana" },
      { title: "React" },
      { title: "Next.js" },
      { title: "Web3.js" },
      { title: "Redux" },
      { title: "SCSS" },
    ],
  },
  {
    role: "Traveloka | Full Stack Developer | Jakarta, Indonesia",
    from: "Mar 2016",
    to: "May 2019",
    description: [
      {
        title:
          "Built and deployed full-stack applications using Node.js and Go for backend and React and Vue.js for frontend, supporting 15,000+ daily transactions.",
      },
      {
        title:
          "Created and optimized RESTful APIs, improving data processing speed by 15% and reducing API response time by 25%, leading to better system performance.",
      },
      {
        title:
          "Teamed with frontend engineers to enhance user interface components, boosting engagement by 20% and reducing bounce rates by 15%.",
      },
    ],
    stack: [
      { title: "GoLang" },
      { title: "React" },
      { title: "Redux" },
      { title: "GraphQL" },
      { title: "Tailwind CSS" },
      { title: "SCSS" },
    ],
  },
  {
    role: "Tokopedia | Junior Full Stack Developer | Jakarta, Indonesia",
    from: "Jan 2014",
    to: "Feb 2016",
    description: [
      {
        title:
          "Assisted in developing web applications using Ruby on Rails and JavaScript frameworks, focusing on RESTful API development and database schema design.",
      },
      {
        title:
          "Contributed to development sprints, improving code quality through unit testing, reducing bugs by 15% during QA.",
      },
    ],
    stack: [
      { title: "GoLang" },
      { title: "React" },
      { title: "Redux" },
      { title: "GraphQL" },
      { title: "Tailwind CSS" },
      { title: "SCSS" },
    ],
  }
];
