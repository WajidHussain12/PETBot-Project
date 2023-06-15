var Glass_Bottle = [
    {
        img: "images/Glass Images/g1.jpg",
        details: `W&P Porter Glass Water Bottle w/ Protective Silicone Sleeve`,
        currency: "Price Pk",
        price: "320", 
    },
    {
        img: "images/Glass Images/g2.jpg",
        details: `Ello Syndicate Glass Water Bottle with One-Touch Flip Lid`,
        currency: "Price Pk",
        price: "470", 
    },{
        img: "images/Glass Images/g3.jpg",
        details: `BlenderBottle Mantra Glass Shaker`,
        currency: "Price Pk",
        price: "874", 
    },
    {
        img: "images/Glass Images/g4.jpg",
        details: `Bormioli Rocco Giara Bottle`,
        currency: "Price Pk",
        price: "560", 
    },    {
        img: "images/Glass Images/g5.jpg",
        details: `LOCK & LOCK I Shape Silicone Heat Resistant Borosilicate Glass Sports`,
        currency: "Price Pk",
        price: "270", 
    },
    {
        img: "images/Glass Images/g6.jpg",
        details: ` Zulu Atlas Glass Water Bottle with Silicone Sleeve`,
        currency: "Price Pk",
        price: "950", 
    }
]


for (i = 0; i < Glass_Bottle.length; i++) { document.getElementById("glass").innerHTML +=

`
 <div class="border" ;">
    <img src="${Glass_Bottle[i].img}" onclick="openFullImg(this.src)" />
    <p class="detail">
        ${Glass_Bottle[i].details}
    </p>
    <p class="currency">
        ${Glass_Bottle[i].currency}:${Glass_Bottle[i].price}/=
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