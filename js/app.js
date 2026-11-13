/**
 * Aplicação Principal - Página Setorial FAMINAS
 * Extensão Universitária • Engenharia de Software • ADS
 */

import { initModalController } from './modal-controller.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o gerenciador de modais institucionais (Sobre, Termos, Privacidade)
  initModalController();

  document.querySelector('.back-to-top-btn')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  console.log('[InfoHub Setorial] Template institucional inicializado com sucesso.');

  /* ==========================================================================
     ESPAÇO PARA LÓGICA ESPECÍFICA DOS ESTUDANTES (OPCIONAL):
     Exemplos de funcionalidades que vocês podem adicionar:
     - Filtragem de dúvidas frequentes ou cálculo de prazos
     - Alternância de visualizações ou accordions interativos
     ========================================================================== */
});
