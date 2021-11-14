import styled from "styled-components";
import "./App.css";

const TitlePanel = styled.div`
  width: 80vw;
  margin: 30px auto;
  border-radius: 4px;
  border: 1px solid black;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.76);
`;

const Title = styled.p`
  font-size: 30px;
  color: white;
`;

const MainInfoWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  width: 90%;
  margin: 30px auto;
  border-radius: 4px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
`;

const SpecificInfoWrapper = styled.div``;

const SpecificInfoTitle = styled.p`
  font-size: 16px;
  color: gray;
`;
const SpecificInfoIncreaseNum = styled.p`
  font-size: 24px;
  color: red;
`;

const SpecificInfoTotalNum = styled.p`
  font-size: 16px;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <TitlePanel>
        <Title> 코로나바이러스감염증-19</Title>
        <MainInfoWrapper>
          <SpecificInfoWrapper>
            <SpecificInfoTitle> 확진환자 </SpecificInfoTitle>
            <SpecificInfoIncreaseNum>24</SpecificInfoIncreaseNum>
            <SpecificInfoTotalNum>3000</SpecificInfoTotalNum>
          </SpecificInfoWrapper>
          <SpecificInfoWrapper>
            <SpecificInfoTitle> 사망자 </SpecificInfoTitle>
            <SpecificInfoIncreaseNum>24</SpecificInfoIncreaseNum>
            <SpecificInfoTotalNum>3000</SpecificInfoTotalNum>
          </SpecificInfoWrapper>
          <SpecificInfoWrapper>
            <SpecificInfoTitle> 격리해제 </SpecificInfoTitle>
            <SpecificInfoIncreaseNum>24</SpecificInfoIncreaseNum>
            <SpecificInfoTotalNum>3000</SpecificInfoTotalNum>
          </SpecificInfoWrapper>
          <SpecificInfoWrapper>
            <SpecificInfoTitle> 치명률 </SpecificInfoTitle>
            <SpecificInfoIncreaseNum>24</SpecificInfoIncreaseNum>
            <SpecificInfoTotalNum>3000</SpecificInfoTotalNum>
          </SpecificInfoWrapper>
        </MainInfoWrapper>
      </TitlePanel>
    </div>
  );
}

export default App;
