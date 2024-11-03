// components/sections/contact/_components/FormError.tsx
interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-red-100 p-3 text-sm text-red-700">
      <p>{message}</p>
    </div>
  );
};
