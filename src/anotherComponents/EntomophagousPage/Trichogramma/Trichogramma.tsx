import trichogram from "../../../images/trichogram.jpg";
import { BugInfo } from "../../common/BugInfo/BugInfo";

export const Trichogramma = () => {
    const bugInfo = {
        paragraph: [
            "Расселение трихограммы на полях России рекомендуется проводить как в стандартные сроки внесения, в которые наблюдается максимальная активность всех видов вредителей, так и при видимом появлении вредителей. В этом случае можно добиться максимальной эффективности с минимальным вредом для культур.",
            "Для расселения трихограммы используется специальная автоматизированная система,  которая устанавливается на дроны мультироторного типа.",
            "За 60 минут полета дрон со специальным дозатором обрабатывает до 100 гектаров. Эффективность комплексной защиты растений с помощью энтомофагов достигает 90%.",
        ],
        againstWhat: [
            "Совки",
            "Мотыльки",
            "Плодожорки",
            "Огневки",
            "Листовертки",
        ],
        efficiency: "Трихограмма эффективна против таких вредителей:",
    };

    return (
        <BugInfo
            uniqueStyle="1"
            headline={{ green: "Трихограмма", black: "Эффективная защита" }}
            picture={trichogram}
            subTitle="трихограмма"
            bugInfo={bugInfo}
            explanation="Трихограмма — мелкое насекомое, которое будучи личинкой, питается яйцами паразитов. Современные комплексы БПЛА (дроны) могут использоваться не только для сбора информации, но и для высокоэффективной и экономичной борьбы с вредителями урожая с помощью распыления трихограммы. Трихограмму можно вносить для защиты от совок, кукурузного мотылька, лугового мотылька и других чешуекрылых вредителей. Она паразитирует на яйцах более 70 видов вредителей."
        />
    );
};
