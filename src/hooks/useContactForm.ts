import { useState } from 'react';
import { ContactFormData, ContactFormErrors, validateContactForm, hasErrors } from '../utils/validation';

const initialData: ContactFormData = { name: '', email: '', subject: '', message: '' };

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateContactForm(formData);
    if (hasErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setFormData(initialData);
      setErrors({});
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialData);
    setErrors({});
    setIsSuccess(false);
    setSubmitError(false);
  };

  return { formData, errors, isSubmitting, isSuccess, submitError, handleChange, handleSubmit, resetForm };
}
