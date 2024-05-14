import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { hideHeader } from "./utils/appSlice";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Section = styled.div`
  margin: 20px;
  width: 80%;
  max-width: 800px;
  border-radius: 10px;
`;

const AdSection = styled(Section)`
  width: 100%;
  height: 100px;
  background-color: #ffc107;
  opacity: 0.3;
  align-self: center;
`;

const HeadlineSection = styled(Section)`
  width: fit-content;
  color: black;
  height: fit-content;
  left: 0;
  font-weight: bold;
  font-size: 48px;
`;

const ContentSection = styled(Section)`
  color: black;
  font-size: 18px;

  width: 60%;
  height: fit-content;
  align-self: flex-start;
`;

const RecircSection = styled(Section)`
  background-color: #17a2b8;
  opacity: 0.4;
  color: #000;
  right: 0;
  top: 50%;
  width: 30%;
  height: 300px;
  position: absolute;
`;

const Sidebar = styled.div`
  margin: 20px;
  padding: 20px;
  width: 30%;
  height: fit-content;
  border-radius: 10px;
  background-color: #f0f0f0;
`;
const SidebarImage = styled.img`
  width: 100%;
  height: auto;
`;

const SidebarText = styled.div`
  margin-top: 20px;
  font-family: monospace;
  font-size: 12px;
`;

const SidebarDownloadButton = styled.button`
  margin-top: 20px;
  border: 0;
  cursor: pointer;
  & img {
    width: 36px;
    height: 36px;
  }
`;

const MainPage = ({ isCopilotPage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideHeader());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href =
      "https://hsc.unm.edu/_media/pdfs/rbhomeworkoutguide2020-3.pdf";
    anchor.download = "Beginner_Pilates_Workout_Plan.pdf";
    anchor.target = "_blank";
    anchor.click();
  };

  return (
    <MainContainer>
      <AdSection>Ad Section</AdSection>
      <HeadlineSection style={{ fontFamily: "arial" }}>
        A Beginner Pilates Workout You Can Do Right in Your Living Room
        <p style={{ fontSize: "24px", fontWeight: "lighter" }}>
          You don’t need to visit a studio or hop on a fancy Reformer to give
          Pilates a try.
        </p>
      </HeadlineSection>
      <ContentSection style={{ fontFamily: "serif" }}>
        <article>
          <section>
            <p>
              With a no-equipment, beginner Pilates workout, you can dabble in
              this popular form of movement right from the comfort of your
              living room—and we have a pretty awesome routine right here that
              fits that exact bill. Pilates is a great exercise choice for
              pretty much everyone, Jill Rothenberg, a Boston-based certified
              Pilates instructor and founder of Movement with Jill, tells SELF.
              That’s because there’s a strong emphasis on proper form, mind-body
              connection, and core stability. All this means you’re
              intentionally moving in ways that feel good for your body, rather
              than mindlessly busting out a bunch of reps in ways that may not
              work for your joints or muscles. Plus, Pilates is a pretty stellar
              way to get stronger, especially if your goal is to help your
              muscles work for longer without needing to lift a bunch of heavy
              weights. Another benefit of Pilates: There are lots of ways to
              “layer” exercises—meaning, make them easier for folks just getting
              started, or harder for people wanting more of a challenge. This
              means Pilates is accessible to a wide range of fitness
              levels—including, yup, beginners.
            </p>
            <div style={{ display: "flex" }}>
              <Sidebar>
                <SidebarImage
                  src="https://stag-media.self.com/photos/65d7c1d740607b9f89b6936f/master/w_1600,c_limit/amanda-side-plank.jpg"
                  alt="Sidebar Image"
                />
                <div style={{ display: "flex", width: "100%" }}>
                  <SidebarDownloadButton onClick={handleDownload}>
                    {" "}
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/download-pdf-icon.png"
                      alt="download-pdf"
                    />
                  </SidebarDownloadButton>
                  <SidebarText>
                    Download the Beginner Pilates Workout Plan{" "}
                  </SidebarText>
                </div>
                <p style={{ fontSize: "16px", fontFamily: "serif" }}>
                Being active makes you feel better, gives you more energy, improves your mood, and helps you lose weight. Choose activities that are fun, safe, involve repetitive motion that uses the arms and legs, and build endurance.
                </p>
              </Sidebar>
              <p style={{ flex: "50%" }}>
                Take the classic single-leg stretch exercise, for example. This
                core-centric move can be modified by placing your head on the
                ground or bringing one leg back into your chest before extending
                the other. Or it can be made more challenging by curling your
                head, neck, and shoulders up and doing reps from that position
                so that your abs take on more work, or by simultaneously
                extending one leg as the other starts to come back toward your
                chest, Rothenberg says. Take the classic single-leg stretch
                exercise, for example. This core-centric move can be modified by
                placing your head on the ground or bringing one leg back into
                your chest before extending the other. Or it can be made more
                challenging by curling your head, neck, and shoulders up and
                doing reps from that position so that your abs take on more
                work, or by simultaneously extending one leg as the other starts
                to come back toward your chest, Rothenberg says. “The first
                layer will be really mindful, where you make sure you’re doing
                the right form, your hips aren’t rocking side to side, your
                range of motion feels right for you,” she explains.
              </p>
            </div>
            <p>
              With that in mind, Rothenberg designed the five-move Pilates
              workout for SELF below that’s beginner-friendly and includes lots
              of ways to tweak the difficulty based on your exact fitness level.
              Centered on classic bodyweight moves—including the famous
              single-leg stretch, as well as bird-dog, toe tap, leg circle, and
              quarter-squat star toe touch—the routine has you working a bunch
              of muscles, including your legs, glutes, shoulders, arms, and
              back. And the entire time, you’ll seriously challenge your core
              too. That final piece is a key, defining component of Pilates.
              “Your core should be active in every single Pilates thing you do,”
              Rothenberg explains, since a strong, stable midsection helps
              protect your spine and allows you to use your limbs efficiently
              and effectively in a variety of scenarios, whether you’re moving
              them during a workout (as in the bird-dog exercise or toe touch,
              for example), or using them to complete daily tasks (like hauling
              a bag of groceries, or wrangling a fussy child).
            </p>
            <p>
              Because this routine is designed as a gentle beginner sequence,
              you don’t need to do a dedicated warm-up beforehand. However, if
              you have the time, Rothenberg suggests taking a few minutes to
              prep your mind with deep, focused breathing and gear up your body
              with moves like knee sways (which help mobilize your hips and
              lower back) and pelvic rocks (which fire up your butt and core
              muscles).
            </p>
          </section>
        </article>
      </ContentSection>
      <RecircSection>This is Recirc List</RecircSection>
    </MainContainer>
  );
};

export default MainPage;
