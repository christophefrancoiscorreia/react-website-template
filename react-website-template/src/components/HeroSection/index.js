import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrap, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
 
const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    } 

    return (
        <HeroContainer id="hero">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking made Easy
                </HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrap>
                    <Button to="signup" 
                    onMouseEnter={onHover}  
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrap>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
