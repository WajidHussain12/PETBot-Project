var Water_Bottle = [
    {
        img: "images/Gallery Images/01.png",
        details: `Leakproof Water Bottle with Time Marker `,
        currency: "Price Pk",
        price: "640", 
    },
    {
        img: "images/Gallery Images/02.png",
        details: `Simple Modern Water Bottle with Straw Lid Vacuum`,
        currency: "Price Pk",
        price: "420", 
    },
    {
        img: "images/Gallery Images/03.png",
        details: `BPA-Free Plastic Water Bottle `,
        currency: "Price Pk",
        price: "840", 
    },
    {
        img: "images/Gallery Images/04.png",
        details: `Nalgene Wide Mouth Water Bottle`,
        currency: "Price Pk",
        price: "1250", 
    },{
        img: "images/Gallery Images/05.png",
        details: `LifeStraw Go Water Filter Bottle`,
        currency: "Price Pk",
        price: "650", 
    },
    {
        img: "images/Gallery Images/06.png",
        details: `Mist 'N Sip Misting Water Bottle`,
        currency: "Price Pk",
        price: "320", 
    }
]

for (i = 0; i < Water_Bottle.length; i++) { document.getElementById("water").innerHTML +=

`
 <div class="border" ;">
    <img src="${Water_Bottle[i].img}" onclick="openFullImg(this.src)" />
    <p class="detail">
        ${Water_Bottle[i].details}
    </p>
    <p class="currency">
        ${Water_Bottle[i].currency}:${Water_Bottle[i].price}/=
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


