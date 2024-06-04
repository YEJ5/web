document.addEventListener('DOMContentLoaded', function() {
    // 로컬 스토리지에서 리뷰 불러오기
    loadReviews();
    
    // 리뷰 추가 기능
    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const author = document.getElementById('review-author').value;
        const content = document.getElementById('review-content').value;
    
        if (author && content) {
            alert('리뷰가 성공적으로 제출되었습니다!');
            document.getElementById('review-form').reset();
        } else {
            alert('모든 필드를 입력해 주세요.');
        }
    });

    function addReview(review) {
        const reviewList = document.getElementById('review-list');
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
    
        const reviewAuthor = document.createElement('p');
        reviewAuthor.classList.add('review-author');
        reviewAuthor.textContent = review.author;
    
        const reviewContent = document.createElement('p');
        reviewContent.textContent = review.content;
    
        reviewElement.appendChild(reviewAuthor);
        reviewElement.appendChild(reviewContent);
        reviewList.appendChild(reviewElement);
    }

    function saveReview(review) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.forEach(function(review) {
            addReview(review);
        });
    }
});
