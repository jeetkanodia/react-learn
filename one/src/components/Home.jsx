import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Jeet Kanodia</h1>
          <p>Passionate Coder Services</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur quidem, molestias dolores repellat doloribus culpa
            dolorum alias illum voluptatem minima molestiae tempora! Laudantium
            magnam officia magni suscipit ut labore. Explicabo cumque dolor, a
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ea
            omnis dolorem pariatur voluptate earum architecto impedit
            consequatur sed deleniti, necessitatibus cumque praesentium! Sunt
            illum illo, cum enim harum quas rem. Tempora corrupti reprehenderit
            molestiae modi autem consequatur deserunt vitae maiores dolorum,
            officia suscipit blanditiis a at id odit? Minus eius sint cumque
            pariatur iure cum animi, exercitationem velit. Voluptates amet
            reiciendis voluptas aliquid quis nisi laudantium iusto illum non
            minus quam unde explicabo expedita molestias in incidunt perferendis
            magni est accusantium voluptatibus, rerum eligendi omnis sed!
            Ducimus non eaque in doloribus fugiat quas id laborum. Voluptates
            ratione esse enim.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
