document.querySelectorAll("Dog 2").forEach(btn => {
    btn.addEventListener("button","btn-btn-full", () => {
        btn.classList.toggle("fa-solid fa-heart");

     });
});
document.querySelector("#all-pet-btn").addEventListener("click", () => {
    document.querySelectorAll(".pet-btn").forEach(btn => {
        btn.classList.add("solid-icon");

    });
});
document.querySelector("btn-select-previous"),addEventListener("click", () => {
    document.querySelectorAll("fa-solid fa-angle-left").forEach(btn => {
        btn.classList.remove("solid-icon");
     });
 });
 const cards = document.querySelectorAll(".card");
 let selectedIndex = 0;

function updateHighlight () {
    document.querySelectorAll(".card").forEach(card => card.classList.remove("highlights"));
    card[selectedIndex].class.List.add("highglight");
}
document.querySelector("#first-btn").addEventListener("click", () => {
    selectIndex = 0;
});
document.querySelector("last-btn").addEventListener("click", () => {
    selectedIndex = cards.length - 1;
});
document.querySelector("next-btn").addEventListener("click", () => {
    selectedIndex = (selectedIndex + 1) % cards.length;
})
document.querySelector("prev-btn").addEventListener("click", () => {
    selectedIndex = (selectedIndex - 1 + cards.length) % cards.length;
    updateHighlight();
})
document.querySelector("#site-logo").addEventListener("click", () => {
    document.querySelector("site-logo").classList.add("bouncy");
    setTimeout(() => {

    })
})
document.querySelector("site-logo").addEventListener("click", () => {
    document.querySelector("#site-logo").classList.add("bouncy");
    setTimeout(() => {
        document.querySelector("#site-logo").classList.remove("bouncy");       
    }, 1000);
});