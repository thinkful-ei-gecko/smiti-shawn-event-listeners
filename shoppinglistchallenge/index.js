

function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(){
        $(this).closest('li').remove()
    })
}
console.log('load');

$(deleteItem)