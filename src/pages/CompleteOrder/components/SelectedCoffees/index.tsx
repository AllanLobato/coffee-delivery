import { TitleText } from "../../../../components/Typography";
import { CoffeeCartCard } from "../../CoffeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffes() {
    return(
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés Selecionados
            </TitleText>

            <DetailsContainer>
            <CoffeeCartCard />
            <CoffeeCartCard />
            <CoffeeCartCard />

            <ConfirmationSection />

            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}