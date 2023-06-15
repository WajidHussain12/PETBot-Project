var Ceramic_Bottle = [
    {
        img: "images/Ceramic Images/c1.jpg",
        details: `Rachael Ray Solid Glaze Ceramics EVOO Olive Oil Bottle
        `,
        currency: "Price Pk",
        price: "320", 
    },
    {
        img: "images/Ceramic Images/c2.jpg",
        details: `Emile Henry Made In France Oil Bottle,Blue Flame`,
        currency: "Price Pk",
        price: "470", 
    },{
        img: "images/Ceramic Images/c3.jpg",
        details: `Kyocera Travel Mug with Twist Top, 12oz, Pearl White`,
        currency: "Price Pk",
        price: "874", 
    },
    {
        img: "images/Ceramic Images/c4.jpg",
        details: `Bia Cordon Bleu Inc Bia Cordon Bleu`,
        currency: "Price Pk",
        price: "560", 
    },    {
        img: "images/Ceramic Images/c5.jpg",
        details: `BUILT Ceramic Water Bottle with Cork Lid, 17-Ounce, Green Reactive`,
        currency: "Price Pk",
        price: "270", 
    },
    {
        img: "images/Ceramic Images/c6.jpg",
        details: ` CERAMICHE D'ARTE PARRINI - Italian Ceramic Art Pottery`,
        currency: "Price Pk",
        price: "950", 
    }
]


for (i = 0; i < Ceramic_Bottle.length; i++) { document.getElementById("ceramic").innerHTML +=

`
 <div class="border" ;">
    <img src="${Ceramic_Bottle[i].img}" onclick="openFullImg(this.src)" />
    <p class="detail">
        ${Ceramic_Bottle[i].details}
    </p>
    <p class="currency">
        ${Ceramic_Bottle[i].currency}:${Ceramic_Bottle[i].price}/=
    </p>
    <div class="pdfdiv">
    <P>
    Detail PDF Download Here
</P>
<a class="pdf" href="pdf/PlasticBottles.pdf"><img src="images/pdf icon/PDF_file_icon.png" ></a>
</div>
    </div>
    `
}