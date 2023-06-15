var Plastic_Bottle = [
    {
        img: "images/Plastic Images/p1.png",
        details: `Simple Plastic Water Bottles`,
        currency: "Price Pk",
        price: "326", 
    },
    {
        img: "images/Plastic Images/p2.png",
        details: `Inverted Plastic Squeeze Bottle`,
        currency: "Price Pk",
        price: "540", 
    },{
        img: "images/Plastic Images/p3.png",
        details: `Wide Mouth Reagent Bottle`,
        currency: "Price Pk",
        price: "740", 
    },
    {
        img: "images/Plastic Images/p4.png",
        details: `Brita Plastic Water Filter Bottle`,
        currency: "Price Pk",
        price: "950", 
    },    {
        img: "images/Plastic Images/p5.png",
        details: `BPA-Free Plastic Water Bottle`,
        currency: "Price Pk",
        price: "560", 
    },
    {
        img: "images/Plastic Images/p6.png",
        details: `Recycled Plastic Water Bottle`,
        currency: "Price Pk",
        price: "1120", 
    }
]



for (i = 0; i < Plastic_Bottle.length; i++) { document.getElementById("plastic").innerHTML +=

`
 <div class="border" ;">
    <img src="${Plastic_Bottle[i].img}" onclick="openFullImg(this.src)" />
    <p class="detail">
        ${Plastic_Bottle[i].details}
    </p>
    <p class="currency">
        ${Plastic_Bottle[i].currency}:${Plastic_Bottle[i].price}/=
    </p>
    <div class="pdfdiv">
    <P>
    Detail PDF Download Here
</P>
<a class="pdf" href="pdf/PlasticBottles.pdf"><img src="images/pdf icon/PDF_file_icon.png" ></a>
</div>
    </div>
    </div>
    `
}