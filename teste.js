let listaCarros = [ 
    {
        "nome": "Drako GTE",
        "img": "images/drako-gte.jpg",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim nostrum architecto cupiditate qui incidunt illo iste minus perferendis assumenda soluta porro ipsa maiores placeat, officia officiis optio dolores? Hic eaque odio magni sint quia. Ab quam architecto, incidunt alias id natus tenetur consectetur accusantium, ad quaerat quia dolores deleniti enim earum ut quo odio delectus et illum eligendi saepe hic quod assumenda. Sint, ad aperiam. Consequuntur a libero accusamus soluta minus! Fugiat animi nesciunt accusantium voluptatibus esse similique exercitationem, sequi qui ab minima dolor voluptas maxime sit perspiciatis voluptatum dicta recusandae eos temporibus? Ducimus fuga at recusandae molestias suscipit."   
    },,

    {
        "nome": "De Tomaso P72",
        "img": "images/De Tomaso P72.jpg",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim nostrum architecto cupiditate qui incidunt illo iste minus perferendis assumenda soluta porro ipsa maiores placeat, officia officiis optio dolores? Hic eaque odio magni sint quia. Ab quam architecto, incidunt alias id natus tenetur consectetur accusantium, ad quaerat quia dolores deleniti enim earum ut quo odio delectus et illum eligendi saepe hic quod assumenda. Sint, ad aperiam. Consequuntur a libero accusamus soluta minus! Fugiat animi nesciunt accusantium voluptatibus esse similique exercitationem, sequi qui ab minima dolor voluptas maxime sit perspiciatis voluptatum dicta recusandae eos temporibus? Ducimus fuga at recusandae molestias suscipit."
    },,

    {
        "nome": "Ferrari LaFerrari",
        "img": "images/Ferrari La Ferrari.jpg",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim nostrum architecto cupiditate qui incidunt illo iste minus perferendis assumenda soluta porro ipsa maiores placeat, officia officiis optio dolores? Hic eaque odio magni sint quia. Ab quam architecto, incidunt alias id natus tenetur consectetur accusantium, ad quaerat quia dolores deleniti enim earum ut quo odio delectus et illum eligendi saepe hic quod assumenda. Sint, ad aperiam. Consequuntur a libero accusamus soluta minus! Fugiat animi nesciunt accusantium voluptatibus esse similique exercitationem, sequi qui ab minima dolor voluptas maxime sit perspiciatis voluptatum dicta recusandae eos temporibus? Ducimus fuga at recusandae molestias suscipit."
    },,

    {
        "nome": "Paganini Huayra",
        "img": "images/Paganini Huayra.jpg",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim nostrum architecto cupiditate qui incidunt illo iste minus perferendis assumenda soluta porro ipsa maiores placeat, officia officiis optio dolores? Hic eaque odio magni sint quia. Ab quam architecto, incidunt alias id natus tenetur consectetur accusantium, ad quaerat quia dolores deleniti enim earum ut quo odio delectus et illum eligendi saepe hic quod assumenda. Sint, ad aperiam. Consequuntur a libero accusamus soluta minus! Fugiat animi nesciunt accusantium voluptatibus esse similique exercitationem, sequi qui ab minima dolor voluptas maxime sit perspiciatis voluptatum dicta recusandae eos temporibus? Ducimus fuga at recusandae molestias suscipit."
    },,

    {
        "nome": "Mclaren Elva",
        "img": "images/Mclaren Elva.jpg",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim nostrum architecto cupiditate qui incidunt illo iste minus perferendis assumenda soluta porro ipsa maiores placeat, officia officiis optio dolores? Hic eaque odio magni sint quia. Ab quam architecto, incidunt alias id natus tenetur consectetur accusantium, ad quaerat quia dolores deleniti enim earum ut quo odio delectus et illum eligendi saepe hic quod assumenda. Sint, ad aperiam. Consequuntur a libero accusamus soluta minus! Fugiat animi nesciunt accusantium voluptatibus esse similique exercitationem, sequi qui ab minima dolor voluptas maxime sit perspiciatis voluptatum dicta recusandae eos temporibus? Ducimus fuga at recusandae molestias suscipit."
    },,

    {
        "nome": "Czinger 21C",
        "img": "images/Czinger 21C.jpg",
        "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim nostrum architecto cupiditate qui incidunt illo iste minus perferendis assumenda soluta porro ipsa maiores placeat, officia officiis optio dolores? Hic eaque odio magni sint quia. Ab quam architecto, incidunt alias id natus tenetur consectetur accusantium, ad quaerat quia dolores deleniti enim earum ut quo odio delectus et illum eligendi saepe hic quod assumenda. Sint, ad aperiam. Consequuntur a libero accusamus soluta minus! Fugiat animi nesciunt accusantium voluptatibus esse similique exercitationem, sequi qui ab minima dolor voluptas maxime sit perspiciatis voluptatum dicta recusandae eos temporibus? Ducimus fuga at recusandae molestias suscipit."
    },
]

    listaCarros.map((carro) => {
        let cardCarro = document.getElementById("cards");

        cardCarro.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${carro.img}," class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${carro.nome},</h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    },)