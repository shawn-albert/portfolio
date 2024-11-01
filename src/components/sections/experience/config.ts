import { Experience } from '@/types/experience';

const experiences: Experience[] = [
{
  name: 'Director of Artificial Intelligence',
  duration: '2023 - 2024',
  company: 'Belle',
  description:
    "Advanced diabetic foot care through AI innovation, engineering intelligent systems for clinical documentation and care optimization. Built the company's first MLOps platform and modern data lakehouse while architecting HIPAA-compliant workflows with Amazon Bedrock that transformed patient interactions into structured medical insights."
},
  {
    name: 'Lead Data Scientist & Senior Manager',
    duration: '2022 - 2023',
    company: 'Healthfirst',
    description:
      'Spearheaded enterprise-wide MLOps initiatives, reducing model deployment time from weeks to days. Led development of innovative LLM database query assistant, enabling natural language interaction with healthcare data systems.'
  },
  {
    name: 'Senior Data Scientist',
    duration: '2020 - 2022',
    company: 'Aetna, a CVS Health Company',
    description:
      'Led strategic analytics projects in clinical product development, launching data science campaigns with $7.1M annual savings. Developed Enhanced Maternity Program serving 9.7M lives with $37M annual revenue.'
  },
  {
    name: 'Data Scientist',
    duration: '2018 - 2020',
    company: 'Blue Cross Blue Shield',
    description:
      'Developed provider cost efficiency metrics and led implementation of health data exchange system processing 15.2M+ records. Created visualization dashboards for clinical quality metrics and network optimization.'
  }
];

export { experiences };