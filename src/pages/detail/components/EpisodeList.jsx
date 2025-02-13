import { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux';   
import { CardBox } from '../style';
import axios from 'axios';


const EpisodeList = () => {
  const { detail, loading, error } = useSelector((state) => state.detailR);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      if (detail && detail.belongs_to_collection) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/collection/${detail.belongs_to_collection.id}`,
            { params: { api_key: '89add566d52fc4fb04e06c4ff4a557b7', language: 'ko-KR' } }
          );
          console.log('response.data:', response.data);
          setEpisodes(response.data.parts);
        } catch (error) {
          console.error('에피소드 데이터를 가져오는 중 오류 발생:', error.response || error);
        }
      }
    };
  
    fetchEpisodes();
  }, [detail]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!detail) return null;
  
  const converRuntime = (minutes) => {
    if (!minutes || minutes === 0) return '시간 정보 없음'

    const hours = Math.floor(minutes / 60)
    const Minutes = minutes % 60

    if (hours > 0) {
      return `${hours}시간 ${Minutes}분`
    }
    return `${Minutes}분`
  }
  

  return (
    <CardBox>
      {episodes.length > 0 ? (
        episodes.map((episode) => (
          <div key={episode.id} className="episode-item">
            <div className="pic">
              <img
                src={`https://image.tmdb.org/t/p/w500${episode.poster_path}`}
                alt={episode.title}
              />
            </div>
            <div className="text-info">
              <h2>{episode.title}</h2>
              <h3>{episode.release_date}, {converRuntime(episode.runtime) || converRuntime(episode.episode_run_time)}</h3>
              <p>{episode.overview}</p>
            </div>
          </div>
        ))
      ) : (
        <div>에피소드 데이터가 없습니다.</div>
      )}
    </CardBox>
  );
};
 
 export default EpisodeList;