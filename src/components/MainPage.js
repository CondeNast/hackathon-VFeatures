import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "./Header";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Section = styled.div`
  margin: 20px;
  padding: 20px;
  width: 80%;
  max-width: 800px;
  border-radius: 10px;
`;

const AdSection = styled(Section)`
  width: 100%;
  height: 100px;
  background-color: #ffc107;
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
  color: #fff;
  right: 0;
  top: 50%;
  width: 30%;
  height: 300px;
  position: absolute;
`;

const MainPage = ({ isCopilotPage }) => {
  const { type } = useParams();

  return (
    <MainContainer>
      <Header isCopilotPage={isCopilotPage}/>
      <AdSection>Ad Section</AdSection>
      <HeadlineSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </HeadlineSection>
      <ContentSection>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
          malesuada nunc vel risus. Fringilla urna porttitor rhoncus dolor.
          Pellentesque pulvinar pellentesque habitant morbi tristique. Leo in
          vitae turpis massa sed elementum tempus egestas sed. Ornare massa eget
          egestas purus viverra accumsan in nisl nisi. Elementum curabitur vitae
          nunc sed velit dignissim sodales ut eu. Duis at tellus at urna.
          Quisque id diam vel quam. Cursus mattis molestie a iaculis at erat
          pellentesque adipiscing. Tempus iaculis urna id volutpat lacus.
          Volutpat blandit aliquam etiam erat velit scelerisque in. Lectus quam
          id leo in vitae turpis massa. Ullamcorper sit amet risus nullam eget
          felis. Rhoncus aenean vel elit scelerisque mauris pellentesque. Quam
          lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Sed
          viverra ipsum nunc aliquet. Fermentum odio eu feugiat pretium nibh
          ipsum. Nec feugiat in fermentum posuere urna nec tincidunt praesent.
          Donec ac odio tempor orci dapibus.
        </p>
        <p>Volutpat sed cras ornare arcu dui vivamus arcu. Sapien eget mi proin
        sed. Amet consectetur adipiscing elit duis tristique sollicitudin nibh
        sit amet. At erat pellentesque adipiscing commodo elit at. Nunc sed
        blandit libero volutpat sed cras ornare arcu. Sit amet volutpat
        consequat mauris nunc congue. Aliquam nulla facilisi cras fermentum odio
        eu feugiat. Etiam dignissim diam quis enim lobortis scelerisque
        fermentum dui faucibus. At imperdiet dui accumsan sit. In eu mi bibendum
        neque egestas congue quisque. In fermentum posuere urna nec tincidunt
        praesent semper feugiat. Mollis nunc sed id semper. Varius duis at
        consectetur lorem donec massa sapien faucibus et. Ultricies leo integer
        malesuada nunc. </p>
        <p>In massa tempor nec feugiat nisl pretium fusce id velit.
        Nam at lectus urna duis convallis convallis tellus. Non curabitur
        gravida arcu ac. Rutrum tellus pellentesque eu tincidunt tortor aliquam
        nulla facilisi cras. Porttitor massa id neque aliquam vestibulum morbi.
        In hac habitasse platea dictumst. Pretium nibh ipsum consequat nisl vel
        pretium lectus. Fringilla est ullamcorper eget nulla facilisi etiam
        dignissim diam. Erat pellentesque adipiscing commodo elit. Tellus mauris
        a diam maecenas sed. Pellentesque elit eget gravida cum sociis natoque
        penatibus et. Suspendisse in est ante in. Non quam lacus suspendisse
        faucibus interdum posuere lorem. Feugiat in fermentum posuere urna nec
        tincidunt praesent semper. Amet est placerat in egestas erat imperdiet.
        Auctor eu augue ut lectus arcu bibendum at varius vel. Sed ullamcorper
        morbi tincidunt ornare massa eget. Faucibus et molestie ac feugiat sed
        lectus. 
        </p>
        <p>Imperdiet massa tincidunt nunc pulvinar sapien. Velit ut tortor
        pretium viverra suspendisse potenti nullam. Enim nec dui nunc mattis
        enim ut tellus elementum. Imperdiet proin fermentum leo vel orci porta
        non pulvinar neque. Vestibulum rhoncus est pellentesque elit ullamcorper
        dignissim cras tincidunt. Consectetur adipiscing elit ut aliquam purus
        sit amet. Et malesuada fames ac turpis egestas integer eget. Morbi
        tristique senectus et netus et malesuada fames ac. Amet nisl purus in
        mollis. Mauris pharetra et ultrices neque ornare aenean. Vel pharetra
        vel turpis nunc eget lorem. Ipsum nunc aliquet bibendum enim facilisis.
        Varius sit amet mattis vulputate enim nulla aliquet. Amet consectetur
        adipiscing elit pellentesque. Consequat mauris nunc congue nisi vitae
        suscipit tellus mauris a. Fames ac turpis egestas integer eget aliquet
        nibh praesent tristique. Parturient montes nascetur ridiculus mus
        mauris. Nunc faucibus a pellentesque sit amet porttitor eget dolor
        morbi. Vitae purus faucibus ornare suspendisse sed nisi lacus. Cursus
        euismod quis viverra nibh cras pulvinar mattis. Euismod in pellentesque
        massa placerat duis ultricies lacus. Fringilla ut morbi tincidunt augue
        interdum. 
        </p>
        <p>Ligula ullamcorper malesuada proin libero. Sed velit dignissim
        sodales ut eu sem. Viverra adipiscing at in tellus. Quisque non tellus
        orci ac auctor. Eget mi proin sed libero enim sed faucibus. Cras
        pulvinar mattis nunc sed. Facilisis mauris sit amet massa vitae tortor
        condimentum lacinia. Aliquet nibh praesent tristique magna sit amet.
        Curabitur vitae nunc sed velit dignissim sodales ut. Mauris ultrices
        eros in cursus turpis massa tincidunt. Mattis pellentesque id nibh
        tortor id aliquet lectus. Nunc mi ipsum faucibus vitae aliquet nec
        ullamcorper. Risus nec feugiat in fermentum posuere urna. Senectus et
        netus et malesuada. Sed nisi lacus sed viverra tellus. Suscipit tellus
        mauris a diam maecenas sed enim ut. Id neque aliquam vestibulum morbi
        blandit cursus risus at. Metus vulputate eu scelerisque felis. Elit ut
        aliquam purus sit amet luctus venenatis lectus. Bibendum ut tristique et
        egestas quis. Vitae justo eget magna fermentum. Euismod quis viverra
        nibh cras pulvinar mattis nunc sed. Diam donec adipiscing tristique
        risus nec feugiat in fermentum. Turpis egestas sed tempus urna. Dictum
        fusce ut placerat orci nulla. Tincidunt dui ut ornare lectus sit amet
        est placerat. Porttitor leo a diam sollicitudin tempor id eu nisl. Nec
        dui nunc mattis enim ut tellus elementum sagittis vitae.</p>
      </ContentSection>
      <RecircSection>
        This is Recirc List
        </RecircSection>
    </MainContainer>
  );
};

export default MainPage;
