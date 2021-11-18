// async function and dom method used for ice and fire 

var board = document.createElement("div")

board.style.width = "1500px"
board.style.flexDirection = "row"
board.style.display = "flex"
board.style.backgroundColor = "gray"
board.style.flexWrap = "wrap"

async function getalldata() {
    try {
        var ice = await fetch("https://www.anapioficeandfire.com/api/books")
        var fire = await ice.json();
        console.log(fire);
        fire.forEach(function (element) {


            var card = document.createElement("div")
            // card.innerText = "BOOK NAME :" + " " + element.name;
            card.style.backgroundColor = "black";
            card.style.width = "400px"
                var bold=document.createElement("b")
                bold.innerText = "BOOK NAME :" + " " + element.name;
                bold.style.color="white"
                bold.style.fontSize="23px"
                card.appendChild(bold)
                card.style.color="gray"
            card.style.height = "400px"
            card.style.textAlign = "center"
            card.style.paddingTop = "50px"
            card.style.marginBottom = "25px";
            card.style.marginRight = "15px";
            card.style.marginLeft = "25px";
            card.style.marginTop = "25px"

            board.appendChild(card)

            var box = document.createElement("p")
            box.innerText = "AUTHOR NAME :" + " " + element.authors;
            card.appendChild(box)


            var box1 = document.createElement("p")
            box1.innerText = "PUBLISHER NAME :" + " " + element.publisher;
            card.appendChild(box1)


            var box2 = document.createElement("p")
            box2.innerText = "No OF PAGES :" + " " + element.numberOfPages;
            card.appendChild(box2)


            var box3 = document.createElement("p")
            box3.innerText = "RELEASED DATE :" + " " + element.released;
            card.appendChild(box3)


            var box4 = document.createElement("p")
            box4.innerText = "ISBN No :" + element.isbn;
            card.appendChild(box4)


            var box5 = document.createElement("p")
            box5.innerText = "CHARACTER :" + " " + element.characters[0];
            card.appendChild(box5)


            var box6 = document.createElement("p")
            box6.innerText = element.characters[1];
            card.appendChild(box6)


            var box7 = document.createElement("p")
            box7.innerText = element.characters[2];
            card.appendChild(box7)


            var box8 = document.createElement("p")
            box8.innerText = element.characters[3];
            card.appendChild(box8)


            var box9 = document.createElement("p")
            box9.innerText = element.characters[4];
            card.appendChild(box9);



        });

    } catch (error) {
        console.log(error)
    }
}
getalldata()


document.body.appendChild(board)
