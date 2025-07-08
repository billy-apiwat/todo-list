import styled from "styled-components";

export const TodoStyle = styled.div`
  .todoWrapper {
    display: flex;
    position: relative;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .closeBtn {
    position: absolute;
    right: 0;
  }
`;
