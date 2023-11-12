var comments = [];

function addComment() {
    var nickname = document.getElementById("nickname").value;
    var comment = document.getElementById("comment").value;
    var currentDate = new Date().toLocaleDateString();

    comments.unshift({
        nickname: nickname,
        comment: comment,
        date: currentDate
    });

    document.getElementById("nickname").value = "";
    document.getElementById("comment").value = "";

    displayComments();
}

function displayComments() {
    var commentsContainer = document.getElementById("comments-container");

    commentsContainer.innerHTML = "";

    var displayLimit = Math.min(2, comments.length);
    for (var i = 0; i < displayLimit; i++) {
        var reversedIndex = comments.length - 1 - i;
        var commentHtml = `<div class="comment">
                              <p><strong>${comments[reversedIndex].nickname}</strong> - ${comments[reversedIndex].date}</p>
                              <p>${comments[reversedIndex].comment}</p>
                            </div>`;
        commentsContainer.innerHTML += commentHtml;
    }

    var showMoreButton = document.getElementById('show-more-button');
    showMoreButton.style.display = comments.length > 2 ? 'block' : 'none';
}


function showMoreComments() {
  
    var commentsContainer = document.getElementById('comments-container');

    var displayedComments = commentsContainer.getElementsByClassName('comment').length;

    for (var i = displayedComments; i < displayedComments + 2 && i < comments.length; i++) {
        var reversedIndex = comments.length - 1 - i;
        var comment = comments[reversedIndex];
        var commentElement = createCommentElement(comment);
        commentsContainer.appendChild(commentElement);
    }

    var showMoreButton = document.getElementById('show-more-button');
    if (displayedComments + 2 >= comments.length) {
        showMoreButton.style.display = 'none';
    }
}

function createCommentElement(comment) {
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    
    var nicknameElement = document.createElement('p');
    nicknameElement.innerHTML = `<strong>${comment.nickname}</strong> - ${comment.date}`;
    
    var textElement = document.createElement('p');
    textElement.textContent = comment.comment;
    
    commentElement.appendChild(nicknameElement);
    commentElement.appendChild(textElement);
    
    return commentElement;
}

document.addEventListener("DOMContentLoaded", function() {
    displayComments();
});
