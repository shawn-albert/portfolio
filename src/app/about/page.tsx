"use client";
import TextReveal from "@/components/motion/text-reveal";
import React from "react";
import MotionWrap from "@/components/motion-wrap";
import { Card, CardContent } from "@/components/ui/card";
import Line from "@/components/motion/line";

const education = [
  {
    school: "The University of Chicago Booth School of Business",
    degree: "Master of Business Administration (MBA)",
    field: "Entrepreneurship and Strategic Management",
    duration: "2017 - 2020"
  },
  {
    school: "The University of Chicago",
    degree: "Master of Science (MS)",
    field: "Computer Science",
    duration: "2017 - 2020"
  },
  {
    school: "Vanderbilt University",
    degree: "Bachelor of Arts (BA)",
    field: "Medicine, Health and Society | Molecular and Cellular Biology",
    duration: "2012 - 2016"
  }
];

function EducationCard({ school, degree, field, duration }: (typeof education)[0]) {
  return (
    <Card className="border-none bg-transparent">
      <CardContent className="p-1">
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-semibold">
            <TextReveal>{school}</TextReveal>
          </h3>
          <span className="text-sm font-medium">
            <TextReveal>{duration}</TextReveal>
          </span>
        </div>
        <h4 className="mt-2 text-lg font-medium uppercase">
          <TextReveal>{degree}</TextReveal>
        </h4>
        <p className="mt-2 text-zinc-700 dark:text-zinc-400">
          <TextReveal>{field}</TextReveal>
        </p>
        <hr className="my-6 border-t border-border" />
      </CardContent>
    </Card>
  );
}

export default function About() {
  return (
    <main className="flex-1">
      <section className="relative flex min-h-[calc(50dvh)] items-center justify-center">
        <div className="flex flex-col items-center md:max-w-7xl">
          <h1 className="leading-wide tracking-relaxed text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TextReveal delay={0.1}>
              An engineer who loves data
            </TextReveal>
          </h1>
          <Line className="mt-16" />
        </div>
      </section>

      <MotionWrap className="w-full py-24 lg:py-32" id="about">
        <div className="px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                <TextReveal>About Me</TextReveal>
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                <TextReveal>
                  Healthcare AI innovator, tech enthusiast, and eternal learner on a mission to revolutionize patient care through artificial intelligence.
                </TextReveal>
              </p>
            </div>
            <div className="grid gap-4">
              <Card className="border-none bg-transparent">
                <CardContent className="p-1">
                  <div className="space-y-6">
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        As Director of Artificial Intelligence, I have dedicated my career to bridging the gap between cutting-edge AI innovation and real-world healthcare outcomes. My journey combines a deep technical foundation in computer science with strategic business acumen, shaped by my education at the University of Chicago&apos;s MS in Computer Science program and Booth School of Business MBA.
                      </TextReveal>
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        I thrive on building transformative AI solutions that make a tangible difference in healthcare delivery. At Belle, I architected agentic AI workflows using Amazon Bedrock and Step Functions, creating systems that automatically transform patient interactions into structured clinical documentation. This innovation helped healthcare providers spend more time with patients and less time on paperwork. Our platform now processes data from over 250,000 patient visits and 2.2 million clinical images, delivering impressive cost savings of $800-1500 per Medicare Advantage member.
                      </TextReveal>
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        My work extends beyond just implementing AI – I am passionate about building robust foundations that enable scalable innovation. I have established comprehensive MLOps infrastructures, including an Apache Iceberg data lakehouse with dbt-Athena-SparkSQL integration, ensuring data governance through AWS Glue and LakeFormation. This technical architecture is complemented by automated CI/CD pipelines using GitHub Actions, Terraform, and AWS CDK, creating standardized deployments from innovation to production.
                      </TextReveal>
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        Previously at Healthfirst, I led an MLOps transformation that dramatically reduced model deployment time from weeks to days. I also spearheaded the development of an innovative LLM-powered database query assistant that bridged relational and graph databases, making complex data accessible to non-technical users. At Aetna/CVS Health, I launched data science initiatives that generated $7.1M in projected annual savings and developed the Enhanced Maternity Program, which now serves 9.7M lives with $37M in annual revenue.
                      </TextReveal>
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        What drives me is the potential of AI to revolutionize healthcare delivery. Each project, whether it is implementing automated clinical documentation or developing predictive health models, is an opportunity to improve patient outcomes and make healthcare more accessible and efficient. I believe in building systems that not only leverage cutting-edge technology but are also practical, scalable, and deliver measurable impact.
                      </TextReveal>
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        When I am not architecting AI solutions, you will find me exploring new technologies, mentoring upcoming data scientists and machine learning engineers, or thinking about the next big innovation in healthcare AI. I am always excited to connect with fellow tech enthusiasts and healthcare innovators who share my passion for using AI to make a difference in people&apos;s lives.
                      </TextReveal>
                    </p>
                  </div>
                  <hr className="my-6 border-t border-border" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </MotionWrap>

      <MotionWrap className="w-full py-24 lg:py-32" id="education">
        <div className="px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                <TextReveal>Education</TextReveal>
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                <TextReveal>
                  My academic journey combining technical expertise with business acumen.
                </TextReveal>
              </p>
            </div>
            <div className="grid gap-4">
              {education.map((edu, index) => (
                <EducationCard key={`education_${index}`} {...edu} />
              ))}
            </div>
          </div>
        </div>
      </MotionWrap>
    </main>
  );
}