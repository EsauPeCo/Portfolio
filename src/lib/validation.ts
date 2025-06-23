import * as Yup from "yup";

// Shared validation schema for contact form
export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .trim()
    .lowercase()
    .email('Please enter a valid email address')
    .required('Email is required'),
  message: Yup.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .required('Message is required'),
});

export type ContactFormData = Yup.InferType<typeof contactSchema>;

// Validation function for server-side use
export const validateContactData = async (data: unknown) => {
  try {
    const validatedData = await contactSchema.validate(data, { 
      abortEarly: false,
      stripUnknown: true, // Remove any extra fields
    });
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return { 
        success: false, 
        error: error.errors[0], // Return first error message
        allErrors: error.errors,
      };
    }
    return { 
      success: false, 
      error: 'Validation failed',
    };
  }
}; 