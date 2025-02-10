import styled from 'styled-components';

export const MyReviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12rem 0;
  gap: 9rem;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 7.5rem 3rem;
    li {
      width: 22%;
      border-radius: 5px;
      background-color: var(--gray-80);
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 5px 5px 0 0;
      }
      .reviewItem {
        padding: 1rem 1.5rem;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        h2 {
          font-size: var(--font-label-l);
        }
        .rate {
          display: flex;
          gap: 1rem;
          font-size: 18px;
          .fill {
            color: var(--secondary-50);
          }
        }
        .content {
          width: 100%;
          height: 60px;
          text-wrap: wrap;
          overflow: hidden;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
      .button {
        padding: 1.5rem 3rem;
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        button {
          width: 120px;
          height: 40px;
        }
      }
    }
  }
`;
