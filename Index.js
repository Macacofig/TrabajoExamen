document.getElementById("colorboton").addEventListener("click", function () 
{
    const container = document.querySelector(".container");
    const color = container.style.backgroundColor;

    if (color === "rgb(231, 76, 60)") 
    {
        container.style.backgroundColor = "white";
    } 
    else 
    {
        container.style.backgroundColor = "rgb(231, 76,60)";
    }
});