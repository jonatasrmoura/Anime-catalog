interface FormErrorMessageProps {
  description: string;
}

export function FormErrorMessage({description}: FormErrorMessageProps){
  return (
    <span className="mt-2 text-sm text-red-500 dark:text-red-500">
      {description}
    </span>
  );
}
