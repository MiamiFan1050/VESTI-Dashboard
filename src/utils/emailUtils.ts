export const openEmail = (to: string, subject: string, body: string) => {
  // Create the mailto link
  const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  try {
    // Try to open the email client
    window.location.href = mailtoLink;
  } catch (error) {
    // Fallback: copy email details to clipboard and show alert
    const emailDetails = `To: ${to}\nSubject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(emailDetails).then(() => {
      alert('Email details copied to clipboard! Please paste them into your email client.');
    }).catch(() => {
      // Final fallback: just show the email details
      alert(`Please send an email to ${to} with subject: "${subject}"`);
    });
  }
};

// Predefined email templates
export const emailTemplates = {
  marketingIntern: {
    to: 'contact@getvesti.com',
    subject: 'Marketing Internship Application',
    body: `Hi VESTI Team,

I'm interested in applying for the Marketing & Social Media Internship. Please find my CV attached.

Best regards`
  },
  managementIntern: {
    to: 'contact@getvesti.com',
    subject: 'Management Internship Application',
    body: `Hi VESTI Team,

I'm interested in applying for the Management Internship. Please find my CV attached.

Best regards`
  }
}; 