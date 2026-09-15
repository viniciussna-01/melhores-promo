const CTAS = document.querySelectorAll('[data-cta]');

CTAS.forEach((button) => {
  button.addEventListener('click', () => {
    const source = button.dataset.cta || 'unknown';

    // Pronto para Google Analytics/Meta Pixel futuramente.
    // Ex.: window.gtag?.('event', 'join_whatsapp', { source });
    console.info('[Melhores Promo] CTA WhatsApp:', source);
  });
});
