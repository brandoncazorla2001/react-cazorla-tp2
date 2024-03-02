const productos = [
    {
        id:1,
        title:"Amarok",
        description:"camioneta pick up",
        stock: 28,
        type: "Pick-Ups",
        imageProduct: {
            firstImage:"../../img/cars/amarok.png",
            secondImage:"../../img/cars/amarok.png"
        },
        price:30000,
    },

    {
        id:2,
        title:"Golf GTI",
        description:"Hatchback deportivo",
        stock: 12,
        type: "Deportivo",
        imageProduct: {
            firstImage:"../../img/cars/amarok.png",
            secondImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-kjoaj&psig=AOvVaw3FfwyfnqbKanZEbQuBzhNa&ust=1709337664369000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiRhpTh0YQDFQAAAAAdAAAAABAI"
        },
        price:32000,
    },

    {
        id:3,
        title:"Passat",
        description:"Sedán ejecutivo",
        stock: 3,
        type: "Coupé",
        imageProduct: {
            firstImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F245%2F696%2Fpng-transparent-2013-volkswagen-passat-car-2012-volkswagen-passat-2014-volkswagen-passat-volkswagen-compact-car-sedan-volkswagen.png&tbnid=cLYSjkWbAFYm9M&vet=12ahUKEwiv65Ke4dGEAxUiB7kGHc09BAIQMygAegQIARBU..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3DVolkswagen%2BPassat&docid=2AP95UtU6I6HPM&w=920&h=690&q=passatpng&ved=2ahUKEwiv65Ke4dGEAxUiB7kGHc09BAIQMygAegQIARBU",
            secondImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F941%2F766%2Fpng-transparent-volkswagen-tiguan-family-car-2018-volkswagen-passat-volkswagen-compact-car-sedan-headlamp.png&tbnid=lFljw1I1PdqZdM&vet=12ahUKEwiv65Ke4dGEAxUiB7kGHc09BAIQMygHegQIARBi..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3Dvw%2Bpassat%2Bb7&docid=WnAxi0LeKhYCMM&w=920&h=419&q=passatpng&ved=2ahUKEwiv65Ke4dGEAxUiB7kGHc09BAIQMygHegQIARBi"
        },
        price:25000,
    },

    {
        id:4,
        title:"Polo",
        description:"Hatchback urbano",
        stock: 13,
        type: "Coupé",
        imageProduct: {
            firstImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fc0.klipartz.com%2Fpngpicture%2F736%2F872%2Fsticker-png-volkswagen-polo-gti-car-fiat-volkswagen-golf-kia-soul-car-compact-car-car-fiat-500-volkswagen-subcompact-car.png&tbnid=qhZVewKwu_VHKM&vet=12ahUKEwiqvZu94dGEAxWaP7kGHV5KDbMQMygDegQIARBX..i&imgrefurl=https%3A%2F%2Fwww.klipartz.com%2Fes%2Fsticker-png-dwaxy&docid=UQCIY9KSIYsreM&w=890&h=590&q=polo%20%20coche%20png&ved=2ahUKEwiqvZu94dGEAxWaP7kGHV5KDbMQMygDegQIARBX",
            secondImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F859%2F58%2Fpng-transparent-volkswagen-polo-2018-toyota-corolla-car-volkswagen-compact-car-sedan-car.png&tbnid=JE0Jy3RygqnaXM&vet=12ahUKEwiqvZu94dGEAxWaP7kGHV5KDbMQMygBegQIARBT..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-strtg&docid=AnZIcbx3oa1W3M&w=920&h=460&q=polo%20%20coche%20png&ved=2ahUKEwiqvZu94dGEAxWaP7kGHV5KDbMQMygBegQIARBT"
        },
        price:22000,
    },

    {
        id:5,
        title:"Arteon",
        description:"Fastback premium",
        stock: 2,
        type: "SUV",
        imageProduct: {
            firstImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F505%2F188%2Fpng-transparent-car-volkswagen-arteon-elegance-volkswagen-arteon-r-line-sedan-car-compact-car-sedan-driving.png&tbnid=W4oUIBbKaIww7M&vet=12ahUKEwjF6M7H4dGEAxX6N7kGHSinDRcQMygAegQIARBM..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3Dvolkswagen%2Barteon&docid=x4XaSqoz1v9gAM&w=920&h=496&q=arteon%20png&ved=2ahUKEwjF6M7H4dGEAxX6N7kGHSinDRcQMygAegQIARBM",
            secondImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.jazelc.com%2Fuploads%2Fgalpinvolkswagen%2FArteon.png&tbnid=JFYEkOSCl8lSjM&vet=12ahUKEwjF6M7H4dGEAxX6N7kGHSinDRcQMygLegQIARBi..i&imgrefurl=https%3A%2F%2Fwww.galpinvolkswagen.com%2F2020-volkswagen-arteon-near-los-angeles-ca%2F&docid=TZF6jibd5FT0lM&w=640&h=480&q=arteon%20png&ved=2ahUKEwjF6M7H4dGEAxX6N7kGHSinDRcQMygLegQIARBi"
        },
        price:12000,
    },

    {
        id:6,
        title:"Jetta",
        description:"Sedán compacto",
        stock: 30,
        type: "SUV",
        imageProduct: {
            firstImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fc0.klipartz.com%2Fpngpicture%2F454%2F721%2Fgratis-png-2016-volkswagen-jetta-car-volkswagen-passat-2018-volkswagen-jetta-volkswagen.png&tbnid=83tZXEkpom1AYM&vet=12ahUKEwi1w7_Y4dGEAxW2ArkGHecIA1EQMygDegQIARBh..i&imgrefurl=https%3A%2F%2Fwww.klipartz.com%2Fes%2Fsearch%3Fq%3D2018%2BVolkswagen%2BJetta&docid=7MJDG8aTK3JDOM&w=890&h=480&q=jetta%20png&ved=2ahUKEwi1w7_Y4dGEAxW2ArkGHecIA1EQMygDegQIARBh",
            secondImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F483%2F993%2Fpng-clipart-2019-volkswagen-jetta-used-car-2017-volkswagen-jetta-volkswagen-compact-car-sedan.png&tbnid=75Nzytv9guLERM&vet=12ahUKEwi1w7_Y4dGEAxW2ArkGHecIA1EQMygEegQIARBj..i&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fpng-hdivx&docid=Mh1qwHw23aj4QM&w=900&h=422&q=jetta%20png&ved=2ahUKEwi1w7_Y4dGEAxW2ArkGHecIA1EQMygEegQIARBj"
        },
        price:20000,
    },

    {
        id:7,
        title:"Atlas",
        description:" SUV familiar",
        stock: 5,
        type: "Pick-Ups",
        imageProduct: {
            firstImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F37%2F313%2Fpng-transparent-2018-volkswagen-atlas-se-suv-sport-utility-vehicle-car-volkswagen-compact-car-car-volkswagen.png&tbnid=vw24K_1WKsvRuM&vet=12ahUKEwis-5_i4dGEAxVzM7kGHa7_D0YQMygAegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3Datlas%2Bde%2Bvolkswagen&docid=4luDRcJFz8ttkM&w=920&h=477&q=atlas%20cochepng&ved=2ahUKEwis-5_i4dGEAxVzM7kGHa7_D0YQMygAegQIARBP",
            secondImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F974%2F21%2Fpng-transparent-2018-volkswagen-atlas-car-sport-utility-vehicle-volkswagen-beetle-volkswagen-car-mode-of-transport-automobile-repair-shop.png&tbnid=VUxigdCbEKr2_M&vet=12ahUKEwis-5_i4dGEAxVzM7kGHa7_D0YQMygEegQIARBX..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-yiwad&docid=2cd1MwaI3RF2bM&w=920&h=400&q=atlas%20cochepng&ved=2ahUKEwis-5_i4dGEAxVzM7kGHa7_D0YQMygEegQIARBX"
        },
        price:17000,
    },

    {
        id:8,
        title:"Amarok",
        description:"Camioneta pick-up",
        stock: 15,
        type: "Pick-Ups",
        imageProduct: {
            firstImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F22%2F424%2Fpng-transparent-volkswagen-amarok-car-volkswagen-passat-pickup-truck-volkswagen-truck-volkswagen-vehicle.png&tbnid=d4QTVLBax5wSFM&vet=12ahUKEwidgdft4dGEAxUtBrkGHYnmCqkQMygAegQIARBV..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3DVolkswagen%2BAmarok&docid=grX57mfEjX6Q4M&w=920&h=518&q=amarok%20cochepng&ved=2ahUKEwidgdft4dGEAxUtBrkGHYnmCqkQMygAegQIARBV",
            secondImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F22%2F424%2Fpng-transparent-volkswagen-amarok-car-volkswagen-passat-pickup-truck-volkswagen-truck-volkswagen-vehicle.png&tbnid=d4QTVLBax5wSFM&vet=12ahUKEwidgdft4dGEAxUtBrkGHYnmCqkQMygAegQIARBV..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3DVolkswagen%2BAmarok&docid=grX57mfEjX6Q4M&w=920&h=518&q=amarok%20cochepng&ved=2ahUKEwidgdft4dGEAxUtBrkGHYnmCqkQMygAegQIARBV"
        },
        price:30000,
    },

    {
        id:9,
        title:"Up!",
        description:"City car",
        stock: 15,
        type: "Coupé",
        imageProduct: {
            firstImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F586%2F59%2Fpng-transparent-volkswagen-up-car-volkswagen-gol-vw-saveiro-volkswagen-compact-car-car-pickup-truck.png&tbnid=cAZXTTYlru6-gM&vet=12ahUKEwivz9z34dGEAxUvCrkGHcOJBWIQMygAegQIARBS..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-spfgu&docid=XHa8ZT-OW0SF2M&w=920&h=543&q=up%20coche%20png&ved=2ahUKEwivz9z34dGEAxUvCrkGHcOJBWIQMygAegQIARBS",
            secondImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F586%2F59%2Fpng-transparent-volkswagen-up-car-volkswagen-gol-vw-saveiro-volkswagen-compact-car-car-pickup-truck.png&tbnid=cAZXTTYlru6-gM&vet=12ahUKEwivz9z34dGEAxUvCrkGHcOJBWIQMygAegQIARBS..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-spfgu&docid=XHa8ZT-OW0SF2M&w=920&h=543&q=up%20coche%20png&ved=2ahUKEwivz9z34dGEAxUvCrkGHcOJBWIQMygAegQIARBS"
        },
        price:15000,
    },

    {
        id:10,
        title:"ID.4",
        description:"SUV eléctrica",
        stock: 2,
        type: "SUV",
        imageProduct: {
            firstImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.roulonselectrique.ca%2Fmedia%2Fimages%2FVolkswagen-ID4.width-768.png&tbnid=YZ6VgYe6kobgIM&vet=12ahUKEwizib3-4dGEAxWTOLkGHTz5DYsQMygCegQIARBU..i&imgrefurl=https%3A%2F%2Fwww.roulonselectrique.ca%2Fen%2Fcalculator%2Fprojections%2F20000_15000_250000_4-8-10-14%2F163%2F&docid=4LT0jSPZ9oPAYM&w=768&h=436&q=id.4%20png&ved=2ahUKEwizib3-4dGEAxWTOLkGHTz5DYsQMygCegQIARBU",
            secondImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.roulonselectrique.ca%2Fmedia%2Fimages%2FVolkswagen-ID4.width-768.png&tbnid=YZ6VgYe6kobgIM&vet=12ahUKEwizib3-4dGEAxWTOLkGHTz5DYsQMygCegQIARBU..i&imgrefurl=https%3A%2F%2Fwww.roulonselectrique.ca%2Fen%2Fcalculator%2Fprojections%2F20000_15000_250000_4-8-10-14%2F163%2F&docid=4LT0jSPZ9oPAYM&w=768&h=436&q=id.4%20png&ved=2ahUKEwizib3-4dGEAxWTOLkGHTz5DYsQMygCegQIARBU"
        },
        price:18000,
    },
];

export default productos;