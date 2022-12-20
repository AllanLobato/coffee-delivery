import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../components/QuantityInput";
import { RegularText } from "../../../components/Typography";
import { coffees } from "../../../data/coffee";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCartCard() {
    return (
        <CoffeeCartCardContainer>
            <div>
            {/* <img src={`/coffees/${coffee.photo}`} /> */}
            <img src="" />
                <div>
                    <RegularText color="subtitle">Expresso tradicional</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" />
                        <RemoveButton>
                            <Trash size={16}/>
                            Remover
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$9,90</p>
        </CoffeeCartCardContainer>
    )
}