// Format date to locale string
export const formatDate = (date: Date | string): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Truncate text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Get contrast text color (black or white) based on background color
export const getContrastTextColor = (hexColor: string): 'black' | 'white' => {
  // Remove # if present
  const color = hexColor.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  
  // Calculate brightness (YIQ formula)
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  
  return yiq >= 128 ? 'black' : 'white';
};

// Validate email address
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generate aria labels for social links
export const getSocialAriaLabel = (platform: string): string => {
  return `Visit our ${platform} page`;
};

// Format phone number
export const formatPhoneNumber = (phone: string): string => {
  if (!phone) return '';
  
  // Remove non-numeric characters
  const numbers = phone.replace(/\D/g, '');
  
  // Format: +91 XXXXX XXXXX
  if (numbers.length === 10) {
    return `+91 ${numbers.slice(0, 5)} ${numbers.slice(5)}`;
  }
  
  // Return original if doesn't match expected format
  return phone;
};

// Get current year for copyright notices
export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

// Get localized course duration
export const getCourseDuration = (years: number, t: Function): string => {
  return t('common.duration', { years });
};
