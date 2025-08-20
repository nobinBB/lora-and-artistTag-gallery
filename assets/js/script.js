
        // タブ切り替え機能
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // すべてのタブボタンとコンテンツを非アクティブにする
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // クリックされたボタンと対応するコンテンツをアクティブにする
                button.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
                
                // アニメーションを再生
                const activeGrid = document.querySelector(`#${targetTab} .gallery-grid`);
                activeGrid.style.animation = 'none';
                setTimeout(() => {
                    activeGrid.style.animation = 'fadeInUp 0.6s ease';
                }, 10);
            });
        });

        // モーダル機能
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const closeModal = document.querySelector('.close-modal');

        // すべての画像アイテムにクリックイベントを追加
        document.addEventListener('click', (e) => {
            if (e.target.closest('.gallery-item')) {
                const img = e.target.closest('.gallery-item').querySelector('img');
                modal.classList.add('active');
                modalImg.src = img.src;
                modalImg.alt = img.alt;
            }
        });

        // モーダルを閉じる
        closeModal.addEventListener('click', (e) => {
            e.stopPropagation();
            modal.classList.remove('active');
        });

        // モーダル背景クリックで閉じる
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // ESCキーでモーダルを閉じる
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });

        // ページ読み込み時のアニメーション
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 1s ease';
                document.body.style.opacity = '1';
            }, 100);
        });
