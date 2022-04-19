import { createServer, Model } from "miragejs"

createServer({
        models: {
            item: Model,
        },

        seeds(server) {
            server.create("item", {id: 1, title: "Velvet pet bed", price: 90, src: '/images/dog_bed.jpg', bestseller: false});
            server.create("item", {id: 2, title: "Trixie koala dog toy", price: 25, src: '/images/koala.jpg', bestseller: false});
            server.create("item", {id: 3, title: "Mucki bird grass", price: 5, src: '/images/grass.jpg', bestseller: false});
            server.create("item", {id: 4, title: "Bunny dwarf HamsterDream", price: 20, src: '/images/bunny_food.jpg', bestseller: true});
            server.create("item", {id: 5, title: "Cat tree La Digue III", price: 150, src: '/images/cat_tree.jpg', bestseller: true});
            server.create("item", {id: 6, title: "Trixie alpaca plush dog toy", price: 49, src: '/images/alpaca.jpg', bestseller: true});
        },

        routes() {
            let newId = 7;
            this.get("/api/items", (schema) => {
                return schema.items.all()
            });

            this.post("/api/items", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                attrs.id = newId++;
                return schema.items.create(attrs)
            })
        },
    });


