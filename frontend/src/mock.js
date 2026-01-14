// Mock data and functions for frontend-only implementation

export const submitContactForm = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Store in localStorage for demo purposes
  const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  const newSubmission = {
    ...formData,
    id: Date.now(),
    timestamp: new Date().toISOString()
  };
  existingSubmissions.push(newSubmission);
  localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
  
  console.log('Contact form submitted (MOCK):', newSubmission);
  
  // Simulate success
  return { success: true, message: 'Form submitted successfully' };
};

// Function to retrieve mock submissions (for testing)
export const getContactSubmissions = () => {
  return JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
};