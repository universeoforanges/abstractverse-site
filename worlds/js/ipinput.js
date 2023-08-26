function createError(code)
{
    var errortext = document.getElementById("errtext");
    errortext.innerHTML = `⛔ An error occured. Error Code: ${code}`;
    errortext.style.display = "block";
}