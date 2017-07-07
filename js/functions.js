function showToggleMenu() {
    $('#toggleMenu').slideToggle()
    var obj = $("#toggleMenuButton").find("img");
    var src = obj.attr('src');
    var ind = src.lastIndexOf("/");
    var icon_name = src.substring((ind + 1), src.length);
    obj.attr({
        "src": icon_name == "ico_menu.svg" ? "./icons/ico_menu_close.svg" : "./icons/ico_menu.svg"
    });
}

function toggleSearchBox() {
    $('#searchWrapper').toggle();
    $("#searchInput").focus()
}