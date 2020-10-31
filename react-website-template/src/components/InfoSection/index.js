import React from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'

function InfoSection({id, lightBg, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt}) {
    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt= {alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>   
        </>
    )
}

export default InfoSection
