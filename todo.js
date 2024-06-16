function addItem () {
    var input = $('#tdinput').val().trim();

    if(input !== '') {
        var newItem = $('<li class="list-group-item fs-4 d-flex justify-content-between align-items-center">' + 
            '<input type="checkbox" class="form-check-input me-2" onchange="switchItem(this)">' +
            '<span class="item-text">' + input + '</span>' +
            '<button class="btn btn-light btn-outline-secondary" onclick="deleteItem(this)"><i class="bi bi-trash h4"></i></button>' + '</li>' );
    $('#inProgressList').append(newItem);
    saveLocalStorage();
    $('#tdinput').val('')
    }
}

function switchItem(checkbox) {
    var listItem = $(checkbox).closest('li');

    if (checkbox.checked) {
        listItem.addClass('list-item-group');
        listItem.find('.item-text').css('text-decoration','line-through');
        $('#completedList').append(listItem);
    } else {
        listItem.removeClass('list-item-group');
        listItem.find('.item-text').css('text-decoration', 'none');
        $('#inProgressList').append(newItem);
    }
saveLocalStorage();
}

function deleteItem(deleteIcon) {
    $(deleteIcon).closest('li').remove();
    saveLocalStorage();
}

//save data to local storage

function saveLocalStorage() {
    var inProgressItems = localStorage.getItem('#inProgressList').html();
    var completedItems = localStorage.getItem('#completedList').html();
    localStorage.setItem('inProgressItems', inProgressItems);
    localStorage.setItem('completedItems', completedItems);
}

//load data from local storage

function loadLocalStorage() {
    var inProgressItems = localStorage.getItem('inProgressItems');
    var completedItems = localStorage.getItem('completedItems');
    if(inProgressItems){
        $('#inProgressItems').html(inProgressItems);
    }
    if(completedItems){
        $('#inProgressItems').html(completedItems);
    }

}

//load data from local storage when page is ready

    $(document).ready(function(){
        loadLocalStorage();
    });
