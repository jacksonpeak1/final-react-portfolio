import React from "react";
import img from "../../assets/IMG_8268.jpg";
import styled from "styled-components";
import img2 from "../../assets/gt.jpg";
import img3 from "../../assets/county.jpg";
import img4 from "../../assets/code.jpg";
import img5 from "../../assets/law.jpg";

const Img = styled.img`
  width: 258px;
  height: 50vh;
`;

const Paragraph = styled.p`
  height: 50vh;
`;

function About() {
  return (
    <div className="col d-flex flex-wrap container">
      <div className="card">
        <div className="card">
          <div>
            <Img className="card-img-top" src={img} alt="jackson" />
            <Img className="card-img-top" src={img2} alt="jackson2" />
            <Img className="card-img-top" src={img3} alt="jackson3" />
            <Img className="card-img-top" src={img4} alt="jackson4" />
            <Img className="card-img-top" src={img5} alt="jackson5" />
            <div className="card-body card bg-secondary text-white">
              <h5 className="card-title">Biography</h5>
              <Paragraph className="card-text">
                Hello, my name is Jackson Peak. I was born in Atlanta, Georgia,
                and I have lived in the state of Georgia my whole life. I reside
                in Acworth, Georgia, but I have also lived in both Kennesaw and
                Marietta, Georgia. Throughout my life, I have been passionate
                about the various aspects of the law, as well as coding and web
                development work. I furthered my education on the subject by
                earning a bachelor’s degree in Political Science from Kennesaw
                State University. Furthermore, during my undergraduate studies
                at Kennesaw State University, I participated in the Georgia
                Legislative Internship Program. As a Senate Intern, I worked
                under many Georgia State Senators, gaining valuable knowledge
                regarding the complex protocol and functions of the Georgia
                State Government, and how the law is created. I also made great
                relationships and connections with legislators as well as
                various legislative professionals, which lead to the fulfillment
                of one of my proudest achievements. In February of 2018, I
                wrote, lobbied and a helped pass Senate Resolution 693, which
                was dedicated to a close friend I lost to suicide, Trey McKinley
                Grisham. Moreover, this resolution helped commend the hard work
                and dedication of the American Foundation for Suicide
                Prevention: Georgia Chapter, for all the excellent work the
                organization has done for the State of Georgia. After my
                graduation, I began an internship as a summer law clerk with
                Fulton County Superior Court Judge Craig Schwall. Judge Schwall
                was truly an inspiring teacher. I thoroughly enjoyed the
                exposure to the many aspects of criminal and civil law,
                specifically how the judicial system in Georgia functions. I
                also gained personal insight into the complicated workings of
                criminal law, and the specific courtroom edict and procedures
                that must be followed during trial. Overall, I was grateful for
                the internship, because after seeing how the law is created in
                my previous internship, I was given an opportunity to see how
                Superior Court Judges apply the law in Georgia. After my
                internship with Fulton County Superior Court judge Craig
                Schwall, I began working my first position at a law firm. I was
                hired as a legal assistant at the law firm of Lueder, Larkin,
                and Hunter, LLC. This law firm gave me great insight into the
                aspects of civil law and how it pertains to liability defense
                work. After I left Lueder Larkin and Hunter, I began working as
                a legal assistant at a law firm, in my hometown of Kennesaw,
                Pollack and Rosen, P.A. While working at Pollack and Rosen, I
                extended my experience in civil law practices, gaining valuable
                knowledge on estate planning, as well as real-estate, civil, and
                commercial liquidation practices. I’m very thankful for the
                opportunity to have gained these vast experiences and knowledge
                through my past education, Government internships, and legal
                employment. I completed my first year of law school at Atlanta’s
                John Marshall Law School in the Spring of 2019. I was proud of
                the challenges I overcame my first year, by developing effective
                legal reading and writing skills, while additionally gaining
                essential research abilities regarding the law. Moreover I am
                currently enrolled in Georgia Tech's Coding Bootcamp, and I have
                enjoyed learning coding a great deal. Additionally, Some of my
                hobbies include: playing guitar, recording music, playing
                basketball, and fishing!
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
