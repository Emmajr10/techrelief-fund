// Animated Progress Bars
document.querySelectorAll(".progress").forEach(bar => {
    let value = bar.getAttribute("data-progress");
    setTimeout(() => {
        bar.style.width = value + "%";
    }, 500);
});

// Donation Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
