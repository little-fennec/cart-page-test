import { createServer, Model } from "miragejs"

createServer({
        models: {
            item: Model,
        },

        seeds(server) {
            server.create("item", {id: 1, title: "Velvet pet bed", price: 90, src: 'https://i2.piccy.info/i9/7f41d85d930863a0655dab52b8b765ae/1645605128/6436/1459510/dog_bed_240.jpg', bestseller: false});
            server.create("item", {id: 2, title: "Trixie koala dog toy", price: 25, src: 'https://i2.piccy.info/i9/e9428ad11f1541f19ce68f19764de100/1645605175/7549/1459510/koala_240.jpg', bestseller: false});
            server.create("item", {id: 3, title: "Mucki bird grass", price: 5, src: 'https://i2.piccy.info/i9/fa7829cb58744754844ccb3c4d397d4d/1645605155/9854/1459510/grass_240.jpg', bestseller: false});
            server.create("item", {id: 4, title: "Bunny dwarf HamsterDream", price: 20, src: 'https://i2.piccy.info/i9/2e1150a4ff0fca3903e6b431cc00bcb0/1645604912/7734/1459510/74287bunny_food_240.jpg', bestseller: true});
            server.create("item", {id: 5, title: "Cat tree La Digue III", price: 150, src: 'https://i2.piccy.info/i9/63aebba8224d95a0d67cca373138dc88/1645605102/4534/1459510/Cat_tree_240.jpg', bestseller: true});
            server.create("item", {id: 6, title: "Trixie alpaca plush dog toy", price: 49, src: 'https://i2.piccy.info/i9/f9e5f659665784ee47b92c4d22aa00fb/1645604604/5074/1459510/alpaca_240.jpg', bestseller: true});
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


