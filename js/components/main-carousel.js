document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    const downloadButtonMobile = document.getElementById('downloadButtonMobile');

    // Função para baixar a página
    function downloadPage() {
        const htmlContent = document.documentElement.outerHTML;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'mariana_silva_page.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    // Adicionando evento de clique ao botão de download
    downloadButton.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do botão
        downloadPage();
    });

    downloadButtonMobile.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do botão
        downloadPage();
    });
});
