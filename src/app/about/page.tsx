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
              A tech innovator who loves to build
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
                  AI innovator, tech enthusiast, and eternal learner on a mission to transform industries through artificial intelligence.
                </TextReveal>
              </p>
            </div>
            <div className="grid gap-4">
              <Card className="border-none bg-transparent">
                <CardContent className="p-1">
                  <div className="space-y-6">
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        As Director of Artificial Intelligence, I have dedicated my career to bridging the gap between cutting-edge AI innovation and real-world business outcomes. My journey combines a deep technical foundation in computer science with strategic business acumen, shaped by my education at the University of Chicago&apos;s MS in Computer Science program and Booth School of Business MBA.
                      </TextReveal>
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        What drives me is the potential of AI to revolutionize how organizations operate and serve their customers. Each project, whether implementing automated workflows or developing predictive models, is an opportunity to improve efficiency and deliver measurable impact. I believe in building systems that not only leverage cutting-edge technology but are also practical, scalable, and deliver real-world results.
                      </TextReveal>
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        At Belle, I architected agentic AI workflows using Amazon Bedrock, creating systems that automatically transform patient interactions into clinical documentation. This innovation helped healthcare providers spend more time with patients and less time on paperwork. The platform processed data from over 250,000 patient visits and 2.2 million clinical images, delivering cost savings of $800-1500 per Medicare Advantage member.
                      </TextReveal>
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        My work extends beyond just implementing AI – I am passionate about building foundations that enable scalable innovation. I have engineered modern data platforms with an Apache Iceberg lakehouse architecture, dbt-Athena for data processing, and comprehensive data governance with LakeFormation. To ensure reliability at scale, I built automated CI/CD pipelines with GitHub Actions, implementing infrastructure as code through Terraform and AWS CDK for consistent deployments from development to production.
                      </TextReveal>
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        Previously at Healthfirst, I led an MLOps transformation that dramatically reduced model deployment time from weeks to days. I also spearheaded the development of an innovative LLM-powered database query assistant that bridged relational and graph databases, making complex data accessible to non-technical users. At Aetna/CVS Health, I launched data science initiatives that generated $7.1M in projected annual savings and developed the Enhanced Maternity Program, which now serves 9.7M lives with $37M in annual revenue.
                      </TextReveal>
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-400">
                      <TextReveal>
                        When I am not architecting AI solutions, you will find me exploring new technologies, mentoring upcoming data scientists and machine learning engineers, or thinking about the next big use case in enterprise AI. I am always excited to connect with fellow tech enthusiasts and innovators who share my passion for using AI to transform industries and make a meaningful impact.
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
    </main>
  );
}