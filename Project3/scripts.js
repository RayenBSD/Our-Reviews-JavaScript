onload = () => {
    var counter = 0;
    var people = [
        {
            image: "./images/Anna_Johnson.jpg",
            name: "Anna Johnson",
            job: "web designer",
            description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
        },
        {
            image: "./images/Bill_Anderson.jpg",
            name: "Bill Anderson",
            job: "the boss",
            description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
        },
        {
            image: "./images/Peter_Jones.jpg",
            name: "Peter Jones",
            job: "intern",
            description: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
        },
        {
            image: "./images/Susan_Smith.jpg",
            name: "susan smith",
            job: "web developer",
            description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry."
        }
    ]
    getPeople(counter, people);
    document.getElementById("next").addEventListener("click", () => {
        (counter !== 3) ? counter++ : counter = 0;
        getPeople(counter, people);
    });
    document.getElementById("previous").addEventListener("click", () => {
        (counter !== 0) ? counter-- : counter = 3;
        getPeople(counter, people);
    });
}

function getPeople(c, p) {

    let img = document.getElementById("img");
    img.src = p[c].image;
    img.alt = p[c].name + " image";

    document.getElementById("name").textContent = p[c].name;
    document.getElementById("job").textContent = p[c].job;
    document.getElementById("description").textContent = p[c].description;
}