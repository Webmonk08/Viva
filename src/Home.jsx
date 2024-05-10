import React from "react"
import image from "./Treeimage.png"
function App() {
  return (
    <>
      <header>
        <div className="header montserrat" >

          <h1>Logo</h1>

          <div id="header-ele">

            <li>About us</li>

            <li id="dropdown" type="dropdown">
              Products
              <i className="fa fa-caret-down"></i>
              <div className="productD">
                <span>Live stocks</span>
                <span>Fresh fruits & vegetables</span>
              </div>
            </li>

            <li>Ventures</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Blog</li>
            <li>Contact US</li>
          </div>  


          <div className="sign">
            <span>login</span>
            <span>Sign-In</span>
          </div>
        </div>

        <div className="line">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <div className="starter">
        <img id="img" src="https://imgs.search.brave.com/W9KSJwN1PqEod12tCy3GefDAbZp26Qarpr16Kqp8jO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MzI2NDU2NS9waG90/by90d28taGFwcHkt/ZmFybWVycy1zaGFr/aW5nLWhhbmRzLW9u/LWFuLWFncmljdWx0/dXJhbC1maWVsZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UkVXZDZKTzdKbllO/MFQ3VUtOcHBnVjRK/T0NndGdzcXN6SC1M/QjYxeEtxUT0" alt="" />
        <div className="cont">
          <h1>Sowing innovations.</h1>
          <span>Harvesting Trust</span>
          <span>We craft solutions that help build <br /> better lives across the agri economy</span>
        </div>
      </div>

      <div className="about">
        <div id="About-cont">
          <h1>About Us</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur, est quos deleniti error quis at. Quam nostrum at aliquam nobis dolorem aspernatur praesentium minus ratione sequi sed. Itaque, accusamus.</span>
        </div>
        <img id="Tree" src={image} alt="" />
      </div>

      <div className="login">

        <div id="loginD">
          <h1>Empowering Every link</h1>
          <span>At each stage of the pre and post harvest journey, our solutions are crafted to simplify business challenges.

            We mitigate payment risks, maintain quality standards, smoothen the logistics experience, and distribute real-time information. Our products are accessible to all, helping businesses become dependable and trustworthy to one another.

            Our ultimate goal is to ensure seamless trade of fresh produce from point to point, both locally and globally.</span>
        </div>
        <div className="details">

          <img src="https://imgs.search.brave.com/wT0zjND7d7P65k0us6fdXJ8vtPIWtp7ga-jjE3Vw2jI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU0/MjYxNDg2NS9waG90/by9tYW4tc2hvcHBp/bmctdmVnZXRhYmxl/cy1pbi1ncm9jZXJp/ZXMtc3RvcmUud2Vi/cD9iPTEmcz0xNzA2/NjdhJnc9MCZrPTIw/JmM9YkpBZG1FSjMz/enhlclZCQ1o4aW5W/VGZwVHl6dEd0cmZm/VVl2Tnp5Umtucz0" alt="" id="retailers" />

          <img src="https://imgs.search.brave.com/W9KSJwN1PqEod12tCy3GefDAbZp26Qarpr16Kqp8jO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/MzI2NDU2NS9waG90/by90d28taGFwcHkt/ZmFybWVycy1zaGFr/aW5nLWhhbmRzLW9u/LWFuLWFncmljdWx0/dXJhbC1maWVsZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UkVXZDZKTzdKbllO/MFQ3VUtOcHBnVjRK/T0NndGdzcXN6SC1M/QjYxeEtxUT0" alt="" id="farmer" />

          <img src="https://imgs.search.brave.com/jDZhfnkZhhN6dQTDlf4hoCbNklo6s0Cd8GOYakCHcT8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUy/MDUwNTg5OC9waG90/by93YXJlaG91c2Ut/aW5kdXN0cmlhbC1h/bmQtbG9naXN0aWNz/LWNvbXBhbmllcy1j/b21tZXJjaWFsLXdh/cmVob3VzZS1odWdl/LWRpc3RyaWJ1dGlv/bi13YXJlaG91c2Uu/d2VicD9iPTEmcz0x/NzA2NjdhJnc9MCZr/PTIwJmM9bElRYWlL/aGZKLVRYNm5KNXA2/VXBHUlIybEZ3R3po/b05PSFZ2Q3ZkdHFo/cz0" alt="" id="Wholesaler" />

          <img src="https://imgs.search.brave.com/QxkCdZDZ2Bn0VZg_2NXwF0cPfV5aw7BDXOLGgFq7oUk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGVyemluZGFn/aS5pbmZvL2ltYWdl/LzIwMTkvU2VwL3Zl/Z2V0YWJsZXMuanBn" alt="" id="customer" />
        </div>
      </div>



      <div className="ventures">
        <span>Ventures</span>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos mollitia maxime praesentium perferendis obcaecati officia necessitatibus velit tempore minus asperiores ducimus nemo hic adipisci, dolore cupiditate ad, quam fugiat illum!</span>

        <div className="ventures-detail">
          <div id="domestic"></div>
          <div id="International"></div>

        </div>
      </div>


      <div className="Sponsors">

      </div>

      <div className="credits">

      </div>
     <div className="credits">

     </div>
    </>
  );
}

export default App;
