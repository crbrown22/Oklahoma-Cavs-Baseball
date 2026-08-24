export interface ProspectFormData {
  fullName: string;
  email: string;
  phone: string;
  parentName?: string;
  parentPhone?: string;
  parentEmail?: string;
  gradYear: string;
  highSchool: string;
  cityState: string;
  primaryPosition: string;
  secondaryPosition?: string;
  batsThrows: string;
  height: string;
  weight: string;
  gpa: string;
  videoLink?: string;
  interestNotes?: string;
  message?: string;
}

export const TARGET_RECRUITMENT_EMAIL = 'crbrown@okcavs.com';

/**
 * Formats the prospect data into a clean, professional scouting dossier.
 */
export function formatProspectEmailBody(data: ProspectFormData): string {
  const notes = data.interestNotes || data.message || 'None provided';
  const parentContact = [
    data.parentName ? `• Parent/Guardian: ${data.parentName}` : null,
    data.parentPhone ? `• Parent Phone: ${data.parentPhone}` : null,
    data.parentEmail ? `• Parent Email: ${data.parentEmail}` : null,
  ].filter(Boolean).join('\n') || '• Parent/Guardian: Not provided';

  return `=====================================================
OKLAHOMA CAVALIERS BASEBALL — PROSPECT PROFILE
=====================================================

--- ATHLETE PERSONAL INFORMATION ---
• Full Name: ${data.fullName || 'Not provided'}
• Email: ${data.email || 'Not provided'}
• Phone: ${data.phone || 'Not provided'}
• Hometown: ${data.cityState || 'Not provided'}
• High School: ${data.highSchool || 'Not provided'}
• Graduation Class: ${data.gradYear || '2026'}

--- PARENT / GUARDIAN CONTACT ---
${parentContact}

--- ATHLETIC & ACADEMIC MEASURABLES ---
• Primary Position: ${data.primaryPosition || 'N/A'}
• Secondary Position: ${data.secondaryPosition || 'N/A'}
• Bats / Throws: ${data.batsThrows || 'N/A'}
• Height: ${data.height || 'N/A'}
• Weight: ${data.weight ? `${data.weight} lbs` : 'N/A'}
• Cumulative GPA: ${data.gpa || 'N/A'}

--- HIGHLIGHT VIDEO / SCOUTING LINK ---
• Video URL / Social Profile: ${data.videoLink || 'None provided'}

--- ATHLETE STATEMENT & GOALS ---
${notes}

=====================================================
Submitted via Oklahoma Cavaliers Post-Graduate Baseball Portal
Sent to: ${TARGET_RECRUITMENT_EMAIL}
=====================================================`;
}

/**
 * Generates the email subject line.
 */
export function formatProspectEmailSubject(data: ProspectFormData): string {
  const name = data.fullName ? data.fullName.trim() : 'Prospect Athlete';
  const pos = data.primaryPosition ? `[${data.primaryPosition}]` : '';
  const grad = data.gradYear ? `'${data.gradYear.slice(-2)}` : '';
  const loc = data.cityState ? `(${data.cityState})` : '';
  return `[Prospect Recruitment Profile] ${name} ${grad} ${pos} ${loc}`.trim();
}

/**
 * Creates a mailto URI ready to trigger the user's default email client.
 */
export function createProspectMailtoUrl(data: ProspectFormData): string {
  const subject = formatProspectEmailSubject(data);
  const body = formatProspectEmailBody(data);
  return `mailto:${TARGET_RECRUITMENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
