import styled from "styled-components"

export const BannerAnimationContainer = styled.div`
        main {
            .canvas {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                canvas {
                    display: block;
                     width: 240px;
                    height: 320px;
                }
            }
        }

    @media(min-width: ${props => props.theme.breakpoints.md}) {
        main {
            .canvas {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                canvas {
                    display: block;
                     width: 388px;
                    height: 630px;
                }
            }
        }
    }
`