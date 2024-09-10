// hack.ts
interface FormData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string;
  }
  
  const form = document.getElementById('resume-form') as HTMLFormElement;
  const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
  const resumeContent = document.getElementById('resume-content') as HTMLDivElement;
  
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    
    const formData: FormData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      education: (document.getElementById('education') as HTMLTextAreaElement).value,
      workExperience: (document.getElementById('workExperience') as HTMLTextAreaElement).value,
      skills: (document.getElementById('skills') as HTMLTextAreaElement).value,
    };
  
    displayResume(formData);
  });
  
  function displayResume(data: FormData) {
    resumeContent.innerHTML = `
      <h3>Name: ${data.name}</h3>
      <p>Email: ${data.email}</p>
      <p><strong>Education:</strong> ${data.education}</p>
      <p><strong>Work Experience:</strong> ${data.workExperience}</p>
      <p><strong>Skills:</strong> ${data.skills}</p>
    `;
  
    resumeDisplay.classList.remove('hidden');
  }
  
  // Editable feature
  resumeContent.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement;
    
    if (target.tagName === 'P' || target.tagName === 'H3') {
      const currentText = target.innerText;
      const input = document.createElement('textarea');
      input.value = currentText;
      target.innerHTML = '';
      target.appendChild(input);
  
      input.addEventListener('blur', () => {
        target.innerHTML = input.value;
      });
    }
  });
  