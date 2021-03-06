import styled from 'styled-components'
import ResetGame from '../../components/ResetGame'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 360px;
  height: 90%;

  & > ${ResetGame} {
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
`

export const BoardSection = styled.section`
  display: flex;
  justify-content: space-around;
`

export const PointSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`

export const CardPointStyle = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const MatchWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
`