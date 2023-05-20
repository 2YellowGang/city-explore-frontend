import { FC, useMemo } from 'react';
import { ViewLayout } from '../../components/ViewLayout';
import { useParams } from 'react-router';
import { _guiders } from '../../mockedData';
import {
  AvatarImage,
  FlexContainer,
  GuiderAvatarContainer,
  GuiderButtonsContainer,
  GuiderInfoContainer,
  InfoColumn,
  RelationItem,
  RelationsContainer,
  RelationsFlexContainer,
  SkillContainer,
  SkillsFlexContainer,
  StyledContentContainer,
} from './GuiderDetails.styles';
import { Button, SecondButton } from '../../components/Button';

import stars5 from '../../assets/stars5.svg';
import playIcon from '../../assets/play-icon.svg';

export const GuiderDetails: FC = () => {
  const { id } = useParams<{ id: string }>();

  const guiderData = useMemo(
    () => _guiders.find((guider) => guider.id.toString() === id),
    [id],
  );

  if (!guiderData) {
    return null;
  }

  return (
    <ViewLayout>
      <StyledContentContainer>
        <FlexContainer>
          <GuiderAvatarContainer>
            <AvatarImage src={guiderData.avatar} />
          </GuiderAvatarContainer>
          <GuiderInfoContainer>
            <h1>
              {guiderData.name} {guiderData.surname}
            </h1>
            <div>
              <img src={stars5} />
              <span>(47 opinii)</span>
            </div>
            <p>{guiderData.description}</p>
          </GuiderInfoContainer>
          <GuiderButtonsContainer>
            <Button>Zobacz w jakich miejscach przewodzę</Button>
            <SecondButton>Zarezerwuj termin</SecondButton>
            <SecondButton>Napisz do mnie</SecondButton>
          </GuiderButtonsContainer>
        </FlexContainer>
        <SkillsFlexContainer>
          <InfoColumn>
            <h3>Umiejętności</h3>
            {guiderData.skills.map((skill) => (
              <SkillContainer key={skill.name}>
                <p>{skill.name}</p>
                <span>{skill.up}</span>
                <span>{skill.down}</span>
              </SkillContainer>
            ))}
          </InfoColumn>
          <InfoColumn>
            <h3>Języki</h3>
            {guiderData.languages.map((lang) => (
              <img src={lang.icon} />
            ))}
          </InfoColumn>
          <InfoColumn>
            <h3>Zainteresowania</h3>
            <p>{guiderData.interests.join(', ')}</p>
          </InfoColumn>
        </SkillsFlexContainer>
        <RelationsFlexContainer>
          <InfoColumn style={{ width: '100%' }}>
            <h3>Relacje</h3>
            <RelationsContainer>
              {guiderData.relations.map((relation) => (
                <RelationItem
                  key={relation.cover}
                  style={{ backgroundImage: `url(${relation.cover})` }}
                >
                  {relation.type === 'video' && <img src={playIcon} />}
                </RelationItem>
              ))}
            </RelationsContainer>
          </InfoColumn>
        </RelationsFlexContainer>
      </StyledContentContainer>
    </ViewLayout>
  );
};
