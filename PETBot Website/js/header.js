document.getElementById("header").innerHTML +=
`


<header>
    <div class="headerdivlogo">
      <a href="index.html"><img class="l1" src="images/logo.png" alt="" width="50%" /></a>
<a class="l2" onclick="togglemenu()"></a>

      
    </div>

    <div class="headerdivnav" id="menulist2">
      <nav class="headermainnav">
        <ul>
        <li><a id="aboutus" href="aboutus.html">About Us</a></li>
          <li>
            <a id="bottlecategory" onclick="togglemenu1()">Bottle Category</a>
            <ul  id="menulist3">
              <li ><a href="waterbottle.html">Water Bottle <span><i class="fa-solid fa-bottle-water"></i></span></a></li>
              <li ><a href="milkbottle.html">Milk Bottle <span><i class="fa-solid fa-bottle-droplet"></i></span></a></li>
              <li ><a href="plasticbottle.html">Plastic Bottle <span><i class="fa-solid fa-bottle-water"></i></span></a></li>
              <li ><a href="ceramicbottle.html">Ceramic Bottle <span><i class="fa-solid fa-prescription-bottle"></i></span></a></li>
              <li ><a href="glassbottle.html">Glass Bottle <span><i class="fa-solid fa-prescription-bottle"></i></span></a></li>
              <li ><a href="steelbottle.html">Steel Bottle <span><i class="fa-solid fa-prescription-bottle"></i></span></a></li>
              <li ><a href="gymbottle.html">Gym Bottle <span><i class="fa-solid fa-prescription-bottle"></i></span></a></li>
            </ul>
          </li>
          <li><a id="query" href="query.html">Queries</a></li>
          <li><a id="contactus" href="contactus.html">Contact Us</a></li>
          <li><a id="feedback" href="feedback.html">Feedback</a></li>
          <li><a id="gallery" href="gallery.html">Gallery</a></li>
          <li><a id="sitemap" href="sitemap.html">Site Map</a></li>
          
        </ul>
      </nav>
    </div>
  </header>


    `

