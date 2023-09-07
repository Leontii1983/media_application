import styled from "styled-components";

export const MediaItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 2px solid #2D6FC5;
  margin-top: 15px;
`;

export const MediaContentWrapper = styled.div`
  display: flex; 
  flex-direction: column;
`;
export const MediaListWrapper = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;
export const MediaList = styled.ul`
  list-style-type: none;  
  display: flex;
  justify-content: space-between; 
  align-items: center;
`;

export const MediaListLi = styled.li`
  margin-right: 5px;
`;