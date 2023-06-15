var Steel_Bottle = [
    {
        img: "images/Steel Bottle img/steel1.jpg",
        details: `Insulated Water Bottles -17oz/25oz, Stainless Steel`,
        currency: "PKR",
        price: "2540", 
    },
    {
        img: "images/Steel Bottle img/steel2.jpg",
        details: `Contigo Cortland Chill 2.0 Water Bottle`,
        currency: "PKR",
        price: "2599", 
    },{
        img: "images/Steel Bottle img/n1.png",
        details: `Basics Stainless Steel Insulated Water Bottle`,
        currency: "PKR",
        price: "2999", 
    },
    {
        img: "images/Steel Bottle img/n2.png",
        details: `Klean Kanteen Wide Mouth Stainless Steel Water Bottle`,
        currency: "PKR",
        price: "4500", 
    },    {
        img: "images/Steel Bottle img/n3.png",
        details: `Hydro Flask Wide Mouth Stainless Steel Reusable Water Bottle`,
        currency: "PKR",
        price: "2150", 
    },
    {
        img: "images/Steel Bottle img/n4.png",
        details: `Takeya Ocean Vacuum-Insulated Stainless-Steel Water Bottle`,
        currency: "PKR",
        price: "4320", 
    }
]



for (i = 0; i < Steel_Bottle.length; i++) { document.getElementById("steel").innerHTML +=

`
 <div class="border" ;">
    <img src="${Steel_Bottle[i].img}" onclick="openFullImg(this.src)" />
    <p class="detail">
        ${Steel_Bottle[i].details}
    </p>
    <p class="currency">
        ${Steel_Bottle[i].currency}:${Steel_Bottle[i].price}/=
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