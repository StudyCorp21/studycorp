// StudyCorp V1.1 — réception des propositions
// 1) Créez un formulaire Formspree.
// 2) Remplacez la valeur ci-dessous par votre endpoint, par exemple :
//    https://formspree.io/f/abcdefgh
const STUDYCORP_FORM_ENDPOINT = "https://formspree.io/f/mdekyobn";

const form = document.querySelector('#proposal');
const statusBox = document.querySelector('#form-status');
const submitButton = form.querySelector('.submit-button');
const relationship = form.elements.relationship;
const otherWrap = document.querySelector('#relationship-other-wrap');
const otherInput = form.elements.relationship_other;

relationship.addEventListener('change', () => {
  const isOther = relationship.value === 'Autre';
  otherWrap.hidden = !isOther;
  otherInput.required = isOther;
  if (!isOther) otherInput.value = '';
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  statusBox.className = 'form-status';
  statusBox.textContent = '';

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (!STUDYCORP_FORM_ENDPOINT.startsWith('https://formspree.io/f/')) {
    statusBox.classList.add('error');
    statusBox.textContent = "Le formulaire StudyCorp n'est pas encore relié à l'adresse de réception. Le gestionnaire doit configurer l'endpoint Formspree dans js/proposer.js.";
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Envoi en cours…';

  const data = new FormData(form);
  data.append('_subject', `Nouvelle proposition StudyCorp — ${data.get('program')}`);
  data.append('submitted_from', window.location.href);

  try {
    const response = await fetch(STUDYCORP_FORM_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (!response.ok) throw new Error('Submission failed');

    form.reset();
    otherWrap.hidden = true;
    otherInput.required = false;
    statusBox.classList.add('success');
    statusBox.textContent = "Merci. Votre proposition a bien été transmise à StudyCorp. Elle sera vérifiée avant toute publication.";
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (error) {
    statusBox.classList.add('error');
    statusBox.textContent = "L'envoi n'a pas abouti. Vérifiez votre connexion puis réessayez. Si le problème persiste, l'équipe StudyCorp devra vérifier la configuration du formulaire.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Envoyer la proposition';
  }
});
