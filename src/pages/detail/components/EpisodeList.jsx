import {CardBox} from '../style'

const EpisodeList =() =>{
  return(
    <CardBox>
      <div className="pic">
        <img src="" alt="" />
      </div>
      <div className="text-info">
        <h2>애피소드 타이틀</h2>
        <h3>방영날짜, 재생시간</h3>
        <p>에피소드 설명</p>
      </div>
    </CardBox>
  );
 };
 
 export default EpisodeList;