import { Skill } from '@/types/skill';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Machine Learning Operations',
    thumbnail: '/images/skills/mlops.jpg',
    description: `Extensive experience building and optimizing ML infrastructure at scale, including end-to-end MLOps pipelines, model deployment automation, and training optimization. Specialized in AWS SageMaker, custom training solutions, and distributed systems for large-scale ML workloads.`
  },
  {
    name: 'Cloud Architecture',
    thumbnail: '/images/skills/cloud.jpg',
    description: `Deep expertise in cloud-native architectures, particularly AWS services including EC2, ECS, EMR, SageMaker, and serverless technologies. Proven track record of building scalable, cost-efficient infrastructure for high-performance ML systems and data platforms.`
  },
  {
    name: 'AI/ML Engineering',
    thumbnail: '/images/skills/ai.jpg',
    description: `Strong background in implementing and optimizing AI systems, including LLMs, causal inference models, and custom ML solutions. Experience with model deployment, inference optimization, and building HIPAA-compliant AI workflows for healthcare applications.`
  },
  {
    name: 'Data Platform Engineering',
    thumbnail: '/images/skills/data.jpg',
    description: `Expertise in designing and implementing modern data platforms using technologies like dbt, Spark, and AWS Glue. Skilled in building data lakehouses, ETL pipelines, and maintaining data quality at scale through automated testing and monitoring frameworks.`
  }
];

export { trimLen, skills };