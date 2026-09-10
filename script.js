// Link do grupo do WhatsApp — troque aqui se mudar de grupo/canal.
const GROUP_LINK = "https://chat.whatsapp.com/ChPZxOp8ev99ixqtezjXEk?s=cl&p=i&mlu=4&ilr=4";

document.querySelectorAll('.cta-button').forEach((btn) => {
  btn.setAttribute('href', GROUP_LINK);
  btn.setAttribute('target', '_blank');
  btn.setAttribute('rel', 'noopener');
});
