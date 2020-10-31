import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'

const toggleHome = () => {
    scroll.scrollToTop();
}
function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer> 
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>                        
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signin">Submit Video</FooterLink>
                            <FooterLink to="/signin">Ambassadors</FooterLink>
                            <FooterLink to="/signin">Agency</FooterLink>
                            <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                            <FooterLink to="/signin">Destinations</FooterLink>
                            <FooterLink to="/signin">Sponsorships</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink target="_blank" rel="noopener noreferrer" to={'//facebook.com'}><FaFacebook /></SocialIconLink>
                            <SocialIconLink target="_blank" rel="noopener noreferrer" to={'//instagram.com'}><FaInstagram /></SocialIconLink>
                            <SocialIconLink target="_blank" rel="noopener noreferrer" to={'//youtube.com'}><FaYoutube /></SocialIconLink>
                            <SocialIconLink target="_blank" rel="noopener noreferrer" to={'//twitter.com'}><FaTwitter /></SocialIconLink>
                            <SocialIconLink target="_blank" rel="noopener noreferrer" to={'//linkedin.com'}><FaLinkedinIn /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap> 
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
