import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img className="button1" src={`/images/dice/dice_${currentDice}.jpg`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .button1{
    max-width:300px;
    border-radius:50px;
  }

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;