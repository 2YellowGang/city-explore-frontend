import { FC } from 'react';
import { PlaceDetailsContainer, StyledSection } from "./PlaceDetails.styles"
import { ViewLayout } from '../../components/ViewLayout';
import { Heading } from '../../components/Heading';
import { ContentContainer } from '../../components/ContentContainer';
import wiezaEiffla from '../../assets/places/wieza-eiffla.jpg';
import { Section } from '../../components/Section';



export const PlaceDetails: FC = () => {

    return (
        <ViewLayout>
            <ContentContainer>
                <PlaceDetailsContainer>
                    <div>
                        <div style={{ backgroundImage: `url(${wiezaEiffla})` }}></div>
                        <StyledSection>
                            <Heading>Zwiedzanie wieży Eiffla</Heading>
                            <p>Wieża Eiffla w Paryżu to niezwykłe miejsce, które warto odwiedzić podczas podróży do stolicy Francji. Ta majestatyczna stalowa konstrukcja, która stanowi symbol miasta, oferuje niezapomniane doświadczenia. Na początku wznoszenia na wieżę, podziwiając przepiękne widoki na panoramę Paryża, można odczuć dreszczyk emocji i zachwytu. Po dotarciu na szczyt wieży Eiffla, widok jest jeszcze bardziej zapierający dech w piersiach. Z dala rozciąga się wspaniała panorama miasta, z widokiem na słynne zabytki, jak Luwr, Katedra Notre-Dame i Sekwana. Wieczorem wieża zapiera dech w piersiach, kiedy cała jest oświetlona i migocząca światłami, tworząc niesamowitą atmosferę romantyzmu. To niezapomniane przeżycie, które pozostawi niezatarte wspomnienia w sercu każdego odwiedzającego.</p>
                        </StyledSection>
                    </div>
                    <Section>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, modi neque non accusantium aliquid tempore placeat voluptates ullam debitis labore possimus dolorum magnam, dolor culpa tempora consequuntur, beatae officiis ducimus amet numquam optio! Non alias tempore minima. Quisquam sequi nisi eius eaque necessitatibus veniam incidunt nulla nobis tenetur quo ipsa laboriosam animi earum consequuntur inventore sunt, vitae recusandae qui. Id mollitia eveniet sint explicabo facere quaerat quasi commodi aliquid voluptatibus. Impedit cupiditate laboriosam at reprehenderit ipsum consequatur vitae rerum placeat distinctio dolores! Atque labore aut ea dolore sapiente voluptatibus voluptatum molestias voluptas, maiores, dolor neque tempora voluptates quidem consectetur laborum.</p>
                    </Section>
                </PlaceDetailsContainer>
            </ContentContainer>
        </ViewLayout>
    );
}