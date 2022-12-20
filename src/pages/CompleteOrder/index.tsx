import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffes } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
    return (
        <CompleteOrderContainer className="container">
            <CompleteOrderForm />
            <SelectedCoffes />
        </CompleteOrderContainer>
    )
}