function addUser() {
    player1_name = document.getElementbyId("player1_name_input").value;
    player2_name = document.getElementbyId("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localsStorage.setItem("player1_name", player2_name);

    window.location = "game_page.html";
}