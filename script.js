var second = 5, newText;
var modal = document.getElementById("myModal");
var openBtn = document.getElementById("openModal");
var closeBtn = document.getElementById("btnNo");
var changeColor = document.getElementById("btnYes");

openBtn.onclick = function() { modal.style.display = "block"; }
closeBtn.onclick = function() { modal.style.display = "none"; }
window.onclick = function(event) 
{
    if (event.target == modal)
        modal.style.display = "none";
}
changeColor.onclick = function()
{
    modal.style.display = "none";
    newText = `<input type="button" class="changeButtonColor" value="Цвет изменен">`;
    document.querySelector('.openModalBtn').innerHTML = newText;
    timer();
}
function timer()
{
    second--;
    let interval = setTimeout('timer()', 1000);
    if(second == -1)
    {
        second = 5;
        newText = `<input type="button" id="openModal" class="openModalWindow" value="Изменить цвет">`;
        document.querySelector('.openModalBtn').innerHTML = newText;
        clearInterval(interval);
        window.location.reload();
    }
    document.getElementById('timePassed').innerHTML = second;
}