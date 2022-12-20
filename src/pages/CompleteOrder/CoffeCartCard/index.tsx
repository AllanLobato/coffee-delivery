import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../components/QuantityInput";
import { RegularText } from "../../../components/Typography";
import { CartItem } from "../../../contexts/CartContext";
import { coffees } from "../../../data/coffee";
import { formatMoney } from "../../../utils/formatMoney";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

// export interface Coffee {
//     id: number;
//     tags: string[];
//     name: string;
//     description: string;
//     photo: string;
//     price: number;
// }

// interface CoffeeProps {
//     coffee: Coffee;
// }

interface CoffeeCartCardProps {
    coffee: CartItem
}

export function CoffeeCartCard({coffee}: CoffeeCartCardProps) {
    const coffeeTotal = coffee.price * coffee.quantity
    const formattedPrice = formatMoney(coffeeTotal)
    return (
        <CoffeeCartCardContainer>
            <div>
            <img src={`/coffees/${coffee.photo}`} />
                <div>
                    <RegularText color="subtitle">{coffee.name}</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small" quantity={coffee.quantity} />
                        <RemoveButton>
                            <Trash size={16}/>
                            Remover
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ {formattedPrice}</p>
        </CoffeeCartCardContainer>
    )
}