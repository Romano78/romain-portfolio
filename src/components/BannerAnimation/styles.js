import styled from "styled-components"

export const BannerAnimationContainer = styled.div`

    .canvas {
    order: 2;
    flex: 1;
    height: 100%;
    }

    .overlay {
    position: relative;
    order: 1;
    flex: 1;
    pointer-events: none;
    }

    svg {
    width: 100%;
    height: 100%;
    }

    @media only screen and (max-aspect-ratio: 8/7) {
    main {
        flex-direction: column;
    }
    .canvas {
        order: 1;
    }
    svg {
        order: 2;
        width: 100%;
        max-width: 100%;
        height: 60vh;
    }
    }
`