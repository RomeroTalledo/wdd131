document.addEventListener("DOMContentLoaded", () => {
    // Alternar menú del encabezado
    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");
    const nameHeader = document.querySelector(".nameHeader");

    hamButton.addEventListener("click", () => {
        [navigation, hamButton, nameHeader].forEach((el) =>
            el.classList.toggle("open")
        );
    });

    const chessPieces = [
        {
            pieceName: "Pawn",
            color: "White",
            value: 1,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg",
            width: "100px",
            height: "100px",
        },
        {
            pieceName: "Knight",
            color: "White",
            value: 3,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
            width: "100px",
            height: "100px",
        },
        {
            pieceName: "Bishop",
            color: "Black",
            value: 3,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
            width: "100px",
            height: "100px",
        },
        {
            pieceName: "Rook",
            color: "Black",
            value: 5,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg",
            width: "100px",
            height: "100px",
        },
        {
            pieceName: "Queen",
            color: "White",
            value: 9,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg",
            width: "100px",
            height: "100px",
        },
        {
            pieceName: "King",
            color: "Black",
            value: Infinity,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
            width: "100px",
            height: "100px",
        },
    ];

    const container = document.querySelector(".container.home");
    const titleName = document.querySelector(".title");
    const navLinks = document.querySelectorAll(".navigation a");

    const displayPieces = (filteredPieces) => {
        container.innerHTML = filteredPieces
            .map(
                (piece) => `
                <div class="piece-card">
                    <img src="${piece.imageUrl}" loading="lazy" width="${piece.width}" height="${piece.height}" alt="${piece.pieceName}">
                    <div class="piece-info">
                        <h2>${piece.pieceName}</h2>
                        <p><strong>Color:</strong> ${piece.color}</p>
                        <p><strong>Value:</strong> ${piece.value === Infinity ? "Infinity" : piece.value}</p>
                    </div>
                </div>
            `
            )
            .join("");
    };

    const filterPieces = (criteria) => {
        const filters = {
            menor: (piece) => piece.value < 4,
            mayor: (piece) => piece.value >= 4 && piece.value !== Infinity,
            rey: (piece) => piece.pieceName.toLowerCase() === "king",
        };
        titleName.textContent = criteria
            ? `Pieces - ${criteria.charAt(0).toUpperCase() + criteria.slice(1)}`
            : "All Pieces";
        displayPieces(criteria ? chessPieces.filter(filters[criteria]) : chessPieces);
    };

    navLinks.forEach((link) =>
        link.addEventListener("click", (e) => {
            e.preventDefault();
            navLinks.forEach((nav) => nav.classList.remove("active"));
            e.target.classList.add("active");
            filterPieces(e.target.id);
        })
    );

    filterPieces();
});
