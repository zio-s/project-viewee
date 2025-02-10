import { useSelector } from 'react-redux';

export const MyReview = () => {
  const { user } = useSelector((state) => state.authR);
  const { reviewed } = user;
  return (
    <div>
      <ul>
        {reviewed.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>
              {[...Array(5)].map((_, index) => (
                <span key={index} className="star">
                  ★
                </span>
              ))}
            </p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
