import { HeaderButtonContainer, HeaderContainer, HeaderButton } from "./styles";
import coffeeLogoImg from "../../assets/Logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            <div className="container">
                <img src={coffeeLogoImg} />

                <HeaderButtonContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Porto Alegre, RS
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                        <ShoppingCart size={20} weight="fill" />
                    </HeaderButton>
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
    )
}