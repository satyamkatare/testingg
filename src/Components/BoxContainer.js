import React from "react";
// import LargeBox from './LargeBox'
import SmallBox from "./SmallBox";
import "./BoxContainer.css";
import { Typography } from "@material-ui/core";
// import BackImage from './BackImage.jpg'
export default function BoxContainer(props) {





  return (
    <div className="main-box">
      
      {/* Card1  starts here*/}

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >

        <SmallBox
          title="THE VENOUS LEG ULCER"
          mainContent="The venous leg ulcer is a wound that appears on the calf or ankle. Generally of vascular origin, it will dig into the skin and 
      create a wound that can go as deep as the bone. Most venous leg ulcers heal within 3 to 4 months if they're treated by a healthcare professional
       trained in compression therapy for leg ulcers. However, some ulcers may take longer to heal, and a very small number never heal."
          extraContent1=" A leg ulcer is a long-lasting (chronic) sore that takes more
        than 2 weeks to heal. They usually develop on the inside of the leg, just above the ankle."
          extraContent2="We now know that effective treatment to heal a venous ulcer requires a combination of local treatment, composed of a dressing regulating 
        the metalloproteases which prevent healing of the wound, with etiological treatment, composed of a compression.
          "
        />
        <div>
          <img
            src="http://www.molnlycke.com/contentassets/e330c4328b7e482a99ddb474291d05f5/homecare-nurse-with-patient.jpg"
            style={{
              width: "35rem",
              // margin: "10px",
              margin:"auto",
              // border: "3px white solid",
              borderRadius: "2em 0em",
              boxShadow: " 0 2px 8px 2px rgb(0 0 0 / 20%)",
            }}
          />
        </div>
      </div>
      {/* Card2  end here*/}

      {/* Card2  starts here*/}

      <div
        className="card2_home"
      >
        <div>
          <img
            src="https://images.medicinenet.com/images/article/main_image/gangrene.jpg"
            style={{
              width: "38rem",
              height: "45vh",
              // margin: "10px",
              margin:"auto",
              // border: "3px white solid",
              borderRadius: "2em 0em",
              boxShadow: " 0 2px 8px 2px rgb(0 0 0 / 20%)",
            }}
          />
        </div>

        <SmallBox
          title="THE DIABETIC FOOT ULCER"
          mainContent="Foot ulcers are a common complication of diabetes that is not being managed through methods such as diet, exercise, and insulin treatment. 

They’re most common under your big toes and the balls of your feet, and they can affect your feet down to the bones Signs of foot ulcers are not always obvious. Sometimes, you won’t even show symptoms of ulcers until the ulcer has become infected..
"
          extraContent1="One of the first signs of a foot ulcer is drainage from your foot that might stain your socks or leak out in your shoe. Unusual swelling, irritation, redness, and odors from one or both feet are also common early symptoms."
          extraContent2="The most visible sign of a serious foot ulcer is black tissue (called eschar) surrounding the ulcer. This forms because of an absence of healthy blood flow to the area around the ulcer.


Signs of foot ulcers are not always obvious. Sometimes, you won’t even show symptoms of ulcers until the ulcer has become infected. "
        />
      </div>
      {/* Card2  end here*/}

      {/* Card3  starts here*/}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <SmallBox
          title="THE BEDSORE"
          mainContent="Bedsores are also known as pressure sores or decubitus ulcers. They form when your bone squeezes your skin and tissue against an outside surface, usually on weight-bearing parts of your body where the bones are near the skin. Bedsores usually develop below your waist if you are bedridden, although they can occur almost anywhere on your body. Common sites are the hips, shoulder blades, elbows, base of the spine, knees, ankles, heels, and even between fingers and toes."
          extraContent1=" Bedsores can develop in some people with just a few hours of constant pressure and range from mild reddening to severe craters that extend into the muscle and bone. They're quite a nuisance and often painful. Anyone who must remain in a bed, chair, or wheelchair for extended periods can develop these sores."
          extraContent2="Most pressure sores affect patients over 70 years old who are bedridden in hospitals and long-term care facilities. "
        />
        <div>
          <img
            src="https://hcah.in/health-advantage/wp-content/uploads/2017/09/Preventing-bed-sores-for-a-healthier-recovery.png"
            classNmae="card3_img"
            style={{
              width: "35rem",
              margin: "auto",
              // border: "3px white solid",
              borderRadius: "2em 0em",
              boxShadow: " 0 2px 8px 2px rgb(0 0 0 / 20%)",
            }}
          />
        </div>
      </div>
      {/* Card3  ends here*/}



    </div>
  );
}
