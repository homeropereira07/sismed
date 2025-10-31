// config.js - Configurações do Sistema de Login
const CONFIG = {
    // Configurações de URL
    sistema_principal: 'https://homeropereira07.github.io/sismed/',
    pagina_ofertas: 'https://homeropereira07.github.io/sismed/sismed_oferta.html',
    
    // Configurações de segurança
    max_tentativas: 3,
    tempo_bloqueio: 30, // minutos
    
    // Informações de contato
    desenvolvedor: {
        nome: 'Dr. Homero Pereira',
        telefone: '(98) 98602-0309',
        email: 'homeropereira@outlook.com'
    },
    
    // Mensagens do sistema
    mensagens: {
        login_sucesso: 'Login realizado com sucesso!',
        login_erro: 'Usuário ou senha incorretos.',
        licenca_expirada: 'Sua licença expirou. Entre em contato para renovar.',
        tentativas_esgotadas: 'Tentativas esgotadas. Entre em contato com o suporte.'
    }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
