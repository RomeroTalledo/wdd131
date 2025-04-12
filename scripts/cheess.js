document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button-container button");
    const topics = {
      history: "Chess originated in India during the 6th century.",
      moves: "The Queen's Gambit and Sicilian Defense are iconic moves.",
      rules: "Chess is a strategy game played by two players on an 8x8 board."
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const topic = button.getAttribute("data-topic");
        const message = topics[topic] || "Coming soon!";
        alert(`${message}`);
      });
    });

    const form = document.getElementById("subscribe-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;

      const user = {
        email: email,
        date: new Date().toISOString()
      };

      let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
      subscribers.push(user);
      localStorage.setItem("subscribers", JSON.stringify(subscribers));

      alert(`Thanks for subscribing, ${email}!`);
      form.reset();
    });
  });