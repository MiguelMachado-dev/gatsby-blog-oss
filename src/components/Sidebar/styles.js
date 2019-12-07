import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("large")`
     aling-items: flex-start;
     height: auto;
     padding: 1rem 2rem;
     width: 100%;
  `}

  h2 {
    user-select: none;
    margin-top: 3rem;
    font-weight: bold;
    color: var(--texts);
    transition: all 0.1s ease 0s;
  }
`
