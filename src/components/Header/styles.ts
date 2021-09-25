import styled from "styled-components";
import { shade } from "polished"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 2rem;
    background-color: ${shade(0.15, "#1F1D2B")};
    gap: 20px;

    transition: color 200ms;

    a {
        text-decoration: none;
        color: #fff
    }

    a:hover {
        color: ${shade(0.3, "#fff")}
    }
`