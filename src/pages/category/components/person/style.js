import styled from 'styled-components';
import { mobileMore, tabletMore } from '../../../../styled/Mixin';

export const PersonCard = styled.div`
  padding: 3rem 2rem;
  background: var(--background-secondary);
  border-radius: 12px;
  margin: 1rem 0 4rem;
  color: var(--text-primary);

  .person-card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3.5rem;
    align-items: center;
    padding: 0 1rem;

    ${mobileMore`
      flex-direction: row;
      align-items: flex-start;
      gap: 3rem;
      padding: 0 2rem;
    `}
  }

  .profile-image {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary-50);

    ${mobileMore`
      width: 220px;
      height: 220px;
    `}
  }

  .person-info {
    flex: 1;
    text-align: center;

    ${mobileMore`
      text-align: left;
      padding-top: 1rem;
    `}
  }

  .person-name {
    font-size: var(--font-content-xl);
    font-weight: var(--font-weight-bold);
    margin-bottom: 1rem;
    color: var(--text-primary);

    ${mobileMore`
      font-size: var(--font-content-xxl);
      margin-bottom: 1.2rem;
    `}
  }

  .original-name {
    font-size: var(--font-content-m);
    color: var(--text-secondary);
    margin-bottom: 1.2rem;
  }

  .department {
    font-size: var(--font-content-s);
    color: var(--text-primary);
    margin-bottom: 1rem;
    padding: 0.6rem 1.4rem;
    background: var(--primary-80);
    border-radius: 20px;
    display: inline-block;
  }

  .known-for {
    margin-top: 2rem;
    padding: 0 1rem;

    ${mobileMore`
      margin-top: 3rem;
      padding: 0 2rem;
    `}
  }

  .known-for-title {
    font-size: var(--font-content-l);
    font-weight: var(--font-weight-semibold);
    margin-bottom: 2rem;
    color: var(--text-primary);
    padding-left: 1rem;
    border-left: 3px solid var(--primary-50);
  }

  .known-for-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1.5rem;

    ${mobileMore`
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem 2rem;
    `}

    ${tabletMore`
      grid-template-columns: repeat(4, 1fr);
    `}
  }

  .movie-card {
    position: relative;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-5px);

      .movie-title {
        color: var(--primary-50);
      }
    }
  }

  .movie-poster-container {
    position: relative;
    width: 100%;
    padding-bottom: 150%;
    border-radius: 8px;
    overflow: hidden;
    background: var(--gray-80);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  .movie-poster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: var(--gray-80);
  }

  .movie-title {
    margin-top: 1rem;
    font-size: var(--font-content-s);
    color: var(--text-primary);
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: center;
    transition: color 0.2s ease;
  }
`;
