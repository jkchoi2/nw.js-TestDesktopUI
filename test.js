function loadPage(page, buttonId) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('page').innerHTML = html;

            // Active 상태 관리
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => button.classList.remove('active'));
            document.getElementById(buttonId).classList.add('active');
        })
        .catch(error => {
            console.error('There was a problem loading the page:', error);
            document.getElementById('content').innerHTML = '<p>페이지를 로드할 수 없습니다.</p>';
        });
}