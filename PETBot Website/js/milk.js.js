var Milk_Bottle = [
    {
        img: "images/Milk Images/m1.jpg",
        details: `Goat Milk Custom Bottle`,
        currency: "Price Pk",
        price: "745", 
    },
    {
        img: "images/Milk Images/m2.jpg",
        details: `Milk Carton Shape Water Bottle`,
        currency: "Price Pk",
        price: "999", 
    },{
        img: "images/Milk Images/m3.jpg",
        details: `Personalised milk bottles `,
        currency: "Price Pk",
        price: "780", 
    },
    {
        img: "images/Milk Images/m4.jpg",
        details: `Customizable Clear Milk Carton Milk Bottle`,
        currency: "Price Pk",
        price: "970", 
    },    {
        img: "images/Milk Images/m5.jpg",
        details: `Almond Milk Custom Bottle`,
        currency: "Price Pk",
        price: "320", 
    },
    {
        img: "images/Milk Images/m6.jpg",
        details: `Cow Milk Bottle`,
        currency: "Price Pk",
        price: "420", 
    }
]



for (i = 0; i < Milk_Bottle.length; i++) { document.getElementById("milk").innerHTML +=

`
 <div class="border" ;">
    <img src="${Milk_Bottle[i].img}" onclick="openFullImg(this.src)" />
    <p class="detail">
        ${Milk_Bottle[i].details}
    </p>
    <p class="currency">
        ${Milk_Bottle[i].currency}:${Milk_Bottle[i].price}/=
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